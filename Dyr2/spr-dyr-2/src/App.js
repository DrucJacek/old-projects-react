import React, { useState } from 'react';

import "./App.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = () => {
    setLoggedInUser(email);
  };

  return (
    <div className='container'>
      <div className='center-content'>
        <h1 className='hh'>Logowanie</h1>
        <div className='inputs'>
          <div>
            <div>
              <label htmlFor="email">Podaj email:</label><br></br>
              <input
                className='input1'
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Podaj hasło:</label><br></br>
              <input
                type="password"
                id="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Zatwierdź</button>
          </div>
          {loggedInUser && <p>Witaj {loggedInUser}!</p>}
        </div>
      </div>
    </div>
  );  
};

export default LoginForm;