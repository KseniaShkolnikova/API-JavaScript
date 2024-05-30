import React, { useState } from 'react';
import { getAccessToken, searchTracks } from '../spotify';
function Headers({ setResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const search = async () => {
    if (searchTerm.trim() === '') return;
    const token = await getAccessToken();
    const results = await searchTracks(searchTerm, token);
    setResults(results);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="auth">
            <a href="https://accounts.spotify.com/en/login" className="login">Войти</a>
          <a href="https://www.spotify.com/uk/signup" className="sign">Зарегестрироваться</a>
          </div>
          <div  className="flex-grow-1 d-flex justify-content-center mx-3">
            <input
              className="insearch"
              placeholder="Что ищите?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="sign"  onClick={search}>Найти</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headers;