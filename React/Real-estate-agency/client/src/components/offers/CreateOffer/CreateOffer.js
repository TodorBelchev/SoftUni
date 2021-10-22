import { useState } from 'react';
import { useHistory } from 'react-router';
import Notification from '../../notification/Notification';

import classes from './CreateOffer.module.css';

const CreateOffer = () => {
    const [error, setError] = useState(null);
    const history = useHistory();
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

            const response = await fetch('http://localhost:3030/api/offers/create', {
                method: 'POST',
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

            history.replace('/listings');
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section>
            {error && <Notification message={error} />}
            <div className={classes['create-container']}>
                <div className={classes['box-image']}></div>
                <h2 className={classes['box-heading']}> Add new home</h2>

                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="homeName" name="homeName" placeholder="Real House Luxury Villa..." />
                        <label className={classes['home-name']}>Name:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="propertyType" name="propertyType" placeholder="Villa..." />
                        <label className={classes.type}>Property Type:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="number" className={classes['input-field']} id="year" name="year" placeholder="2018..." />
                        <label className={classes.year}>Year Built:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="city" name="city" placeholder="Sofia..." />
                        <label className={classes.city}>City</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="homeImage" name="homeImage" placeholder="Image..." />
                        <label className={classes.homeImage}>Home Image:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="text" className={classes['input-field']} id="description" name="description" placeholder="Description..." />
                        <label className={classes.description}>Property Description:</label>
                    </div>
                    <div className={classes.input}>
                        <input type="number" className={classes['input-field']} id="availablePieces" name="availablePieces" placeholder="1" />
                        <label className={classes.availablePieces}>Available pieces:</label>
                    </div>
                    <div className={classes['create-action']}>
                        <button className={classes['create-button']}>Add</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateOffer;