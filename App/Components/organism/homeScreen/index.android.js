import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DefaultHeader from 'components/molecules/defaultHeader';
import DefaultFooter from 'components/molecules/defaultFooter';
import ShowData from 'components/molecules/showData';

const HomeScreen = ({
  title,
  onInsert,
  onUpdate,
  onDelete,
  data,
  keyID,
  onChangeID,
}) => {
  console.log('homekey:', keyID);
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <DefaultHeader title={'Item Management System'} />
      <View style={{flex: 1, width: '100%'}}>
        <ShowData data={data} keyID={keyID} onChangeID={onChangeID} />
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
  keyID: null,
  onChangeID: () => {},
};

HomeScreen.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  keyID: PropTypes.number,
  onChangeID: PropTypes.func,
};

export default HomeScreen;
