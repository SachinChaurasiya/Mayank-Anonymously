import React , {useState} from 'react'
import { StyleSheet ,TextInput,Button, View , Text , Platform }  from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Picker } from "@react-native-picker/picker";


const Flight =()=>{

    const [selectedValue , setSelectedValue] = useState("Select")
    const [secondselectedValue , setSecondSelectedValue] = useState("Select Class")
    

    // const [date, setDate] = useState(new Date(1598051730000));
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(currentDate);
    //   };
    
    //   const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    //   };
    
    //   const showDatepicker = () => {
    //     showMode('date');
    //   };
    

    return(
        <View style= {{padding:10 , borderWidth:1 , borderColor:'grey' , margin:10 }}>
            <View>
                <View style ={styles.btn}>
                    <View>
                       <Button
                       color="#195fb9"
                       title = "Round Trip" />
                    </View>
                    <View style = {{marginRight:30}}>
                       <Button
                       color="#195fb9"
                       title = "One Way" />
                    </View>
                </View> 
            </View> 
           <View style = {styles.InputDiv}> 
            <View>
                <TextInput
                style={styles.placeholder}
                keyBoard="alphabetic"
                placeholder='From'
                />
            </View>


<View style = {{marginTop:10 , height:40,width:40 }}>
    <FontAwesome5
    name="exchange-alt"
    color="#195fb9"
    size={30}
     />
</View>

            <View>
                <TextInput
                style={[styles.placeholder,{marginRight:20}]}
                placeholder='To'
                keyBoard="alphabetic"
                />
            </View>

         </View>
         
         <View style = {styles.InputDiv}>
          <View>
                <TextInput
                style={styles.placeholder}
                placeholder='Departure'
                keyBoard="alphabetic"
                />
            </View>

            <View>
                <TextInput
                style={[styles.placeholder,{marginRight:20}]}
                placeholder='Arrive'
                keyBoard="alphabetic"
                />
            </View>
         </View>
       
       <View style = {{flexDirection:"row" , justifyContent:'space-between'}}>
       <View>  
             <Picker   
                 selectedValue={selectedValue}
                 style={{height:30,width:140,border:'none' ,marginTop:10}}
                 onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}
                 > 
                   <Picker.Item label = "Adult(18+)" value="Adutl"  />
                  <Picker.Item label = "Children(2-11YRS)" value="Children" />
                  <Picker.Item label = "Infant(On lap)" value="Infant(on lap)" />
              </Picker> 
      </View>

      <View>
        <Picker  
                 selectedValue={secondselectedValue}
                 style={{height:30,width:140,border:'none', marginTop:10}}
                 onValueChange={(itemValue,itemIndex) => setSecondSelectedValue(itemValue)}
                 > 
                    <Picker.Item label ="Economy" value="Economy" />
                    <Picker.Item label ="PremiumEconomy" value="Pe" />
                    <Picker.Item label ="Business" value="Business" />
                    <Picker.Item label ="First Class" value="Fc" />
              </Picker>
      </View>
      </View>
         <View>
             <View style={{ marginHorizontal:50 , marginTop:20 }}>
                 <Button
                 title ="Search"
                 color="#195fb9"
                 />
             </View>
         </View>
        </View>
    )
}



const styles= StyleSheet.create({
    InputDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    placeholder:{
        borderBottomWidth:1,
        borderBottomColor:"grey",
        width:100,
        height:40,
        color:'black'
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-between',
    }

})
export default Flight;