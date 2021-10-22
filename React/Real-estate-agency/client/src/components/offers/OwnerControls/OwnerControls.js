import { NavLink, useHistory } from 'react-router-dom';

import classes from './OwnerControls.module.css';

const OwnerControls = (props) => {
    const history = useHistory();
    const deleteHandler = async (e) => {
        e.preventDefault();

        try {
            const confirmed = window.confirm('Are you sure');
            if (!confirmed) { return }
            const response = await fetch('http://localhost:3030/api/offers/' + props.offer._id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await response.json();
            history.replace('/listings');
            if (!response.ok) {
                throw new Error(data);
            }
        } catch (error) {
            // show notification
        }
    };

    return (
        <>
            <NavLink to={`/${props.offer._id}/edit`} className={classes.edit}>Edit</NavLink>
            <NavLink to={`/${props.offer._id}/delete`} className={classes.remove} onClick={deleteHandler}>Delete</NavLink>
        </>
    )
};

export default OwnerControls;