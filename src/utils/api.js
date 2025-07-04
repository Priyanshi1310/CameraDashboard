const API_BASE = "https://api-app-staging.wobot.ai/app/v1"
const TOKEN = "4ApVMIn5sTxeW7GQ5VWeWiy";

export const fetchCameras = async() =>{
    const res = await fetch(`${API_BASE}/fetch/cameras`,{
        headers:{Authorization:`Bearer ${TOKEN}`},
});
const data = await res.json();
console.log("data" ,data);
return data.data;
}

export const updateStatus = async (id, status) => {
  await fetch(`${API_BASE}/update/camera/status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ id, status }),
  });
};