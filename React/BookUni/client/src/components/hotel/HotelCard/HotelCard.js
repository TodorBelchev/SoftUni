import { NavLink } from "react-router-dom";

const HotelCard = ({ hotel }) => {
    return (
        <NavLink to={`/hotel/${hotel._id}`} className="added-hotel">
            <img src={hotel.imgUrl} alt="hotel"
                className="picture-added-hotel" />
            <h3>{hotel.name} {hotel.city}</h3>
            <span>Free rooms: {hotel.freeRooms}</span>
        </NavLink>
    )
};

export default HotelCard;