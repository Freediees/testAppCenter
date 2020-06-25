import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DefaultHeader from 'components/molecules/defaultHeader';
import DefaultFooter from 'components/molecules/defaultFooter';
import ShowData from 'components/molecules/showData';

const HomeScreen = ({title, onInsert, onUpdate, onDelete, data}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <DefaultHeader title={'Hello world'} />
      <View style={{flex: 1, width: '100%'}}>
        <ShowData data={data} />
      </View>
      <DefaultFooter
        onInsert={onInsert}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </View>
  );
};

HomeScreen.defaultProps = {
  title: 'HomeScreen',
  data: [],
};

HomeScreen.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default HomeScreen;
