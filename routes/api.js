const fs = require('fs');
const apiRouter = require('express').Router();

apiRouter.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });      
});

apiRouter.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        
        let newNote = req.body;
        res.json(JSON.parse(data));
        data.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        });

        res.end();
    });      
})

module.exports = apiRouter;