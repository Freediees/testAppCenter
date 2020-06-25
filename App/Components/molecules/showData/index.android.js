import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';

const ShowData = ({data}) => {
  return (
    <View style={{width: '100%', padding: 16, backgroundColor: Colors.white}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text> name = {item.title} </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

ShowData.defaultProps = {
  title: 'Title',
  data: [],
};

ShowData.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default ShowData;
