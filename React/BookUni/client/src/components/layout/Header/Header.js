import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../../../context/userContext';
import useHttp from '../../../hooks/useHttp';
import userService from '../../../services/userService';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const { sendRequest } = useHttp();

    const onLogoutClick = (e) => {
        e.preventDefault();
        sendRequest(
            userService.logout(),
            () => {
                logout();
                navigate('/');
            }
        );
    };

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
                <NavLink to={`/user/${user._id}`} className="log-out">{`{{ ${user.username} }}`}</NavLink>
                <NavLink onClick={onLogoutClick} to="/logout" className="log-out">Logout</NavLink>
            </div>}
        </nav>
    )
}

export default Header;