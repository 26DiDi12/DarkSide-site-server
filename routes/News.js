const express = require("express");
const router = express.Router();
const { News } = require('../models');

router.get('/', async (req, res) => {
    const listOfNews = await News.findAll();
    res.json(listOfNews);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const newses = await News.findByPk(id);
    res.json(newses);
});

router.post('/', async (req, res) => {
    const newses = req.body;
    await News.create(newses);
    res.json(newses);
});

router.put('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const newses = await News.findByPk(id);
    await News.update(req.body, { where: { id: req.params.id }});
    res.json(newses);
});

router.delete('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const newses = await News.findByPk(id);
    await newses.destroy();
    res.status(200).json({
        message: 'User deleted.'
    });
});

module.exports = router;