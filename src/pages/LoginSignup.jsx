import React from 'react';
import { useState } from 'react';
import './css/login.css'

const LoginSignup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = () => {
        // Handle login functionality here
        console.log('Logging in with username:', username, 'and password:', password);
    };

    const handleSignup = () => {
        // Handle signup functionality here
        console.log('Signing up with username:', username, 'and password:', password);
    };

    return (
        <div className='box-container'>
            <div className='form-container'>
                {isLogin ? (
                    <div className='logincontainer'>
                        <h2>Login</h2>

                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Login</button>
                        <p>Don't have an account? <button onClick={() => setIsLogin(false)}>Sign up</button></p>
                    </div>
                ) : (
                    <div className='signupcontainer'>
                        <h2>Sign Up</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Already have an account? <button onClick={() => setIsLogin(true)}>Login</button></p>
                    </div>
                )}
            </div>
        </div>
    );
}


export default LoginSignup;
