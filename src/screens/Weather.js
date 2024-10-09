import { Image, ImageBackground, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
const Weather = () => {
  const cities = [
    { name: "Lahore", image: require("../images/we3.jpg") },
    { name: "Karachi", image: require("../images/we4.jpg") },
    { name: "Islamabad", image: require("../images/we5.jpg") },
    { name: "Kamalia", image: require("../images/we6.jpg") },
    { name: "Sawat", image: require("../images/we7.jpg") }
  ];
  const renderCity = ({ item }) => (
    <TouchableOpacity style={styles.cityContainer}>
      <Text style={styles.cityName}>{item.name}</Text>
      <Image source={item.image} style={styles.cityImage} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../images/weather1.jpg')} style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.headerContainer}>
            <Icons name={"menu"} size={45} color={"white"} />
            <Image source={require("../images/user2.jpg")} style={styles.profileImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Rana Fahim</Text>
            <Text style={styles.subHeaderText}>Search the city by name</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput placeholder='Search for City' style={styles.searchInput} placeholderTextColor={"white"} />
          </View>
          <Text style={styles.myLocationsText}>My Locations</Text>
          <FlatList
            data={cities}
            horizontal
            keyExtractor={(item) => item.name}
            renderItem={renderCity}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};






























export default Weather;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover'
  },
  scrollViewContent: {
    flexGrow: 1
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15
  },
  profileImage: {
    height: 46,
    width: 46,
    borderRadius: 23,
    marginLeft: 'auto'
  },
  textContainer: {
    paddingHorizontal: 15
  },
  headerText: {
    color: "white",
    fontSize: 30
  },
  subHeaderText: {
    color: "white",
    fontSize: 25
  },
  searchContainer: {
    margin: 15
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '90%',
    alignSelf: 'center'
  },
  myLocationsText: {
    color: "white",
    fontSize: 30,
    marginHorizontal: 15,
    marginBottom: 10
  },
  cityContainer: {
    marginHorizontal: 10
  },
  cityName: {
    color: "white",
    textAlign: 'center',
    top: 40
  },
  cityImage: {
    height: 200,
    width: 90,
    borderRadius: 500,
    top: 45,
    left: 12
  }
});
