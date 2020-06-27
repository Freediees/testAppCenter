import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import DefaultHeader from 'components/molecules/defaultHeader';
import ButtonFooter from 'components/molecules/buttonFooter';
import PropTypes from 'prop-types';
import {Colors} from 'theme';
import axios from 'axios';
import {getToken, getData} from 'services/dataServices';

const JoinPrintScreen = ({listData, onSubmit}) => {
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const onFooterPress = () => {
    onSubmit(data, selected);
  };

  const fetchNewData = async value => {
    const json = await getToken();
    const token = json.data.access_token;

    const newPayload = {
      token: `Bearer ${token}`,
      page: page + 1,
    };

    const json2 = await getData(newPayload);
    //console.log('json2:', json2);

    var temp = data;
    var a = temp.concat(json2.data.data);
    var b = selected.concat([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);
    setPage(page + 1);
    setSelected(b);
    setData(a);
  };

  useEffect(() => {
    setData(listData);
    if (listData && listData.length > 0) {
      for (var i = 0; i < listData.length; i++) {
        var temp = selected;
        temp[i] = 0;
        setSelected(temp);
      }
    }
  }, []);

  const onSelect = index => {
    var temp = selected;
    if (temp[index] == 0) {
      temp[index] = 1;
    } else {
      temp[index] = 0;
    }
    setSelected(temp);
    setStatus(!status);
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
          onEndReached={() => {
            fetchNewData();
          }}
          onEndReachedThreshold={0.5}
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
  listData: [],
};

JoinPrintScreen.propTypes = {
  listData: PropTypes.array,
};

export default JoinPrintScreen;
