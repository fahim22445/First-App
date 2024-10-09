//  import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, }
//    from 'react-native';
//  import React, { useState } from 'react';

//  function Prac() {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     //
//   }   return (
//        <SafeAreaView style={styles.main}>
//          <View style={styles.header}>
//          <View style={styles.login} ><Text style={styles.title}>Login Here</Text></View>
//            <Text style={styles.description}>
//              Welcome back you have been missed
//            </Text>
//   //       </View>
//   //       <View style={styles.inputview}>
//   //         <View style={styles.email}><TextInput style={styles.input} placeholder="Email" /></View>
//   //         <View style={styles.pw}><TextInput style={styles.input} placeholder="Password" /></View>
//   //       </View>
//   //       <View style={styles.textview}>
//   //         <Text style={styles.forgot}>Forgot your password?</Text>
//   //         <TouchableOpacity style={styles.button}>
//   //           <Text style={styles.buttontext}>Sign In</Text>
//   //         </TouchableOpacity>
//   //         <TouchableOpacity style={styles.buttonnew}>
//   //           <Text style={styles.buttontextnew}>Create a new account</Text>
//   //         </TouchableOpacity>
//   //       </View>
//   //       <View style={styles.iconview}>
//   //         <Text style={styles.icontitle}>Or continue with</Text>
//   //         <View style={styles.iconwrap}>
//   //           <View style={styles.iconbox}>
//   //             {/* <Image
//                  style={styles.icongimage}
//                  source={require('../assets/images/facebook.png')}
//                /> */}
//              </View>
//              <View style={styles.iconbox}>
//                {/* <Image
//                style={styles.icongimage}
//                  source={require('../assets/images/facebook.png')}
//               /> */}
//              </View>
//            <View style={styles.iconbox}>
//                {/* <Image
//                 style={styles.icongimage}
//                 source={require('../assets/images/facebook.png')}
//               /> */}
//            </View>
//            </View>
//          </View>
//        </SafeAreaView>
//     );
//   };
//   export default Prac;
//   const styles = StyleSheet.create({
//     main: {
//       padding: 20,
//       gap: 10,
//       flex: 1,
//       justifyContent: 'center', 
//       alignItems: 'center'
//   ,  },
//     header: {
//       // justifyContent: 'center',
//       alignItems: 'center',
//        gap: 10,
//     },
//     pw:{
//       backgroundColor:"purple",
//       borderRadius:25,
//       alignItems:"center",
//     },
//     title: {
//     //   fontSize: 25,
//     //   color: 'blue',
//        textAlign: 'center',
//        color:"white",
//     //   fontWeight: '600',
//     },
//     login:{
//       backgroundColor:"blue",
//       height:40,
//       width:100,
//       justifyContent:"center",
//     },
//     email:{
//       backgroundColor:"pink",
//       width:300,
//       borderRadius:25,
//       alignItems:"center",
//     },
//     description: {
//       // fontSize: 14,
//       // textAlign: 'center',
//       // fontWeight: '500',
//       color:"orange",
//     },
//     inputview: {
//       // alignItems: 'center',
//        gap: 10,
//     },
//     input: {
//       // height: 60,
//       // width: '90%',
//       // backgroundColor: '#eeeeee',
//       // borderRadius: 10,
//       // paddingHorizontal: 20,
//       // borderColor: 'blue',
//       // borderWidth: 1,
//     },
//     textview: {
//       // alignItems: 'center',
//       color:"orange"
//     },
//     forgot: {
//       // color: 'blue',
//       // fontSize: 16,
//       // fontWeight: '500',
//        textAlign:'right'
//       // width: '90%',
//     },
//     button: {
//        height: 60,
//        width: '90%',
//        backgroundColor: 'blue',
//        borderRadius: 10,
//        marginTop: 30,
//        alignItems: 'center',
//        justifyContent: 'center',
//     },
//     buttontext: {
//        color: 'white',
//        fontWeight: '600',
//        fontSize: 20,
//     },
//     buttonnew: {
//        height: 60,
//        width: '90%',
//        borderRadius: 10,
//        marginTop: 30,
//        alignItems: 'center',
//        justifyContent: 'center',
//     },
//     buttontextnew: {
//        color: 'grey',
//       fontWeight: '500',
//        fontSize: 16,
//     },
//     iconview: {
//        alignItems: 'center',
//     },
//     icontitle: {
//       // color: 'blue',
//       // fontSize: 16,
//       // fontweight: '500',
//     },
//     iconwrap: {
//       // flexDirection: 'row',
//       // gap: 5,
//       // marginTop: 10,
//     },
//     iconbox: {
//       // height: 50,
//       // width: 50,
//       // borderRadius: 5,
//       // backgroundColor: '#eeeeee',
//       // justifyContent: 'center',
//       // alignItems: 'center',
//     },
//     icongimage: {
//       // height: 30,
//       // width: 30,
//     },



// //    });
// //   import { Button, StyleSheet, Text, View } from 'react-native';
// //   import React from 'react';

// //   const Login = () => {
// //     return (
// //       <View>
// //         <Button title='Login' onPress={() => navigation.navigate("Welcome")} />
// //       </View>
// //     );
// //   };

// //   export default Login;

// //   const styles = StyleSheet.create({});
// // }








// import { StyleSheet, Text, View , Button } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// const Login = () => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <Button title='go to welcome' onPress={()=>navigation.navigate("Welcome")}/>
//       </View>
//   )
// }

// export default Login

// const styles = StyleSheet.create({})