import { useNavigate } from 'react-router-dom';

import useHttp from '../../../hooks/useHttp';
import hotelService from '../../../services/hotelService';

const AddHotel = () => {
    const navigate = useNavigate();
    const { sendRequest } = useHttp();

    const submitHandler = (e) => {
        e.preventDefault();
        const { name, city, freeRooms, imgUrl } = Object.fromEntries(new FormData(e.currentTarget));
        // validate inputs
        sendRequest(
            hotelService.create(name, city, freeRooms, imgUrl),
            () => navigate('/')
        )
    };

    return (
        <section id="viewAddhotel">
            <h2>Add new hotel</h2>
            <form id="formAddhotel" onSubmit={submitHandler}>
                <label htmlFor="name">Hotel name:</label>
                <input type="text" id="name" name="name" placeholder="Hotel name" />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" placeholder="City" />
                <label htmlFor="freeRooms">Free rooms:</label>
                <input type="number" id="freeRooms" name="freeRooms" placeholder="Free rooms" />
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" placeholder="https://" />
                <input type="submit" className="create" value="Add" />
            </form>
        </section>
    )
};

export default AddHotel;