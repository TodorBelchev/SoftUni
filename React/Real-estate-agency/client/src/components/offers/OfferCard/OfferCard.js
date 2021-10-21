import { NavLink } from 'react-router-dom';

import classes from './OfferCard.module.css';

const CardOffer = ({ description, homeName, _id, homeImage }) => {
    return (
        <div className={classes.card}>
            <div className={classes['img-container']}>
                <img src={homeImage} alt="house" />
            </div>
            <h3>{homeName}</h3>
            <p>{description}</p>
            <div className={classes['cta']}>
                <NavLink to={`/${_id}/details`}>Details</NavLink>
            </div>
        </div>
    );
}

export default CardOffer;