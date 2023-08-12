import React from 'react';
import Stats from '../Stats/Stats';
import Description from '../Description/Description';
import styles from './Profile.module.css';
import { userData } from 'data/user';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Description
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
      />
      <Stats stats={userData.stats} />
    </div>
  );
}
