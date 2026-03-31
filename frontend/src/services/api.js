const BASE_URL = "http://127.0.0.1:8000/api";

export const getInovasi = async () => {
  const response = await fetch(`${BASE_URL}/inovasi/`);
  return response.json();
};

export const getPengaduan = async () => {
  const response = await fetch(`${BASE_URL}/pengaduan/`);
  return response.json();
};

export const createPengaduan = async (data) => {
  const response = await fetch(`${BASE_URL}/pengaduan/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};