import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useHttp from '../../../hooks/useHttp';
import userService from '../../../services/userService';
import { UserContext } from '../../../context/userContext';

import Notification from '../../Notification/Notification';

const Login = () => {
    const navigate = useNavigate();
    const { sendRequest, error, setError } = useHttp();
    const { login } = useContext(UserContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const { username, password } = Object.fromEntries(new FormData(e.currentTarget));

        if (username.trim().length < 5 || password.trim().length < 5) {
            setError('Username and password must be at least 5 characters long!');
            return;
        }

        sendRequest(
            userService.login(username, password),
            (res) => {
                login(res);
                navigate('/', { replace: true });
            }
        )
    };
    return (
        <section id="viewLogin">
            {error && <Notification text={error} />}
            <h2>Login:</h2>
            <form id="formLogin" onSubmit={submitHandler}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your Username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your Password" />
                <input type="submit" className="login" value="Login" />
            </form>
        </section>
    )
}

export default Login;