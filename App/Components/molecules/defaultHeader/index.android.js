import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';

const DefaultHeader = ({title}) => {
  return (
    <View style={{width: '100%', padding: 16, backgroundColor: Colors.orange}}>
      <Text style={{fontSize: 20, color: 'white'}}>{title}</Text>
      <TextInput
        placeholder={'Cari'}
        placeholderTextColor={Colors.light_grey}
        style={{borderBottomWidth: 1, borderColor: 'white'}}
      />
    </View>
  );
};

DefaultHeader.defaultProps = {
  title: 'Title',
};

DefaultHeader.propTypes = {
  title: PropTypes.string,
};

export default DefaultHeader;
