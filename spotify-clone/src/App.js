import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  //based on a given condition run this piece of code
  useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = '';
    console.log('Your token is >>> ', token.access_token)
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
