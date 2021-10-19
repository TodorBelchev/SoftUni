import { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';

import classes from './LoginForm.module.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const history = useHistory();

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            if (username.trim().length < 5 || password.trim().length < 4) {
                throw new Error('Username must be at least 5 characters and password at least 4 characters long!');
            }
            
            const response = await fetch('http://localhost:3030/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            login(data);
            history.replace('/');
        } catch (error) {
            // show notification
        }
    }

    return (
        <section>
            <div className={classes.boxs}>
                <div className={classes['card-image']}>
                    <h2 className={classes['card-heading']}>Login</h2>
                </div>
                <form className={classes['card-form']} onSubmit={submitHandler}>
                    <div className={classes.input}>
                        <input
                            type="text"
                            className={classes['input-field']}
                            placeholder="alexander"
                            id="username"
                            name="username"
                            value={username}
                            onChange={usernameChangeHandler}
                        />
                        <label className={classes.username}>Username</label>
                    </div>
                    <div className={classes.input}>
                        <input
                            type="password"
                            className={classes['input-field']}
                            id="password"
                            name=""
                            placeholder="******"
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        <label className={classes.password}>Password</label>
                    </div>
                    <div className={classes.action}>
                        <button className={classes['action-button']}>Login</button>
                    </div>
                </form>
                <div className={classes['card-info']}>
                    <p>Dont have an account?
                        <NavLink to="/register">Sign up</NavLink>.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default LoginForm;