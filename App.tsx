// // import { ScrollView, StyleSheet, Text, View } from 'react-native';
// // import React, { useEffect, useState } from 'react';

// // const App = () => {
// //   const [data, setData] = useState([]);

// //   const getAPIKEY = async () => {
// //     const url = "https://jsonplaceholder.typicode.com/posts";
// //     let result = await fetch(url);
// //     result = await result.json();
// //     setData(result);
// //   };

// //   useEffect(() => {
// //     getAPIKEY();
// //   }, []);

// //   return (
// //     <ScrollView>
// //       {data.length > 0 ? (
// //         data.map((item) => (
// //           <View key={item.id} style={styles.itemContainer}>
// //             <Text style={styles.itemText}>{item.body}</Text>
// //           </View>
// //         ))
// //       ) : (
// //         <Text>Loading...</Text>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   itemContainer: {
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   itemText: {
// //     fontSize: 16,
// //   },
// // });

// // export default App;






// import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'
// import Weather from './src/screens/Weather'

// const App = () => {

//   const [taskList,setTaskList] = useState([])
//   const [task,setTask] = useState('')
//   const [phone,setphone] = useState('')

// console.log(task)
// console.log('task List =====>',taskList)

// const saveTodo = ()=>{
//   setTaskList([...taskList,{task,phone}])
// }
// const Delete = (id)=>{
// console.log(id)
// const updatedTodo = taskList.filter((item)=>item.phone != id))
// console.log(updatedTodo)
// setTaskList(updatedTodo)
// }
//   return (
//     <View style={{flex:1}}>
//       <TextInput onChangeText={setTask} placeholder='Enter Task' style={{borderWidth:1,borderColor:'black'}}/>
//       <TextInput onChangeText={setphone} placeholder='Enter Task' style={{borderWidth:1,borderColor:'black'}}/>
     
//       <Button title='Save Task' onPress={saveTodo} />

//       <FlatList
//       data={taskList}
//       renderItem={({item})=>{
//           return(
//             <View>
//               <Text>{item.task}</Text>
//               <Button title='Delete' onPress={()=>Delete(item.phone)}/>
//             </View>
//           )
//       }}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})






























import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Usestatebyflatlist from './src/screens/Usestatebyflatlist'

const App = () => {
  return (
  <Usestatebyflatlist/>
  )
}

export default App

const styles = StyleSheet.create({})