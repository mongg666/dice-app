import React, { useState } from 'react';
import styles from './Dice.module.css';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  
  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
  };

  // Пути к изображениям
  const diceImages = {
    1: process.env.PUBLIC_URL + '/dice/dice1.png',
    2: process.env.PUBLIC_URL + '/dice/dice2.png',
    3: process.env.PUBLIC_URL + '/dice/dice3.png',
    4: process.env.PUBLIC_URL + '/dice/dice4.png',
    5: process.env.PUBLIC_URL + '/dice/dice5.png',
    6: process.env.PUBLIC_URL + '/dice/dice6.png'
  };

  return (
    <div className={styles.container}>
      <img 
        src={diceImages[diceValue]} 
        alt={`Dice showing ${diceValue}`}
        className={styles.image}
      />
      <button className={styles.button} onClick={rollDice}>
        Бросить кубик
      </button>
    </div>
  );
};

export default Dice;