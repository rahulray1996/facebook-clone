import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
    }

    return (
        <div className="login">
            <div className="login__container">
                <h3>Log In To Facebook</h3>
                <form>
                    <center> 
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
                    </center>
                    <center>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button type="submit" onClick={login} className="login__login">Log In</button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to="/register">
                            <button className="login__createNewAccount">Create New Account</button>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login;
