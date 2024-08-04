// /* eslint-disable @typescript-eslint/no-unused-vars */

// import {
//   Button,
//   FlatList,
//   Image,
//   Linking,
//   Modal,
//   PixelRatio,
//   Pressable,
//   RefreshControl,
//   StatusBar,
//   TextInput,
//   Touchable,
//   TouchableOpacity,
//   useWindowDimensions,
// } from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import {ScrollView, StyleSheet, Text, View} from 'react-native';

// function App(): JSX.Element {
//   const [todoList, setTodoLIst] = useState<string[]>([]);
//   const [text, setText] = useState<string>('');
//   const [isEdit, setIsEdit] = useState(false);
//   const [index, setIndex] = useState<number>(0);
//   const addToList = () => {
//     if (!isEdit) {
//       setTodoLIst([...todoList, text]);
//     } else {
//       const newTodoList = [...todoList];
//       newTodoList.splice(index, 1, text);
//       setTodoLIst(newTodoList);
//       setIsEdit(false);
//     }
//     setText('');
//   };
//   const onEdit = (item: string, index: number) => {
//     setIndex(index);
//     setIsEdit(true);
//     setText(item);
//   };
//   const onDelete = (index: number) => {
//     setTodoLIst(todoList.filter((item, i) => i !== index));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.textArea}
//         multiline={true}
//         numberOfLines={2}
//         onChangeText={value => setText(value)}
//         value={text}
//         placeholder="Type something here..."
//       />
//       <TouchableOpacity onPress={addToList}>
//         <Text style={styles.button}>Save</Text>
//       </TouchableOpacity>

//       {todoList.map((item, i) => (
//         <View
//           style={{
//             width: '100%',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             padding: 30,
//           }}>
//           <Text>{item}</Text>
//           <View style={{flexDirection: 'row', gap: 10}}>
//             <TouchableOpacity onPress={() => onEdit(item, i)}>
//               <Text style={styles.button}>Edit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => onDelete(i)}>
//               <Text style={styles.button}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   text: {
//     color: 'white',
//     fontSize: 30,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: 'Playwright NL Regular',
//   },
//   textArea: {
//     height: 150,
//     justifyContent: 'center',
//     textAlignVertical: 'top', // Align text to the top of the text area
//     padding: 10,
//     borderColor: 'white',
//     borderWidth: 1,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 14,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   buttonOpen: {
//     backgroundColor: '#f194ff',
//   },
//   buttonClose: {
//     backgroundColor: '#2196f3',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'gray',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   PressAble: {
//     padding: 20,
//     margin: 10,
//     borderRadius: 10,
//     backgroundColor: '#d90',
//   },
//   item: {
//     backgroundColor: '#000',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 20,
//   },
//   title: {
//     fontSize: 30,
//     textAlign: 'center',
//   },
//   listHeader: {
//     fontSize: 30,
//     color: 'white',
//   },
//   listFooter: {
//     fontSize: 30,
//     color: 'white',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//   },
// });

// export default App;
