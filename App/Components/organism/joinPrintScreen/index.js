import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import DefaultHeader from 'components/molecules/defaultHeader';
import ButtonFooter from 'components/molecules/buttonFooter';
import PropTypes from 'prop-types';
import {Colors} from 'theme';

const JoinPrintScreen = ({data}) => {
  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{
          padding: 16,
          width: '100%',
          backgroundColor: Colors.lime,
          margin: 8,
        }}>
        <Text style={{fontSize: 13, color: Colors.white}}>
          SKU : {item.sku || '-'}
        </Text>
        <Text style={{fontSize: 13, color: Colors.white}}>
          English Name : {item.nameEng || '-'}
        </Text>
        <Text style={{fontSize: 13, color: Colors.white}}>
          Chinesse Name : {item.nameChin || '-'}
        </Text>
      </TouchableOpacity>
    );
  };

  console.log('data: ', data);
  return (
    <View style={{flex: 1}}>
      <DefaultHeader title={'JoinPrint'} />
      <View style={{padding: 16, flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
          //keyExtractor={item => item.id}
        />
      </View>
      <ButtonFooter
        label={'Submit'}
        onPress={() => {
          alert('Submit');
        }}
      />
    </View>
  );
};

JoinPrintScreen.defaultProps = {
  data: [],
};

JoinPrintScreen.propTypes = {
  data: PropTypes.array,
};

export default JoinPrintScreen;
