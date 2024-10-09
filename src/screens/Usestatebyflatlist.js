import { StyleSheet, Text, View  , FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
const Usestatebyflatlist = () => {
    const [data , setdata] = useState([]);
    const getapidata=  async()=>{

        const url="https://jsonplaceholder.typicode.com/posts/1 ";
        let  res  = await fetch(url);
        res = await res.json();
        setdata([res]);
    };
    useEffect(()=>{
        getapidata();
    },[])
      return (
    <View>
      <FlatList
      data={data}
      renderItem={({item , index })=>(
        <View>
            <Text>{item.body}</Text>
            <Text>{item.body}</Text>
            <Text>{item.body}</Text>
            <Text>{item.body}</Text>
            <Text>{item.body}</Text>
            <Text>{item.body}</Text>

        </View>
      )}
      />
    </View>
  )
}

export default Usestatebyflatlist

const styles = StyleSheet.create({})