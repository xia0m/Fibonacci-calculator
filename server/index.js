const keys = require('./keys');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to porstgre

const {Pool} = require('pg');
const pgClient = new Pool({
  user:keys.pgUser,
  host:keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  ports: keys.pgPort
})