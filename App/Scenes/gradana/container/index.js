import React, {useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import GradanaScreen from 'components/organism/gradanaScreen';

const Gradana = ({navigation}) => {
  const [status, setStatus] = useState();
  const goToTask1 = () => {
    navigation.navigate('Task');
  };
  const goToTask2 = () => {
    navigation.navigate('Task');
  };

  const goToTask3 = () => {
    navigation.navigate('Task');
  };
  return (
    <View style={{flex: 1}}>
      <GradanaScreen
        button1={goToTask1}
        button2={goToTask2}
        button3={goToTask3}
      />
    </View>
  );
};

Gradana.defaultProps = {};

Gradana.propTypes = {};
export default Gradana;
