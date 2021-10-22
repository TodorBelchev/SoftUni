import { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { UserContext } from '../../../store/user-context';
import Notification from '../../notification/Notification';

import classes from './RegisterForm.module.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(UserContext);
    const history = useHistory();

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const rePasswordChangeHandler = (e) => {
        setRePassword(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            if (username.trim().length < 5 || password.trim().length < 4) {
                throw new Error('Username must be at least 5 characters and password at least 4 characters long!');
            }

            if (!name.trim().match(/[a-zA-Z]{3,} [a-zA-Z]{3,}/)) {
                throw new Error('Please enter first and last name(eg. "Peter Petrov")!');
            }

            if (password.trim() !== rePassword.trim()) {
                throw new Error('Passwords must match!');
            }

            const response = await fetch('http://localhost:3030/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ username, password, name })
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            login(data);
            history.replace('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section>
            {error && <Notification message={error} />}
            <div className={classes.boxs}>
                <div className={classes['card-image']}>
                    <h2 className={classes['card-heading']}>Create your account</h2>
                </div>
                <form className={classes['card-form']} onSubmit={submitHandler}>
                    <div className={classes.input}>
                        <input
                            type="text"
                            className={classes['input-field']}
                            placeholder="Alexander Parkinson"
                            id="name"
                            name="name"
                            value={name}
                            onChange={nameChangeHandler}
                        />
                        <label className={classes.name}>Full Name</label>
                    </div>
                    <div className={classes['input']}>
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
                    <div className={classes['input']}>
                        <input
                            type="password"
                            className={classes['input-field']}
                            id="password"
                            name="password"
                            placeholder="******"
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        <label className={classes.password}>Password</label>
                    </div>
                    <div className={classes['input']}>
                        <input
                            type="password"
                            className={classes['input-field']}
                            id="re-password"
                            name="re-password"
                            placeholder="******"
                            value={rePassword}
                            onChange={rePasswordChangeHandler}
                        />
                        <label className={classes['re-password']}>Repeat Password</label>
                    </div>
                    <div className={classes.action}>
                        <button className={classes['action-button']}>Get started</button>
                    </div>
                </form>

                <div className={classes['card-info']}>
                    <small>Already have an account?
                        <NavLink to="/login"> Sign in</NavLink>
                    </small>
                </div>
            </div>
        </section>
    )
};

export default RegisterForm;