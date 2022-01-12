const express = require('express');
const res = require('express/lib/response');
const books = require('../books');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ data: [...books]})
});

router.get('/:id', (req, res) => {
    res.json({ data: books.find(book => book.id == req.params.id) })
});

router.get('/search/:title', (req, res) => {
    const filtered = books.filter(book => book.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json({ data: [ ...filtered ] })
});

router.post('/', (req, res) => {
    res.json({ data: [ ...books, { title: 'dasda' } ]})
});

module.exports = router;