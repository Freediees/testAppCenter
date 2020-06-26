import React, {useState} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
import DefaultHeader from 'components/molecules/defaultHeader';
import {Colors} from 'theme';
import DatePicker from 'react-native-datepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Create one entry form:
// First Name:{TextBox}
// Last Name:{TextBox}
// Date Of Birth {calender}
// Province: {Dropdown List} By API
// District: {Dropdown List} By API
// Constituency:{Dropdown List} By API
// Village :{Dropdown List} By API
// Employee Salary: {Amount}

const Task1 = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [date, setDate] = useState('2016-05-15');
  const [provinsi, setProvinsi] = useState('-');
  const [district, setDistrict] = useState('-');
  const [constituency, setConstituency] = useState('-');
  const [village, setVillage] = useState('-');
  const [salary, setSalary] = useState();
  return (
    <View style={{flex: 1}}>
      <DefaultHeader title={'Task 1'} />
      <View style={{padding: 16}}>
        <Text style={{color: Colors.amber}}>FirstName</Text>
        <TextInput
          onChangeText={text => {
            setFirstName(text);
          }}
          placeholder={'First Name'}
          style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
        />

        <Text style={{color: Colors.amber}}>LastName</Text>
        <TextInput
          onChangeText={text => {
            setLastName(text);
          }}
          placeholder={'Last Name'}
          style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
        />

        <Text style={{color: Colors.amber, marginBottom: 16}}>
          Date of Birth
        </Text>
        <DatePicker
          style={{width: 200}}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1980-05-01"
          maxDate="2022-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            setDate(date);
          }}
        />

        <Text style={{color: Colors.amber, marginTop: 16}}>Province</Text>
        <Picker
          value={provinsi}
          selectedValue={provinsi}
          style={{height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => setProvinsi(itemValue)}>
          <Picker.Item label={'Select Province'} value="-" />
        </Picker>

        <Text style={{color: Colors.amber, marginTop: 16}}>District</Text>
        <Picker
          value={district}
          selectedValue={district}
          style={{height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => setDistrict(itemValue)}>
          <Picker.Item label={'Select District'} value="-" />
        </Picker>

        <Text style={{color: Colors.amber, marginTop: 16}}>Constituency</Text>
        <Picker
          value={constituency}
          selectedValue={constituency}
          style={{height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => setConstituency(itemValue)}>
          <Picker.Item label={'Select Constituency'} value="-" />
        </Picker>

        <Text style={{color: Colors.amber, marginTop: 16}}>Village</Text>
        <Picker
          value={village}
          selectedValue={village}
          style={{height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => setVillage(itemValue)}>
          <Picker.Item label={'Select Village'} value="-" />
        </Picker>

        <Text style={{color: Colors.amber}}>Salary</Text>
        <TextInput
          onChangeText={text => {
            setSalary(text);
          }}
          placeholder={'Salary'}
          style={{borderBottomWidth: 0.5, marginBottom: 4, marginLeft: 8}}
        />

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            height: 10,
            width: '100%',
            backgroundColor: Colors.amber,
            borderRadius: 8,
            marginTop: 8,
          }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task1;
