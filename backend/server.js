// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/rsvp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// RSVP Schema
const rsvpSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  attending: { 
    type: String, 
    required: true 
}
});

// RSVP Model
const RSVP = mongoose.model('RSVP', rsvpSchema);

// Routes
app.post('/api/rsvp', async (req, res) => {
  try {
    const newRSVP = new RSVP(req.body);
    await newRSVP.save();
    res.status(201).json({ message: 'RSVP saved successfully!' });
  } catch (error) {
    console.log("error submitting rsvp:",error)
    res.status(400).json({ error: 'Failed to save RSVP' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
