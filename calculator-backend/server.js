const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const math = require('mathjs');

const app = express();
const port = 5000

// Enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

// POST route to calculate the result of the expression
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        const result = math.evaluate(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ result: 'Invalid expression' });
    }
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
