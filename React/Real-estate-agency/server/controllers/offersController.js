const { Router } = require('express');

const { createOffer, getAll, getById, rent, deleteById } = require('../services/offerService');
const { decodeToken } = require('../middlewares');

const router = Router();

router.post('/create', decodeToken(), async (req, res) => {
    try {
        const homeName = req.body.homeName.trim();
        const propertyType = req.body.propertyType.trim();
        const year = Number(req.body.year);
        const city = req.body.city.trim();
        const homeImage = req.body.homeImage.trim();
        const description = req.body.description.trim();
        const availablePieces = Number(req.body.availablePieces);

        if (homeName.length < 6) {
            throw new Error('Home name must be at least 6 characters long!');
        }

        if (year < 1850 || year > 2021) {
            throw new Error('Year built must be between 1850 and 2021!');
        }

        if (city.length < 4) {
            throw new Error('City name must be at least 4 characters long!');
        }

        if (!homeImage.match(/^https?:\/\//)) {
            throw new Error('Please enter valid home image url!');
        }

        if (description.length > 60) {
            throw new Error('Description must be maximum 60 characters long!');
        }

        if (availablePieces < 0 || availablePieces > 10) {
            throw new Error('Available pieces must be between 0 and 10!');
        }

        const offer = await createOffer(
            homeName,
            propertyType,
            year,
            city,
            homeImage,
            description,
            availablePieces,
            req.decoded.id);
        res.status(201).send(offer);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const offers = await getAll();
        res.status(200).send(offers);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const offer = await getById(req.params.id);
        res.status(200).send(offer);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const response = await deleteById(req.params.id);
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.post('/:id/rent', decodeToken(), async (req, res) => {
    try {
        const offer = await rent(req.params.id, req.decoded.id);
        res.status(200).send(offer);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;