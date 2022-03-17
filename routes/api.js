const fs = require('fs');
const apiRouter = require('express').Router();

apiRouter.get('/api/notes', (req, res) => {
    fs.readFromFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });      
});

apiRouter.post('/api/notes', (req, res) => {
    fs.readFromFile('./db/db.json', (err, data) => {
        if (err) throw err;
        
        let newNote = req.body;
        data.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        });

        res.json(data);
        res.end();
    });      
})
