import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const HomeScreen = ({title}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{title}</Text>
    </View>
  );
};

HomeScreen.defaultProps = {
  title: 'HomeScreen',
};

HomeScreen.propTypes = {
  title: PropTypes.string,
};

export default HomeScreen;
