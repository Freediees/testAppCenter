import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import JoinPrintScreen from 'components/organism/joinPrintScreen';
import {connect} from 'react-redux';
import JoinAction from '../store/action';

const JoinPrint = ({dataJoin, fetchData, navigation}) => {
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState();

  const onSubmit = payload => {
    //alert('submited');
    console.log(payload);
    const newPayload = {
      payload,
      data: dataJoin.dataJoin,
    };
    navigation.navigate('SelectedItem', {value: newPayload});
  };

  useEffect(() => {
    const initialize = async () => {
      console.log(dataJoin);
      fetchData(page);
    };
    initialize();
  }, []);

  //console.log(dataJoin);
  return (
    <View style={{flex: 1}}>
      <JoinPrintScreen data={dataJoin.dataJoin} onSubmit={onSubmit} />
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
