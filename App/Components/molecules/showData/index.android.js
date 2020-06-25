import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';

const ShowData = ({data, keyID, onChangeID}) => {
  //const [keyID, setKeyId] = useState();
  console.log('KEY:', keyID);

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          onChangeID(item);
        }}
        style={{
          borderBottomWidth: 0.5,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: item.item_id == keyID ? Colors.grey : 'white',
        }}>
        <Text style={[styles.itemText, {flex: 2}]}>{item.no_container}</Text>
        <Text style={[styles.itemText, {flex: 1}]}>{item.size}</Text>
        <Text style={[styles.itemText, {flex: 1}]}>{item.type}</Text>
        <Text style={[styles.itemText, {flex: 1}]}>{item.slot}</Text>
        <Text style={[styles.itemText, {flex: 1}]}>{item.row}</Text>
        <Text style={[styles.itemText, {flex: 1}]}>{item.tier}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{width: '100%', marginTop: 0, backgroundColor: Colors.white}}>
      <View
        style={{
          backgroundColor: Colors.orange,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.headerText, {flex: 2}]}>No. Container</Text>
        <Text style={[styles.headerText, {flex: 1}]}>Size</Text>
        <Text style={[styles.headerText, {flex: 1}]}>Type</Text>
        <Text style={[styles.headerText, {flex: 1}]}>Slot</Text>
        <Text style={[styles.headerText, {flex: 1}]}>Row</Text>
        <Text style={[styles.headerText, {flex: 1}]}>Tier</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  itemText: {
    fontSize: 12,
    color: Colors.smoky_grey,
    textAlign: 'center',
  },
});

ShowData.defaultProps = {
  title: 'Title',
  data: [],
};

ShowData.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default ShowData;
