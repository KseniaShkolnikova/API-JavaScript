import axios from 'axios';

const idclient = '37d6c80ba9d14ce8a4658d4f09185dcd';
const secretclient = '4adb9d94d0c34001b51f4201ce0ddb93';

const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 
    'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(idclient + ':' + secretclient)
    }
  });
  return response.data.access_token;
};

const searchTracks = async (query, token) => {
  const response = await axios.get(`https://api.spotify.com/v1/search`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {
      q: query,
      type: 'track',
      limit: 10
    }
  });
  return response.data.tracks.items;
};

export { getAccessToken, searchTracks };
