const path = require('path');
const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/ponyo', (req, res) => {
	res.send('aaaa');
});

app.listen(process.env.PORT, () => {
 console.log(`Example app listening on port ${process.env.PORT}!`)
})
