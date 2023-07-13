// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  const { method, query, body } = req;
  const targetUrl = req.query.target;
  try {
    const response = await axios({
      method,
      url: targetUrl,
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers required by the external API
      },
      data: body,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }  
    }
}
