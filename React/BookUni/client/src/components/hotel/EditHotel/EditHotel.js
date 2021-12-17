import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useHttp from '../../../hooks/useHttp';
import hotelService from '../../../services/hotelService';

import Notification from '../../Notification/Notification';

const EditHotel = () => {
    const navigate = useNavigate();
    const { sendRequest, error, setError } = useHttp();
    const { id } = useParams();
    const [hotel, setHotel] = useState({});

    useEffect(() => {
        sendRequest(
            hotelService.getById(id),
            (res) => setHotel(res)
        );
    }, [sendRequest, id]);

    const submitHandler = (e) => {
        e.preventDefault();
        const { name, city, freeRooms, imgUrl } = Object.fromEntries(new FormData(e.currentTarget));
        
        if (name.trim().length < 4) {
            setError('Name must be at least 4 characters long!');
            return;
        }

        if (city.trim().length < 3) {
            setError('City must be at least 3 characters long!');
            return;
        }

        if (!imgUrl.trim().match(/https?/)) {
            setError('Invalid image URL!');
            return;
        }

        if (freeRooms <0 || freeRooms > 100) {
            setError('Free rooms must be between 1 and 100!');
            return;
        }

        sendRequest(
            hotelService.edit(id, name, city, freeRooms, imgUrl),
            () => navigate(`/hotel/${id}`)
        );
    };

    return (
        <section id="viewAddhotel">
             {error && <Notification text={error} />}
            <h2>Edit hotel</h2>
            <form id="formAddhotel" onSubmit={submitHandler}>
                <label htmlFor="name">Hotel name:</label>
                <input type="text" id="name" name="name" defaultValue={hotel.name} placeholder="Hotel name" />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" defaultValue={hotel.city} placeholder="City" />
                <label htmlFor="freeRooms">Free rooms:</label>
                <input type="number" id="freeRooms" name="freeRooms" defaultValue={hotel.freeRooms} placeholder="Free rooms" />
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" defaultValue={hotel.imgUrl} placeholder="https://" />
                <input type="submit" className="create" value="Edit" />
            </form>
        </section>
    )
};

export default EditHotel;