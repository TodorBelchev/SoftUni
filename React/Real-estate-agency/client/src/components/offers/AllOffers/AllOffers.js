import { useCallback, useEffect, useState } from 'react';

import CardOffer from '../OfferCard/OfferCard';

import classes from './AllOffers.module.css';

const AllOffers = () => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(offers);
    const fetchOffers = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/api/offers');
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data);
            }

            setOffers(data);
        } catch (error) {
            // set error and show notification
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchOffers();
    }, [fetchOffers]);

    return (
        <section className={classes['all-listings']}>
            <h1>Apartments for recents</h1>
            {isLoading && <div>Loading...</div>}

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