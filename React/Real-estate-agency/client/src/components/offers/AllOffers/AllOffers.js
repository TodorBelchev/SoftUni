import { useCallback, useEffect, useState } from 'react';

import Notification from '../../notification/Notification';
import CardOffer from '../OfferCard/OfferCard';

import classes from './AllOffers.module.css';

const AllOffers = () => {
    const [offers, setOffers] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOffers = useCallback(async (search = '') => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/api/offers?propertyType=' + search);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data);
            }

            setOffers(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const searchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        fetchOffers(search);
    }

    useEffect(() => {
        fetchOffers();
    }, [fetchOffers]);

    return (
        <section className={classes['all-listings']}>
            {error && <Notification message={error} />}
            <h1>Apartments for rent</h1>
            {isLoading && <div>Loading...</div>}

            <div className={classes['search-container']}>
                <form className={classes.search} onSubmit={searchHandler}>
                    <input
                        type="search"
                        name="propertyType"
                        id="propertyType"
                        placeholder="Search here..."
                        value={search}
                        onChange={searchChangeHandler}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            {!isLoading && offers && offers.map(x => (
                <CardOffer
                    key={x._id}
                    description={x.description}
                    homeName={x.homeName}
                    _id={x._id.toString()}
                    homeImage={x.homeImage}
                />
            ))}

            {!isLoading && offers.length === 0 && <div className={classes['no-data-listing']}>
                <p>There are no housing offers found...</p>
            </div>}

        </section>
    );
};

export default AllOffers;