import React from 'react';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <section className={styles.container}>
      {{ title } && <h1 className={styles.container__title}>{title}</h1>}
      <ul className={styles.container__list}>
        {stats.map(element => {
          const itemBgColor = { backgroundColor: getRandomColor() };
          return (
            <li
              key={element.id}
              style={itemBgColor}
              className={styles.container__item}
            >
              {element.label}
              <span className={styles.container__span}>
                {element.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
