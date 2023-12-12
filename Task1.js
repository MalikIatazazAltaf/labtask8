const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// ReadFile Endpoint
app.get('/readFile', async (req, res) => {
  try {
    const data = await fs.readFile('text.txt', 'utf8');
    res.send(data);
  } catch (err) {
    res.status(500).send('Error reading the file.');
  }
});

// WriteFile Endpoint
app.post('/writeFile', async (req, res) => {
  try {
    const newData = req.body.data;
    if (!newData) {
      return res.status(400).send('No data provided in the request.');
    }

    await fs.writeFile('text.txt', newData);
    res.send('File written successfully.');
  } catch (err) {
    res.status(500).send('Error writing to the file.');
  }
});

// UpdateFile Endpoint
app.put('/updateFile', async (req, res) => {
  try {
    const newData = req.body.data;
    if (!newData) {
      return res.status(400).send('No new data provided in the request.');
    }

    await fs.appendFile('text.txt', `\n${newData}`);
    res.send('File updated successfully.');
  } catch (err) {
    res.status(500).send('Error updating the file.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
