const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
const port = 3001; // Use a different port from your frontend (e.g., 3000)

app.use(express.json());
app.use(cors())

app.get('/api/companyvehiclelatestinfo', async (req, res) => {
  try {
    const response = await axios.get('http://vehicletrack.biz/api/companyvehiclelatestinfo?token=C_3BD0B0A02B', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000', // Set the appropriate origin
      },
    });
    // console.log(response.data)
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
