
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())

// passing database
const db = require('./dbcon.js');
const route = require('./insert.js')
app.use('/',route)
app.listen(9000, () => console.log(`port running on 9000`))
