import React from 'react';
import styles from './Stats.module.css';
import PropTypes from 'prop-types';
export default function Stats({ stats }) {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        Followers <span className={styles.list__span}>{stats.followers}</span>
      </li>
      <li className={styles.list__item}>
        Views <span className={styles.list__span}>{stats.views}</span>
      </li>
      <li className={styles.list__item}>
        Likes <span className={styles.list__span}>{stats.likes}</span>
      </li>
    </ul>
  );
}
Stats.propTypes = { stats: PropTypes.object };
