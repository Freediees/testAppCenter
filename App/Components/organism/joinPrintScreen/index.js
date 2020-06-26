import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import DefaultHeader from 'components/molecules/defaultHeader';
import ButtonFooter from 'components/molecules/buttonFooter';
import PropTypes from 'prop-types';
import {Colors} from 'theme';

const JoinPrintScreen = ({data, onSubmit}) => {
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState(false);

  const onFooterPress = () => {
    onSubmit(selected);
  };

  useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      var temp = selected;
      temp[i] = 0;
      setSelected(temp);
    }

    console.log(selected);
  }, []);

  const onSelect = index => {
    console.log(index);
    var temp = selected;
    if (temp[index] == 0) {
      temp[index] = 1;
    } else {
      temp[index] = 0;
    }
    setSelected(temp);
    setStatus(!status);
    console.log(selected);
  };

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onSelect(index);
        }}
        style={{
          padding: 16,
          width: '100%',
          backgroundColor: selected[index] == 0 ? Colors.lime : Colors.green,
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
        label={'Submit'}
        onPress={() => {
          onFooterPress();
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
