/** @format */

const router = require('express').Router();
const { OK, NOT_FOUND } = require('http-status-codes/StatusCodes');
const db = require('../db');

router.get('/sanity', async (_, res) => {
    console.log('Sanity test request');
    res.status(OK).json({ message: 'backend is alive' });
});

router.get('/ages', async (_, res) => {
    console.log('Querying db for user_ages in users');
    const data = await db.getAllUserAges();
    res.status(OK).json({ user_ages: data });
});

router.get('/user/:id', async (req, res) => {
    if (req.params.id == null)
        return res.status(NOT_FOUND).json({ error: "id can't be null" });
    console.log('Querying user data');
    const data = await db.getUserData(req.params.id);
    res.status(OK).json({ userData: data });
});

module.exports = router;
