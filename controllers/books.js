const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ data: [
        {
            title: 'Angular in motion',
        },
        {
            title: 'React for newsbies'
        }
    ]})
})

module.exports = router;