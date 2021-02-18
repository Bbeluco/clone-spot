import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  //based on a given condition run this piece of code
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const token = hash.access_token
    console.log('Your token is >>> ', token)
  }, []);

  return (
    <div className="app">
      {/*Sporify Logo*/}
      {/*Login with Spotify */}
      <Login />
    </div>
  );
}

export default App;
