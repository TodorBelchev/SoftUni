import { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Notification from '../../notification/Notification';

import classes from './EditOffer.module.css';

const EditOffer = () => {
    const [homeName, setHomeName] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [year, setYear] = useState('');
    const [city, setCity] = useState('');
    const [homeImage, setHomeImage] = useState('');
    const [description, setDescription] = useState('');
    const [availablePieces, setAvailablePieces] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();
    const params = useParams();
    const { id } = params;

    const setters = {
        homeName: setHomeName,
        propertyType: setPropertyType,
        year: setYear,
        city: setYear,
        homeImage: setHomeImage,
        description: setDescription,
        availablePieces: setAvailablePieces
    }

    const getDetails = useCallback(async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/api/offers/' + id);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data);
            }

            setHomeImage(data.homeImage);
            setHomeName(data.homeName);
            setPropertyType(data.propertyType);
            setYear(data.year);
            setCity(data.city);
            setDescription(data.description);
            setAvailablePieces(data.availablePieces);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getDetails(id);
    }, [getDetails, id]);

    const valueChangeHandler = (e) => {
        setters[e.target.id](e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const homeName = e.target.homeName.value.trim();
            const propertyType = e.target.propertyType.value.trim();
            const year = Number(e.target.year.value.trim());
            const city = e.target.city.value.trim();
            const homeImage = e.target.homeImage.value.trim();
            const description = e.target.description.value.trim();
            const availablePieces = Number(e.target.availablePieces.value.trim());

            const response = await fetch('http://localhost:3030/api/offers/' + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    homeName,
                    propertyType,
                    year,
                    city,
                    homeImage,
                    description,
                    availablePieces
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            history.replace(`/${id}/details`);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section>
            {error && <Notification message={error} />}
            {isLoading && <div>Loading...</div>}
            {!isLoading && <div className={classes['create-container']}>
                <div className={classes['box-image']}></div>
                <h2 className={classes['box-heading']}> Edit home</h2>

                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="homeName" name="homeName" placeholder="Real House Luxury Villa..." value={homeName} onChange={valueChangeHandler} />
                        <label className={classes['home-name']}>Name:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="propertyType" name="propertyType" placeholder="Villa..." value={propertyType} onChange={valueChangeHandler} />
                        <label className={classes.type}>Property Type:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="number" className={classes['input-field']} id="year" name="year" placeholder="2018..." value={year} onChange={valueChangeHandler} />
                        <label className={classes.year}>Year Built:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="city" name="city" placeholder="Sofia..." value={city} onChange={valueChangeHandler} />
                        <label className={classes.city}>City</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="homeImage" name="homeImage" placeholder="Image..." value={homeImage} onChange={valueChangeHandler} />
                        <label className={classes.homeImage}>Home Image:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="description" name="description" placeholder="Description..." value={description} onChange={valueChangeHandler} />
                        <label className={classes.description}>Property Description:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="number" className={classes['input-field']} id="availablePieces" name="availablePieces" placeholder="1" value={availablePieces} onChange={valueChangeHandler} />
                        <label className={classes.availablePieces}>Available pieces:</label>
                    </div>
                    <div className={classes['create-action']}>
                        <button className={classes['create-button']}>Edit</button>
                    </div>
                </form>
            </div>}
        </section>
    )
};

export default EditOffer;