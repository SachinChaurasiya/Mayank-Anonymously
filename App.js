import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import { Input } from "react-native-elements/dist/Input";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Dates from "./components/calendar";
import { IconButton, Colors } from 'react-native-paper';



const Flex = () => {

const [selectedValue , setSelectedValue] = useState("Select Class")

const Separator = () => (
  <View style ={styles.separator}></View>
)


  return (
    <View>
         <View style = {{flexDirection:'column'}}> 
             <View style ={{ flex:5, flexDirection:'row' , justifyContent: "space-around", marginTop:10}}>
                <Button title="Round Trip" color="#F15b2F"   />
                <Button title="one way"  color ="#F15b2F"  /> 
             </View>
         </View>
      
     <View style={[styles.container, {
          flexDirection: "row"
        }]}>
      <View style={{ flex: 3   }}>
     
       <View>
       <Input
            style={styles.placeholder}
            placeholder="Flying From"
            placeholderTextColor="grey"
            leftIcon={
           <FontAwesome5 
               name="map-marker-alt"
               size={22}
               color="#F15b2F"
           />
           }
        />



       <Input 
            style={styles.placeholder}
            placeholder="Departure"
            placeholderTextColor="grey"
            leftIcon={
              <IconButton
              icon="calendar"
              color={Colors.red500}
              size={28}
              onPress={() => tarik('dates pressed')}
            />
             } 
         />
                    {/* First DropDown (Picker) menu */}
         <View style ={{margin:10}}>
             <Picker   
                selectedValue={selectedValue}
                style={{height:50   ,   width:   150}}
                onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label = "Select"/>
                  sdsdc
                  <Picker.Item label = "Adult(18+)" value="0"  />
                  <Picker.Item label = "Children(2-11YRS)" value="0" />
                  <Picker.Item label = "Infant(On lap)" value="0" />
              </Picker>
           </View>
        </View>
      </View>


      <FontAwesome5
      style={{margin:6}}
      name="exchange-alt"
      size={36}
      color ="#F15b2F" />



      <View style={{ flex: 3,  }} >
        <Input
        style={styles.placeholder}
        placeholder="Flying To"
        placeholderTextColor="grey"
        leftIcon={
          <FontAwesome5 
          name="map-marker-alt"
          size={20}
          color="#F15b2F"
          />
        }
        />

    <Input
        style={styles.placeholder}
        placeholder="Return"
        placeholderTextColor="grey"
        onPress={() => {
          <Dates />
        }}
        leftIcon={
          <FontAwesome5 
          name="calendar-alt"
          size={20}
          color="#F15b2F"
          />
        }
         />



{/* second DropDown menu (picker) */} 
   <View style ={{margin:10 }}>
        <Picker 
            selectedValue={selectedValue}
            style={{height:50 , width: 150}}
            onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)} >
               <Picker.Item label ="Select Class" value="" />      
               <Picker.Item label ="Economy" value="Economy" />
               <Picker.Item label ="PremiumEconomy" value="Pe" />
               <Picker.Item label ="Business" value="Business" />
               <Picker.Item label ="First Class" value="Fc" />
         </Picker>
    </View>



{/* Search button */}
      </View>
           </View>
                   <View style={styles.Searchbtn} >
                        <Button style={styles.Searchbtn} color="#f15b2F" title="Search" />
                    </View>
          <Separator />
          <Dates />
          <App />
         </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    placeholder:{
      width:40,
      height:20,
    },
    Searchbtn:{
    marginLeft:70,
    marginRight:70,
    margin:10
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default Flex;
