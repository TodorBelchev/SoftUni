import { useCallback, useEffect, useState } from 'react';

import Card from '../Card/Card';

import classes from './TopHouses.module.css';

const TopHouses = () => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadTopOffers = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/api/offers/top');
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data);
            }

            setOffers(data);
        } catch (error) {
            // show notification
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        loadTopOffers();
    }, [loadTopOffers]);


    return (
        <section className={classes['top-houses']}>
            <h1>Top Houses</h1>
            {isLoading && <div>Loading...</div>}
            {!isLoading && <div className={classes.houses}>

                {offers.length > 0 && offers.map(Card)}

                {offers.length <= 0 && <div className={classes['no-data-container']}>
                    <p className={classes['no-data']}>There are no housing offers found...</p>
                </div>}
            </div>}
        </section>
    )
};

export default TopHouses;