import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';
import Svg, {Ellipse, SvgXml} from 'react-native-svg';
import ic_minus from 'images/minus.svg';
import ic_plus from 'images/plus.svg';
import ic_edit from 'images/edit.svg';

const DefaultFooter = ({onDelete, onUpdate, onInsert}) => {
  return (
    <View style={{width: '100%', padding: 8, backgroundColor: Colors.amber}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            onDelete();
          }}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={ic_minus} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onUpdate();
          }}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={ic_edit} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onInsert();
          }}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={ic_plus} width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

DefaultFooter.defaultProps = {
  onInsert: () => {},
  onUpdate: () => {},
  onDelete: () => {},
};

DefaultFooter.propTypes = {
  onInsert: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};
export default DefaultFooter;
