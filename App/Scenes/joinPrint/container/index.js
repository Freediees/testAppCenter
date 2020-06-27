import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import JoinPrintScreen from 'components/organism/joinPrintScreen';
import {connect} from 'react-redux';
import JoinAction from '../store/action';

const JoinPrint = ({dataJoin, fetchData, navigation}) => {
  const [page, setPage] = useState(0);
  const [listData, setListData] = useState();

  const onSubmit = (data, selected) => {
    navigation.navigate('SelectedItem', {
      data: data || [],
      selected: selected || 1,
    });
  };

  useEffect(() => {
    const initialize = async () => {
      //console.log(dataJoin);
      const a = await fetchData(page);
    };
    initialize();
  }, []);

  console.log(dataJoin.dataJoin);
  return (
    <View style={{flex: 1}}>
      <JoinPrintScreen listData={dataJoin.dataJoin} onSubmit={onSubmit} />
    </View>
  );
};

const mapStateToProps = state => ({
  dataJoin: state.dataJoin,
});

const mapDispatchToProps = dispatch => ({
  fetchData: value => dispatch(JoinAction.fetchData(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinPrint);
