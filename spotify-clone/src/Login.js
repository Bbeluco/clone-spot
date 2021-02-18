import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <h1>i'm the login page</h1>
            {/*Spotify Logo*/}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo with spotify name"/>
            {/*Login with Spotify button */}
            <button>LOGIN WITH SPOTIFY</button>
        </div>
    )
}

export default Login