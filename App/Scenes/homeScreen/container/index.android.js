import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import HomeScreen from 'components/organism/homeScreen/';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'ItemDatabase.db'});

const onInsert = () => {
  alert('Insert');
};

const onDelete = () => {
  alert('Delete');
};

const onUpdate = () => {
  alert('update');
};

const data = [
  {title: 'Ferdi Rahman', title: 'React Native Developer'},
  {title: 'James', title: 'IOS Developer'},
];

const Home = () => {
  const [item, setItem] = useState([]);
  console.log('item: ', item);

  useEffect(() => {
    async function initialize() {
      console.log('homeScreen');
      db.transaction(function(txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_item'",
          [],
          function(tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              console.log('create new');
              txn.executeSql('DROP TABLE IF EXISTS table_item', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_item(item_id INTEGER PRIMARY KEY AUTOINCREMENT, no_container VARCHAR(50), size INT(10), type VARCHAR(50), slot INT(10), row INT(10), tier INT(10))',
                [],
              );
            }
          },
        );
      });
      console.log('oke');

      // db.transaction(function(tx) {
      //   tx.executeSql(
      //     'INSERT INTO table_item (no_container, size, type, slot, row, tier ) VALUES (?,?,?,?,?,?)',
      //     ['Container 1', 10, 'Dry', 5, 1, 10],
      //     (tx, results) => {
      //       console.log('Results', results.rowsAffected);
      //       if (results.rowsAffected > 0) {
      //         Alert.alert('Success', 'You are Registered Successfully');
      //       } else {
      //         alert('Registration Failed');
      //       }
      //     },
      //   );
      // });

      db.transaction(tx => {
        tx.executeSql('SELECT * FROM table_item', [], (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setItem(temp);
        });
      });
    }
    initialize();
  }, []);
  return (
    <HomeScreen
      title={'Ini Halaman Home'}
      onInsert={onInsert}
      onUpdate={onUpdate}
      onDelete={onDelete}
      data={data}
    />
  );
};

export default Home;
