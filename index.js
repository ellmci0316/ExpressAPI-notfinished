const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Replace with your actual .NET API URL
const dotNetApiUrl = 'emwebblabb2appservice.azurewebsites.net';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express API!');
});

// Endpoint to get data from .NET API
app.get('/items', async (req, res) => {
    try {
        const response = await axios.get(`${dotNetApiUrl}/items`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to post data to .NET API
app.post('/items', async (req, res) => {
    try {
        const response = await axios.post(`${dotNetApiUrl}/items`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Express API listening at http://localhost:${port}`);
});
