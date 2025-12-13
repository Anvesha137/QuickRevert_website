const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for /ig/deauth
app.get('/ig/deauth', (req, res) => {
  res.status(200).json({ status: "deauthorized" });
});

// Endpoint for /ig/delete
app.get('/ig/delete', (req, res) => {
  res.status(200).json({ status: "data deletion received" });
});

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'dist')));

// For all other routes, serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});