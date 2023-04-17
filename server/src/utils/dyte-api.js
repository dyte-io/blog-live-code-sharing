const axios = require('axios');

require('dotenv').config();

const DYTE_API_KEY = process.env.DYTE_API_KEY;
const DYTE_ORG_ID = process.env.DYTE_ORG_ID;

const API_HASH = Buffer.from(
  `${DYTE_ORG_ID}:${DYTE_API_KEY}`,
  'utf-8'
).toString('base64');

const DyteAPI = axios.create({
  baseURL: 'https://api.cluster.dyte.in/v2',
  headers: {
    Authorization: `Basic ${API_HASH}`,
  },
});

module.exports = DyteAPI;
