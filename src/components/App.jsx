import React from 'react';

import Profile from './FirstExercise/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { statisticsData } from '../data/statisticsData';
import { friendListData } from 'data/friendListData';
import { transactionHistoryData } from 'data/transactionHistoryData';
export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics stats={statisticsData} title="Upload stats" />
      <FriendsList friendsList={friendListData} />
      <TransactionHistory data={transactionHistoryData} />
    </div>
  );
};
