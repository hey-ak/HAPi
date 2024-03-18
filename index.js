const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const inputArray = req.body.array;

    const evenNumbers = inputArray.filter(num => num % 2 === 0);
    const oddNumbers = inputArray.filter(num => num % 2 !== 0);
    const alphabetsUpperCase = inputArray.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

    const user_id = "john_doe_17091999";

    const response = {
        user_id: user_id,
        is_success: true,
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets_uppercase: alphabetsUpperCase
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
