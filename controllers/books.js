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

module.exports = router;