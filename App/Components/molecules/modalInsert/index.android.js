import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {Colors} from 'theme';
import PropTypes from 'prop-types';

const ModalInsert = ({
  visible,
  toggleModalInsert,
  onInsertData,
  payload,
  statusProcess,
  onUpdateData,
}) => {
  const [noContainer, setNoContainer] = useState('');
  const [size, setSize] = useState('Small');
  const [type, setType] = useState('Type A');
  const [slot, setSlot] = useState('');
  const [row, setRow] = useState('');
  const [tier, setTier] = useState('');
  const [itemId, setItemID] = useState('');

  const onCancel = () => {
    setNoContainer('');
    setSize('Small');
    setType('Type A');
    setSlot('');
    setRow('');
    setTier('');
    toggleModalInsert();
  };

  const onSubmit = () => {
    console.log('wow: ', payload);
    if (statusProcess == 'insert') {
      const payload = {
        noContainer,
        size,
        type,
        slot,
        row,
        tier,
      };

      onInsertData(payload);
    } else if (statusProcess == 'update') {
      const payload = {
        item_id: itemId,
        noContainer,
        size,
        type,
        slot,
        row,
        tier,
      };

      onUpdateData(payload);
    }
  };

  const onShow = () => {
    if (statusProcess == 'update') {
      setItemID(payload.item_id);
      setNoContainer(payload.no_container);
      setSize(payload.size);
      setType(payload.type);
      setSlot(JSON.stringify(payload.slot));
      setRow(JSON.stringify(payload.row));
      setTier(JSON.stringify(payload.tier));
    }
  };

  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      transparent
      onShow={() => {
        onShow();
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 8,
          }}>
          <Text style={{color: Colors.amber}}>No.Container</Text>
          <TextInput
            value={noContainer}
            onChangeText={text => {
              setNoContainer(text);
            }}
            placeholder={'No. Container'}
            keyboardType={'number-pad'}
            style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
          />

          <Text style={{color: Colors.amber}}>Size</Text>
          <Picker
            value={size}
            selectedValue={size}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) => setSize(itemValue)}>
            <Picker.Item label={'Small'} value="Medium" />
            <Picker.Item label={'Medium'} value="Medium" />
            <Picker.Item label={'Large'} value="Large" />
          </Picker>

          <Text style={{color: Colors.amber}}>Type</Text>
          <Picker
            value={type}
            selectedValue={type}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
            <Picker.Item label={'Type A'} value="Type A" />
            <Picker.Item label={'Type B'} value="Type B" />
            <Picker.Item label={'Type C'} value="Type C" />
          </Picker>

          <Text style={{color: Colors.amber}}>Slot</Text>
          <TextInput
            value={slot}
            onChangeText={text => {
              setSlot(text);
            }}
            placeholder={'Slot'}
            keyboardType={'number-pad'}
            style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
          />

          <Text style={{color: Colors.amber}}>Row</Text>
          <TextInput
            value={row}
            onChangeText={text => {
              setRow(text);
            }}
            placeholder={'Row'}
            keyboardType={'number-pad'}
            style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
          />

          <Text style={{color: Colors.amber}}>Tier</Text>
          <TextInput
            value={tier}
            onChangeText={text => {
              setTier(text);
            }}
            placeholder={'Tier'}
            keyboardType={'number-pad'}
            style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
          />

          <View
            style={{
              flexDirection: 'row',
              padding: 16,
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                onCancel();
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderWidth: 1,
                padding: 16,
                borderRadius: 8,
                flex: 1,
                margin: 4,
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSubmit();
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.amber,
                padding: 16,
                borderRadius: 8,
                flex: 1,
                margin: 4,
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ModalInsert.defaultProps = {
  visible: false,
  payload: {
    item_id: '',
    noContainer: '',
    size: 'Small',
    type: 'Type 1',
    slot: '',
    row: '',
    tier: '',
  },
};

ModalInsert.propTypes = {
  visible: PropTypes.bool,
  payload: PropTypes.object,
};
export default ModalInsert;
