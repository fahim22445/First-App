import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Usestate = () => {
    const [data , setdata] = useState();
    const getapidata=  async()=>{

        const url="https://jsonplaceholder.typicode.com/posts/1 ";
        let  res  = await fetch(url);
        res = await res.json();
        setdata(res);
    };
    useEffect(()=>{
        getapidata();
    },[])
      return (
    <View>
      {
        data ? <View>
            <Text>{data.id}</Text>
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>


        </View>  : null
      }
    </View>
  )
}

export default Usestate

const styles = StyleSheet.create({})