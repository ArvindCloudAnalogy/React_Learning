import React, { useRef, useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const SignIn = ({ onSwitchToRegister }) => {
    const { login } = useContext(UserContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (login(user, pwd)) {
            setSuccess(true);
            setUser('');
            setPwd('');
        } else {
            setErrMsg('Invalid username or password');
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>Welcome back, {user}!</h1>
                    <p>You are signed in.</p>
                    <button onClick={() => setSuccess(false)}>Sign Out</button>
                </section>
            ) : (
                <section className='formSection'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />

                        <button disabled={!user || !pwd}>Sign In</button>
                    </form>
                    <p>
                        Not registered?<br />
                        <span className="line">
                            <button onClick={onSwitchToRegister}>Create Account</button>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default SignIn;