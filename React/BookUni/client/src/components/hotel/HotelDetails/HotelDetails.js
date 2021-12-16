import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import useHttp from '../../../hooks/useHttp';
import hotelService from '../../../services/hotelService';
import { UserContext } from '../../../context/userContext';

const HotelDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState({});
    const { sendRequest } = useHttp();

    const isOwner = user._id === hotel.owner;
    const isBooked = hotel._id && hotel.usersBooked.includes(user._id);

    useEffect(() => {
        sendRequest(
            hotelService.getById(hotelId),
            (res) => setHotel(res)
        );
    }, []);

    const deleteClickHandler = (e) => {
        e.preventDefault();

        sendRequest(
            hotelService.deleteHotel(hotelId),
            () => navigate('/')
        );
    };

    const bookHotelHandler = (e) => {
        e.preventDefault();

        sendRequest(
            hotelService.book(hotelId, user._id),
            (res) => setHotel(res)
        );
    };

    return (
        <section id="viewhotelDetails">
            <h2>Details</h2>
            <div className="hotel-ticket">
                <div className="hotel-left">
                    <img src={hotel.imgUrl} alt="hotel" />
                </div>
                <div className="hotel-right">
                    <div>
                        <h3>{hotel.name}</h3>
                    </div>
                    <div>{hotel.city}</div>
                    <p><span >Free rooms: {hotel.freeRooms}</span> </p>
                    {isBooked && <p><span className="green">You already have booked a room</span> </p>}

                    {!isOwner && user._id && !isBooked && <NavLink onClick={bookHotelHandler} to={`/hotel/${hotel._id}/book`} className="book">Book</NavLink>}
                    {isOwner &&
                        <>
                            <NavLink to={`/hotel/${hotel._id}/edit`} className="edit">Edit</NavLink>
                            <NavLink onClick={deleteClickHandler} to={`/hotel/${hotel._id}/delete`} className="remove">Delete</NavLink>
                        </>}
                </div>
            </div>
        </section>
    )
};

export default HotelDetails;