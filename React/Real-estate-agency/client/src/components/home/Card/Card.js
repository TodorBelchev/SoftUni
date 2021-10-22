import { NavLink } from 'react-router-dom';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes['card-home']}>
            <div className={classes['card-image']}>
                <img src={props.offer.homeImage} alt="house" />
            </div>
            <h2>{props.offer.homeName}</h2>
            <div className={classes.cta}>
                <NavLink to={`/${props.offer._id}/details`} className={classes['details-link']}>Details</NavLink>
            </div>
        </div>
    );
}

export default Card;