import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';
import Svg, {Ellipse, SvgXml} from 'react-native-svg';
import ic_minus from 'images/minus.svg';
import ic_plus from 'images/plus.svg';
import ic_edit from 'images/edit.svg';

const DefaultFooter = () => {
  return (
    <View style={{width: '100%', padding: 8, backgroundColor: Colors.orange}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={ic_minus} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={ic_edit} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={ic_plus} width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DefaultFooter;
