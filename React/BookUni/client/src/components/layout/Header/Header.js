import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../../context/userContext';

const Header = () => {
    const { user, logout } = useContext(UserContext);
    return (
        <nav>
            <div className="left-container">
                {!user.email && <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>}
                {user.email && <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/add">Add +</NavLink></li>
                </ul>}
            </div>
            {user.email && user.username && <div className="right-container">
                <NavLink to="/user" className="log-out">{`{{ ${user.username} }}`}</NavLink>
                <NavLink to="/logout" className="log-out">Logout</NavLink>
            </div>}
        </nav>
    )
}

export default Header;