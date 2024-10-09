import { StyleSheet, Text, View, TextInput, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';



const E_commerce = () => {
  Name=[{name:"Chair"},{name:"Table"},{name:"Desk"}]
  return (
    <View style={styles.main}>
      <Text style={styles.text}>explore what</Text>
      <View style={styles.contain}>
        <Text style={styles.home}>your home needs</Text>
        <Icon name="bell" size={30} color="#900" />

      </View>
      <View>
        <TextInput style={styles.txt1} placeholder='search for items' />
      </View>
      <View  style={styles.txt2}  >
        <Text style={styles.txt5}>
          Categories
        </Text>
        <Text style={styles.txt3}>
          See all
        </Text>
        <Icon style={styles.txt4} name={"arrow-right"} size={35} color={"black"} />
      </View>
      <View>
        <FlatList 
        data={Name}
        renderItem={({item})=>{
          return(
            <View>
              <Text style={styles.txt6}>
                {item.name}
              </Text>
              <ImageBackground>
                {item.}
              </ImageBackground>
            </View>
              
          )
        }
        
        }
        
        
        
        
        
        
        />
      </View>


    </View>
  )
}

export default E_commerce

const styles = StyleSheet.create({
  text: {
    color: "black",
    left: 10,
    top: 10,
    fontSize: 20,
  },
  main: {
    flex: 1,
    backgroundColor: "white",

  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,


  },
  home: {
    color: "black",
    top: 5,
    fontSize: 20,
    left: 3,

  },
  txt1: {
    left: 10,
    backgroundColor: "gray",


  },
  txt2:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  txt3:{
    left:75,
  },
  txt4:{
    right:10,
  },
  txt5:{
    left:10,

  },
  txt6:{
    color:"black"
  }
})





















