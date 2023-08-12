import React from 'react';
import styles from './FriendsList.module.css';
import PropTypes from 'prop-types';
export default function FriendsList({ friendsList }) {
  return (
    <ul className={styles.list}>
      {friendsList.map(friend => {
        return (
          <li key={friend.id} className={styles.item}>
            <span
              className={
                friend.isOnline ? styles.item__isOnline : styles.item__isOffline
              }
            ></span>
            <img
              src={friend.avatar}
              alt={friend.name}
              width="200px"
              className={styles.item__image}
            />
            <p className={styles.item__name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friendsList: PropTypes.array,
};
