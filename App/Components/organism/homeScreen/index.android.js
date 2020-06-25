import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DefaultHeader from 'components/molecules/defaultHeader';
import DefaultFooter from 'components/molecules/defaultFooter';
import ShowData from 'components/molecules/showData';
import ModalInsert from 'components/molecules/modalInsert';

const HomeScreen = ({
  title,
  onInsert,
  onUpdate,
  onDelete,
  data,
  keyID,
  onChangeID,
  modalInsert,
  modalUpdate,
  toggleModalInsert,
  onInsertData,
  statusProcess,
  payload,
  onUpdateData,
  cariDataValue,
  cariData,
}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <DefaultHeader
        title={'Item Management System'}
        cariDataValue={cariDataValue}
        cariData={cariData}
      />
      <View style={{flex: 1, width: '100%'}}>
        <ShowData data={data} keyID={keyID} onChangeID={onChangeID} />
      </View>
      <DefaultFooter
        onInsert={onInsert}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
      <ModalInsert
        visible={modalInsert}
        toggleModalInsert={toggleModalInsert}
        onInsertData={onInsertData}
        statusProcess={statusProcess}
        payload={payload}
        onUpdateData={onUpdateData}
      />
    </View>
  );
};

HomeScreen.defaultProps = {
  title: 'HomeScreen',
  data: [],
  keyID: null,
  onChangeID: () => {},
  modalInsert: false,
  modalUpdate: false,
};

HomeScreen.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  keyID: PropTypes.number,
  onChangeID: PropTypes.func,
  modalInsert: PropTypes.bool,
  modalUpdate: PropTypes.bool,
};

export default HomeScreen;
