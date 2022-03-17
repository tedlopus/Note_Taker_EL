const express = require('express');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api/notes', api);
app.use('/html', html);

app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}`)
);