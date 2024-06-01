import axios from 'axios';
import fs from 'fs';

const fetchGeolocationData = async (ip) => {
  try {
    const response = await axios.get(`https://geo.ipify.org/api/v1`, {
      params: {
        apiKey: 'at_qqMqhINudbdNXSZrKRLBRoqjIPICX',
        ipAddress: ip,
      },
    });
    const { lat, lng } = response.data.location;
    return { lat, lng };
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
};

const processGeolocationData = async (alertData) => {
  const geolocationData = [];

  for (const alert of alertData) {
    const ip = alert.src_ip;
    const location = await fetchGeolocationData(ip);

    if (location) {
      geolocationData.push({
        src_ip: ip,
        ...location,
      });
    }
  }

  // Write geolocation data to a JSON file
  fs.writeFile('geoData.json', JSON.stringify(geolocationData, null, 2), (err) => {
    if (err) {
      console.error('Error writing geolocation data to file:', err);
    } else {
      console.log('Geolocation data successfully written to geoData.json');
    }
  });

  return geolocationData;
};

export default processGeolocationData;
