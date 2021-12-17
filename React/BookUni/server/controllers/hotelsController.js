const { Router } = require('express');

const { getHotelById, getHotelByName, editHotel, createHotel, getHotels, deleteHotel } = require('../services/hotelService');
const  { getById } = require('../services/userService');
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
        const user = await getById(req.decoded.id);
        const result = await createHotel(hotelData);
        user.offeredHotels.push(result._id);
        await user.save();
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

router.get('/:id/book', isLoggedIn(), async (req, res) => {
    try {
        const hotel = await getHotelById(req.params.id);
        hotel.usersBooked.push(req.decoded.id);
        hotel.freeRooms--;
        await hotel.save();
        res.status(200).send(hotel);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
});


module.exports = router;