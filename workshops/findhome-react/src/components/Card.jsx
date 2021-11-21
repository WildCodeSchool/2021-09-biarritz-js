import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card__image}></img>
      <h1 className={styles.card__title}>{title}</h1>
      <h3 className={styles.card__price}>{price}</h3>
      <button className={styles.card__button}>Buy me</button>
    </div>
  );
};

export default Card;
