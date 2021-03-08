const express =  require('express')

const app = express()

const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3000

app.use('/*', (req, res, next) => {
  console.log(req.method, req.baseUrl);
  next();
});

// config body parser application
app.use(express.json());

// Cors
app.use(cors());

// Routes
require('./src/app/routes')(app);

// Port
app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});

module.exports = app;
