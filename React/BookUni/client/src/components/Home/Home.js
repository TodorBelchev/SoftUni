import { useEffect, useState } from "react";

import hotelService from '../../services/hotelService';
import useHttp from '../../hooks/useHttp';
import HotelCard from "../hotel/HotelCard/HotelCard";

const Home = () => {
    const [hotels, setHotels] = useState([]);
    const { sendRequest, isLoading } = useHttp();

    useEffect(() => {
        sendRequest(
            hotelService.getHotels(),
            (res) => setHotels(res)
        );
    }, []);

    return (
        <section id="viewCatalog" className="background-img">
            {hotels.length > 0 && !isLoading &&
                <div className="added-hotels">
                    {hotels.map(x => <HotelCard key={x._id} hotel={x} />)}
                </div>}
            {hotels.length === 0 && !isLoading &&
                <div className="guest">
                    There are no Hotels found...
                </div>}
        </section>
    )
};

export default Home;