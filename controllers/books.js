const express = require('express');
const data = require('../data');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.json({ data: [...data.books]})
});

router.get('/:id', (req, res) => {
    res.json({ data: data.books.find(book => book.id == req.params.id) })
});

router.get('/search/:title', (req, res) => {
    const filtered = data.books.filter(book => book.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json({ data: [ ...filtered ] })
});

router.post('/', (req, res) => {
    const copyToSave = Object.assign({}, data);
    copyToSave.books = [ ...data.books, { id: data.books.length + 1, ...req.body }];
    fs.writeFile('./data.json', JSON.stringify(copyToSave), () => {
        res.json({ data: [ ...copyToSave.books ]})
    }) 
});

module.exports = router;