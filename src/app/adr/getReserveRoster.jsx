const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN;
const reserveApiUrl = process.env.REACT_APP_RESERVE_API_URL;

async function GetReserveRoster() {
  "use server";
  const response = await fetch(reserveApiUrl, {
    headers: {
      Authorization: CLIENT_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error("HTTP Error! status: " + response.status);
  }

  const data = await response.json();

  return data;
}

export default await GetReserveRoster();
