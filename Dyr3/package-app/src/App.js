// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Pocztówka');
  const [postalCode, setPostalCode] = useState('');
  const [message, setMessage] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckPrice = () => {
    let price = '';
    let image = '';
    switch (selectedOption) {
      case 'Pocztówka':
        price = 'Cena: 1 zł';
        image = 'pocztowka.png';
        break;
      case 'List':
        price = 'Cena: 1,5 zł';
        image = 'list.png';
        break;
      case 'Paczka':
        price = 'Cena: 10 zł';
        image = 'paczka.png';
        break;
      default:
        break;
    }
    setMessage(`${price}`);
    document.getElementById('shipment-image').src = require(`./images/${image}`).default;
  };

  const handleConfirm = () => {
    if (postalCode.length !== 5) {
      setMessage('Nieprawidłowa liczba cyfr w kodzie pocztowym');
    } else if (!(/^\d+$/.test(postalCode))) {
      setMessage('Kod pocztowy powinien się składać z samych cyfr');
    } else {
      setMessage('Dane przesyłki zostały wprowadzone');
    }
  };

  return (
    <div className="container">
      <div className="shipment-dialog">
        <h2>Nadaj Przesyłkę</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Pocztówka"
              checked={selectedOption === 'Pocztówka'}
              onChange={handleOptionChange}
            />
            Pocztówka
          </label>
          <label>
            <input
              type="radio"
              value="List"
              checked={selectedOption === 'List'}
              onChange={handleOptionChange}
            />
            List
          </label>
          <label>
            <input
              type="radio"
              value="Paczka"
              checked={selectedOption === 'Paczka'}
              onChange={handleOptionChange}
            />
            Paczka
          </label>
        </div>
        <label>
          Ulica z numerem:
          <input type="text" />
        </label>
        <label>
          Kod pocztowy:
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <label>
          Miasto:
          <input type="text" />
        </label>
        <button onClick={handleCheckPrice}>Sprawdź Cenę</button>
        <img id="shipment-image" src={require('./images/pocztowka.png').default} alt="shipment" />
        <p className="price-label">{message}</p>
        <button onClick={handleConfirm}>Zatwierdź</button>
      </div>
    </div>
  );
};

export default App;
