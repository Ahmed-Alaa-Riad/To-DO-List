import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  useEffect(() => {
    loadData();
  }, []);

  const [text, setText] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@toDo_list');
      if (jsonValue != null) {
        setTodoList(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error loading data', error);
    }
  };

  const storeData = async (value: string[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@toDo_list', jsonValue);
    } catch (error) {
      console.error('Error saving data', error);
    }
  };
  const addToList = () => {
    if (!isEdit) {
      setTodoList([...todoList, text]);
      storeData([...todoList, text]);
    } else {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1, text);
      setTodoList(newTodoList);
      storeData(newTodoList);
      setIsEdit(false);
    }
    setText('');
  };
  const onEdit = (item: string, index: number) => {
    setIsEdit(true);
    setIndex(index);
    setText(item);
  };
  const onDelete = (index: number) => {
    const newTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(newTodoList);
    storeData(newTodoList);
  };
  const renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <View style={styles.list}>
        <Text style={styles.text}>{item}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => onEdit(item, index)}
            style={styles.btn}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(index)} style={styles.btn}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        maxLength={14}
        numberOfLines={1}
        placeholder="Write Here"
        placeholderTextColor="black"
        onChangeText={value => setText(value)}
        value={text}
      />
      <TouchableOpacity
        onPress={addToList}
        style={text.length > 0 ? styles.saveBtn : styles.disabledBtn}
        disabled={text.length === 0}>
        <Text>Save</Text>
      </TouchableOpacity>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    color: 'black',
    fontSize: 20,
    height: 150,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    borderColor: 'rgb(214 123 42)',
    borderWidth: 1,
    width: '85%',
  },
  btn: {
    backgroundColor: 'rgb(114 82 50)',
    padding: 5,
    borderRadius: 25,
    width: 60,
    alignItems: 'center',
    marginVertical: 10,
  },
  saveBtn: {
    backgroundColor: 'rgb(114 82 50)',
    padding: 10,
    borderRadius: 25,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  disabledBtn: {
    backgroundColor: 'rgb(107 83 59)',
    padding: 10,
    borderRadius: 25,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  list: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'rgb(214 123 42)',
    padding: 5,
  },
});
export default App;
