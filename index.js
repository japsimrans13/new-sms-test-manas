const express = require('express');
const fast2sms = require('fast-two-sms');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.post('/sendMessage', async (req, res) => {

    console.log(req.body);

    const response = await fast2sms.sendMessage({
        authorization: process.env.FAST_SMS_KEY,
        message: req.body.message,
        numbers: [req.body.number]
    })
    console.log(response);
    res.status(201).send({"message": response});
});

app.get('/', (req, res) => {
    res.send({message: "welcome"})
});

app.listen(3000, () => { console.log('Listening on Port 3000'); });