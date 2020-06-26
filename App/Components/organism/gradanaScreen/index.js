import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from 'theme';

const GradanaScreen = ({navigation, button1, button2, button3}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          button1();
        }}>
        <Text style={styles.textLabel}>Task 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          button2();
        }}>
        <Text style={styles.textLabel}>Task 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          button3();
        }}>
        <Text style={styles.textLabel}>Task 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '80%',
    backgroundColor: Colors.amber,
    height: 48,
    borderRadius: 8,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLabel: {
    color: 'white',
    fontSize: 20,
  },
});

export default GradanaScreen;
