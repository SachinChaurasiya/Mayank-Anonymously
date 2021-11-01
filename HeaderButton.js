import React, { useState } from 'react'
import { View  , Text, StyleSheet , TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FlightData from '../FlightData'



const RoundOneWayBtn =(props)=>{
    
    const [activetab, setActiveTab] =useState('Go')
    return(
             <View style= {styles.btn}>
            <View>
            <Text><HeaderButtons 
            text="Go"
            btncolor="#f15b2f" 
            textcolor="white"
            activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text>
              <HeaderButtons
             text="Return" 
             btncolor="white" 
             textcolor="#195fb9"
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View> 
    )
}

const HeaderButtons = (props ) =>{
    return(
        <View>
        <TouchableOpacity activeOpacity={0.6} style={{
            backgroundColor: props.activetab === props.text ? "#f15b2f" : "white",
            borderRadius:30,
            paddingVertical:6,
            paddingHorizontal:16,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >

            <Text style={{color: props.activetab === props.text?"white":"#000",fontSize:15,fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    btn:{
        flexDirection:'row',
        alignSelf: 'center',
        margin:20,
        borderWidth:1, 
        borderRadius:30,
        borderColor:"#f15b2f"
    },
})


export default RoundOneWayBtn;


// name 
// roll no
// sub name
// school name

// 270465213033