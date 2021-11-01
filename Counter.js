import React,{useState} from 'react';
import {View, StyleSheet , Text  , ScrollView , TouchableOpacity ,Dimensions} from 'react-native';
  






const Counter = () => {
    const [count , setCount] = useState(0)

    const Increment =() => (
      setCount(prevCount => prevCount + 1 )
    )

    const Decrement =() => (
      setCount( prevCount => prevCount - 1   )
    )


    return (
        <View style={styles.container}>
            <View style = {styles.SignDiv}>
                <View>
               <TouchableOpacity onPress={Increment}>
                  <Text style = {styles.IncrementSign}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style= {{justifyContent:'center', alignItems:'center'}}>
                  <Text style = {{fontSize:20, marginLeft:4, width:24  }}>{count}</Text>
                </View>
                <View>
                <TouchableOpacity onPress={Decrement}>
                  <Text style = {styles.DecrementSign}>-</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    SignDiv:{
        flexDirection:'row' , 
        margin:20 ,
        borderWidth:1 ,
        width:75 , 
        justifyContent:'space-around', 
        alignItems:'space-around', 
        alignItems:'center', 
        borderRadius:10,
        borderColor:"#f15b2f" 
    },
    IncrementSign:{
        fontSize:15,
        height:25,
        marginTop:2 
    },
    DecrementSign:{
        fontSize:15,
        marginTop:2,  
        height:25,
        marginRight:10
    }
})

export default Counter;
