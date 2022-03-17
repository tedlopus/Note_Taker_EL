const apiRouter = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

apiRouter.get('/notes', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    );      

apiRouter.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        };
        readAndAppend(newNote, './db/db.json');
        res.json('New note added.');
    } else {
      res.json('Unable to add new note.');
    }
});

module.exports = apiRouter;