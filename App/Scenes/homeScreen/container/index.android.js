import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import HomeScreen from 'components/organism/homeScreen/';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'ItemDatabase.db'});

const Home = () => {
  const [item, setItem] = useState([]);
  const [keyID, setKeyID] = useState();
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [statusProcess, setStatusProcess] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [keyCari, setKeyCari] = useState();

  const cariData = value => {
    setKeyCari(value);
    console.log(keyCari);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_item where no_container like ?',
        [`%${value}%`],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setItem(temp);
        },
      );
    });
  };

  const toggleModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  const toggleModalUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  const onInsert = () => {
    setStatusProcess('insert');
    toggleModalInsert();
  };

  const onInsertData = payload => {
    toggleModalInsert();
    db.transaction(function(tx) {
      tx.executeSql(
        'INSERT INTO table_item (no_container, size, type, slot, row, tier ) VALUES (?,?,?,?,?,?)',
        [
          payload.noContainer,
          payload.size,
          payload.type,
          payload.slot,
          payload.row,
          payload.tier,
        ],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            refreshData();
            setSelectedItem(null);
            Alert.alert('Success', 'Item Registered Successfully');
          } else {
            alert('Registration Failed');
          }
        },
      );
    });
  };

  const onDelete = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_item where item_id=?',
        [keyID],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            setSelectedItem(null);
            refreshData();
            Alert.alert('Success', 'Item deleted successfully');
          } else {
            alert('Please insert a valid Item ID');
          }
        },
      );
    });
  };

  const onUpdate = () => {
    console.log('selected item: ', selectedItem);
    setStatusProcess('update');
    if (selectedItem) {
      toggleModalInsert();
    } else {
      alert('Select item first');
    }
  };

  const onUpdateData = payload => {
    console.log('data upload:', payload);
    toggleModalInsert();
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_item set no_container=?, size=?, type=?, slot=?, row=?, tier=? where item_id=?',
        [
          payload.noContainer,
          payload.size,
          payload.type,
          payload.slot,
          payload.row,
          payload.tier,
          parseInt(payload.item_id),
        ],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            refreshData();
            Alert.alert('Success', 'Item updated successfully');
          } else {
            alert('Update Failed');
          }
        },
      );
    });
  };

  const refreshData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_item', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        setItem(temp);
      });
    });
  };

  const onSelectItem = value => {
    console.log('valueKey:', value);
    setKeyID(value.item_id);
    setSelectedItem(value);
  };

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
      data={item}
      keyID={keyID}
      onChangeID={onSelectItem}
      modalInsert={modalInsert}
      modalUpdate={modalUpdate}
      toggleModalInsert={toggleModalInsert}
      onInsertData={onInsertData}
      onUpdateData={onUpdateData}
      statusProcess={statusProcess}
      payload={selectedItem}
      cariDataValue={keyCari}
      cariData={cariData}
    />
  );
};

export default Home;
