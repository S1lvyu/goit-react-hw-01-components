import React from 'react';
import styles from './Description.module.css';
export default function Description({ username, tag, location, avatar }) {
  return (
    <div className={styles.container}>
      <img
        src={avatar}
        alt="User avatar"
        width="300px"
        className={styles.container__image}
      />
      <p className={styles.container__name}>{username}</p>
      <p className={styles.container__text}>@{tag}</p>
      <p className={styles.container__text}>{location}</p>
    </div>
  );
}
