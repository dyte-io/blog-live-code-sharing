const express = require('express');
const path = require('path');
const cors = require('cors');
const DyteAPI = require('./utils/dyte-api')
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'))
app.use(cors(process.env.FRONTEND_URL));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(path.join(__dirname, '../public/index.html'))
})

app.post('/meetings', async (req, res) => {
  const { title } = req.body
  const response = await DyteAPI.post('/api/meetings', {
    title,
  });
  return res.status(response.status).json(response.data);
});

app.post('/api/meetings/:meetingId/participants', async (req, res) => {
  const meetingId = req.params.meetingId
  const { name, picture, preset_name } = req.body
  const client_specific_id = `react-samples::${name.replaceAll(' ', '-')}-${Math.random().toString(36).substring(2, 7)}`;

    const response = await DyteAPI.post(`/meetings/${meetingId}/participants`, {
      name,
      picture,
      preset_name,
      client_specific_id,
    });

    return res.status(response.status).json(response.data);
});


app.listen(PORT, () => {
  console.log(`Started listening on ${PORT}...`)
});
