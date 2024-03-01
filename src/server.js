// // server.js
// const express = require('express');
// const app = express();
// const port = 3000;

// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Server-side validation endpoint
app.post('/api/validate', (req, res) => {
  const formData = req.body;

  // Perform server-side validation
  const errors = validateFormData(formData);

  if (errors.length === 0) {
    // If no errors, send success response
    res.status(200).json({ message: 'Form data is valid.' });
  } else {
    // If there are errors, send validation errors
    res.status(400).json({ errors });
  }
});

// Server-side validation logic
function validateFormData(formData) {
  const errors = [];

  // Example: Validate 'salutation' and 'gender' pairing
  if (formData.salutation === 'Mr' && formData.gender !== 'Male') {
    errors.push({ field: 'gender', message: 'For Mr, gender should be Male.' });
  } else if (formData.salutation === 'Mrs' && formData.gender !== 'Female') {
    errors.push({ field: 'gender', message: 'For Mrs, gender should be Female.' });
  }

  if (formData.nationality && formData.COR && formData.nationality !== formData.COR) {
    errors.push({field: 'COR', message: 'Nationality and Country of Residence must be same.'})
  }

  if (formData.age_proof === 'Pan' && (!formData.panNumber || !isValidPan(formData.panNumber))) {
    errors.push({ field: 'panNumber', message: 'Invalid PAN Number. Please enter valid PAN Numner'})
  }
  
  return errors;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});