import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import DefaultHeader from 'components/molecules/defaultHeader';
import ButtonFooter from 'components/molecules/buttonFooter';
import {Colors} from 'theme';

const SelectedItem = ({navigation}) => {
  const {params} = navigation.state;
  console.log(params);

  const [data, setData] = useState([]);

  useEffect(() => {
    var temp = [];
    for (var i = 0; i < params.value.data.length; i++) {
      if (params.value.payload[i] == 1) {
        temp.push(params.value.data[i]);
      }
    }
    setData(temp);
  }, []);

  const renderItem = (item, index) => {
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

  return (
    <View style={{flex: 1}}>
      <DefaultHeader title={'JoinPrint'} />
      <View style={{padding: 16, flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => renderItem(item, index)}
          //keyExtractor={item => item.id}
        />
      </View>
      <ButtonFooter
        label={'Back'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default SelectedItem;
