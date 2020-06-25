import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from 'components/organism/homeScreen/';

const onInsert = () => {
  alert('Insert');
};

const onDelete = () => {
  alert('Delete');
};

const onUpdate = () => {
  alert('update');
};

const data = [
  {title: 'Ferdi Rahman', title: 'React Native Developer'},
  {title: 'James', title: 'IOS Developer'},
];

const Home = () => {
  return (
    <HomeScreen
      title={'Ini Halaman Home'}
      onInsert={onInsert}
      onUpdate={onUpdate}
      onDelete={onDelete}
      data={data}
    />
  );
};

export default Home;
