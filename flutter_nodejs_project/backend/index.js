const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;
const ip = '192.168.137.1';

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/reclamationDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Reclamation schema
const reclamationSchema = new mongoose.Schema({
  reclamation: String,
});

// Create Reclamation model
const Reclamation = mongoose.model('Reclamation', reclamationSchema);

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

app.post('/reclamation', async (req, res) => {
  console.log('Received a POST request at /reclamation');
  console.log('Request body:', req.body);

  const reclamation = req.body.reclamation;

  if (!reclamation) {
    console.error('Reclamation is required');
    return res.status(400).send('Reclamation is required');
  }

  // Create new reclamation
  const newReclamation = new Reclamation({ reclamation });

  // Save new reclamation to database
  await newReclamation.save();

  res.status(201).send('Reclamation added');
});

app.listen(port, ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});