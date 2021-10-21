import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';

import classes from './Header.module.css';

const Header = () => {
    const { user } = useContext(UserContext);

    const logoutHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <header>
            <nav className={classes.nav}>
                <NavLink to="/">Home</NavLink>
                <ul>
                    {/* <!-- Guest users and Logged users --> */}
                    <li>
                        <NavLink to="/listings">Housing for rent</NavLink>
                    </li>
                    {/* <!-- Guest users --> */}
                    {!user.username && <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>}
                    {!user.username && <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>}
                    {/* <!-- Logged users --> */}
                    {user.username && <li>
                        <NavLink to="/create-offer">Create offer</NavLink>
                    </li>}
                    {user.username && <li>
                        <NavLink to="/search">Search</NavLink>
                    </li>}
                    {user.username && <li>
                        <NavLink to="/logout" onClick={logoutHandler}>Logout</NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    )
};

export default Header;