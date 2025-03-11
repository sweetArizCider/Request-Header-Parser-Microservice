require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/api/whoami', (req, res) => {
  const ip = req.ip
  const language = req.headers["accept-language"];
  const userAgent = req.headers["user-agent"];

  res.status(200).json({ipaddress: ip, language : language, software: userAgent});
});

const listener = app.listen(process.env.PORT || 3000,() => {
  console.log('Your app is listening on port ' + listener.address().port);
});
