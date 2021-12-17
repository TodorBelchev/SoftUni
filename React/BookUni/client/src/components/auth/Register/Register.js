import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useHttp from '../../../hooks/useHttp';
import userService from '../../../services/userService';
import { UserContext } from '../../../context/userContext';

import Notification from '../../Notification/Notification';

const Register = () => {
    const navigate = useNavigate();
    const { sendRequest, error, setError } = useHttp();
    const { login } = useContext(UserContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const { email, username, password, rePassword } = Object.fromEntries(new FormData(e.currentTarget));

        if (username.trim().length < 5 || password.trim().length < 5) {
            setError('Username and password must be at least 5 characters long!');
            return;
        }

        if (password.trim() !== rePassword.trim()) {
            setError('Passwords don\'t match!');
            return;
        }

        sendRequest(
            userService.register(email, username, password),
            (res) => {
                login(res);
                navigate('/', { replace: true });
            }
        )
    };

    return (
        <section id="viewRegister">
            {error && <Notification text={error} />}
            <h2>Create your account:</h2>
            <form id="formRegister" onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" />
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your Username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                <input type="submit" className="register" value="Register" />
            </form>
        </section>
    )
}

export default Register;