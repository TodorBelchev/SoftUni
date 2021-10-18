import { useEffect, useState } from 'react';

import Card from '../Card/Card';

import classes from './TopHouses.module.css';

const TopHouses = () => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3030/api/offers/top')
            .then(res => res.json())
            .then(data => {
                setOffers(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message)
                setIsLoading(false);
            });
    }, []);


    return (
        <section className={classes['top-houses']}>
            <h1>Top Houses</h1>
            {isLoading && <div>Loading...</div>}
            {!isLoading && <div className={classes.houses}>

                {offers.length > 0 && offers.map(Card)}

                {/* <!-- If there are still no offers for housing in the database display: --> */}
                {offers.length <= 0 && <div className={classes['no-data-container']}>
                    <p className={classes['no-data']}>There are no housing offers found...</p>
                </div>}
            </div>}
        </section>
    )
};

export default TopHouses;