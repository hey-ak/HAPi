const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
const arr = req.body.data;
console.log(arr);

const user = "akshayjha_2110990127";

const alpha = arr.filter(ch => /[a-zA-Z]/.test(ch)).map(ch => ch.toUpperCase());
const oddArr = arr.filter(item => item % 2 !== 0);
const evenArr = arr.filter(item => item % 2 === 0);



const resp = {
    user_id: user,
    is_success: true,
    even_numbers: evenArr,
    odd_numbers: oddArr,
    alphabets_uppercase: alpha
};

res.json(resp);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
