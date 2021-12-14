const { Router } = require('express');

const { getHotelById, getHotelByName, editHotel } = require('../services/hotelService');
const { validateHotel } = require('../validators');
const { isLoggedIn } = require('../middlewares');

const router = Router();

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
            name: req.params.name.trim(),
            city: req.params.city.trim(),
            imgUrl: req.params.imgUrl.trim(),
            freeRooms: Number(req.params.freeRooms.trim()),
            hotel: await getHotelByName(name),
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
            name: req.params.name.trim(),
            city: req.params.city.trim(),
            imgUrl: req.params.imgUrl.trim(),
            freeRooms: Number(req.params.freeRooms.trim()),
            hotel: await getHotelByName(name)
        }

        validateHotel(hotelData);
        const hotel = await editHotel(hotelData);
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