/** @format */

const router = require('express').Router();
const { OK } = require('http-status-codes');

router.get('/sanity', (_, res) => {
    console.log('Sanity test request');
    res.status(OK).json({ message: 'backend is alive' });
});

module.exports = router;
