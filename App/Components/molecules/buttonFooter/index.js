import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';

const ButtonFooter = ({label, onPress}) => {
  return (
    <View
      style={{
        padding: 4,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.amber,
          borderRadius: 8,
        }}>
        <Text style={{color: 'white'}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

ButtonFooter.defaultProps = {
  label: 'Footer',
  onPress: () => {},
};

ButtonFooter.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};

export default ButtonFooter;
