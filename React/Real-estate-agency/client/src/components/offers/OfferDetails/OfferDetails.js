import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';
import OwnerControls from '../OwnerControls/OwnerControls';

import classes from './OfferDetails.module.css';

const OfferDetails = () => {
    const [offer, setOffer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(UserContext);
    const params = useParams();
    const { id } = params;
    const isOwner = offer && user._id === offer.owner;
    const isRented = offer && offer.rentedUsers.find(x => x._id === user._id);

    const getDetails = useCallback(async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/api/offers/' + id);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data);
            }

            setOffer(data);
        } catch (error) {
            // show notification
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getDetails(id);
    }, [getDetails, id]);

    const rentHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3030/api/offers/' + id + '/rent', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({})
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data);
            }

            setOffer(data);
        } catch (error) {
            // show notification
        }
    }

    return (
        <section>
            {!isLoading && offer && <div className={classes.wrapper}>
                <div className={classes['product-img']}>
                    <img src={offer.homeImage} alt="house" />
                </div>
                <div className={classes['product-info']}>
                    <div className={classes['product-text']}>
                        <div className={classes['product-text']}>
                            <h1>Name: {offer.homeName}</h1>
                            <h2>Type: {offer.propertyType}</h2>
                            <h4>Year: {offer.year}</h4>
                            <h4>City: {offer.city}</h4>
                            <p>{offer.description}</p>

                            {offer.rentedUsers.length > 0 && <p>People rented this housing: {offer.rentedUsers.map(x => x.name).join(', ')}</p>}

                            {offer.rentedUsers.length === 0 && <p>People rented this housing: There are no tenants yet.</p>}
                        </div>
                    </div>

                    {/* <!-- if there is no registered user, do not display buttons--> */}
                    {user.username && <div className={classes['product-btn']}>
                        {/* <!-- Only for registered user and creator of the housing offer--> */}
                        {isOwner && <OwnerControls offer={offer} />}

                        {/* <!-- logged in user with available pieces--> */}
                        {!isOwner
                            && !isRented
                            && offer.availablePieces > 0
                            && <a href={`/${offer._id}/rent`} className={classes.rentHome} onClick={rentHandler}>Rent a home, available {offer.availablePieces} housing</a>}
                        {!isOwner
                            && isRented
                            && <p className={classes.alRentHome}>You have already rent this home</p>}

                        {/* <!-- logged in user with no available pieces--> */}
                        {!isOwner
                            && offer.availablePieces === 0
                            && <p className={classes['no-housing']}>No Housing Available!</p>}
                    </div>}
                </div>
            </div>}
        </section>
    );
};

export default OfferDetails;