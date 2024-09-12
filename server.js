const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Render the form on the main page
app.get('/', (req, res) => {
    res.render('home');  // Render index.ejs from the views folder
});

app.get("/form",(req,res)=>{
    res.render('index');
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const formData = {
        nitrogen: req.body.nitrogen,
        phosphorus: req.body.phosphorus,
        potassium: req.body.potassium,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        pH: req.body.pH,
        rainfall: req.body.rainfall,
    };
    console.log(formData);

    try {
        // Send data to Flask API
        const response = await axios.post('http://127.0.0.1:5000/predict-crop', formData);
        const predictedCrop = response.data.predicted_crop;

        // Render the result to the user
        console.log(`Predicted crop is ${predictedCrop}`);
        res.render('result', { crop: predictedCrop });  // Render result.ejs with the crop data
    } catch (error) {
        res.send(`<h1>Error occurred: ${error.message}</h1>`);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
