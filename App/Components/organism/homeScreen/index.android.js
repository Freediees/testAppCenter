import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DefaultHeader from 'components/molecules/defaultHeader';
import DefaultFooter from 'components/molecules/defaultFooter';

const HomeScreen = ({title}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <DefaultHeader title={'Hello world'} />
      <View>
        <Text>{title}</Text>
      </View>
      <DefaultFooter title={'footer'} />
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
