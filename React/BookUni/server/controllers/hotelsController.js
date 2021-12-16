const { Router } = require('express');

const { getHotelById, getHotelByName, editHotel, createHotel, getHotels, deleteHotel } = require('../services/hotelService');
const { validateHotel } = require('../validators');
const { isLoggedIn } = require('../middlewares');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const hotels = await getHotels();
        res.status(200).send(hotels);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const hotel = await getHotelById(req.params.id);
        res.status(200).send(hotel);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
});

router.post('/', isLoggedIn(), async (req, res) => {
    try {
        const hotelData = {
            name: req.body.name.trim(),
            city: req.body.city.trim(),
            imgUrl: req.body.imgUrl.trim(),
            freeRooms: Number(req.body.freeRooms.trim()),
            owner: req.decoded.id
        }
        const hotel = await getHotelByName(hotelData.name);

        if (hotel) {
            throw new Error('Name already taken!');
        }

        validateHotel(hotelData);
        const result = await createHotel(hotelData);
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
});

router.put('/:id', isLoggedIn(), async (req, res) => {
    try {
        const hotelData = {
            name: req.body.name.trim(),
            city: req.body.city.trim(),
            imgUrl: req.body.imgUrl.trim(),
            freeRooms: Number(req.body.freeRooms.trim()),
        }

        validateHotel(hotelData);
        const hotel = await editHotel(req.params.id, hotelData);
        res.status(200).send(hotel);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
});

router.delete('/:id', isLoggedIn(), async (req, res) => {
    try {
        await deleteHotel(req.params.id);
        res.status(200).send({ message: 'deleted' });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
});


module.exports = router;