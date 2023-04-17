const createMeeting = async () => {
    const resp = await fetch("/meetings", {
        method: "POST",
        body: JSON.stringify({ title: "New Code pair" }),
        headers: { "Content-Type": "application/json" }
    })
    const data = await resp.json()
    console.log(data)
    return data.data.id;
}

const joinMeeting = async (id) => {
    const resp = await fetch(`/meetings/${id}/participants`, {
        method: "POST",
        body: JSON.stringify({ name: "new user", preset_name: "group_call_host" }),
        headers: { "Content-Type": "application/json" }
    })
    const data = await resp.json()
    console.log(data)
    return data.data.token;
}

export { createMeeting, joinMeeting }