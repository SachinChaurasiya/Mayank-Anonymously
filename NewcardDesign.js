import React ,{useState} from 'react'
import { View , Text, StyleSheet, Dimensions , CheckBox ,FlatList , Modal ,Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FlightData from './FlightData'


const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height





const NewCard = () => {

    const [isSelected , setSelection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const ConvertMinsToTime = ({data}) => {
        let hours = Math.floor(data / 60);
        let minutes = data % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}h:${minutes}m`;
      }
      


    const Flight = ({Flight}) => {
        return(
            <>
            <View>
                <View>
                    <View style = {styles.MainCard}>
                        <View style= {{flexDirection:'row' , justifyContent:'space-around'}}>
                         <Text style = {styles.CardHeaderText}>{Flight.inBound[0].airlineName}</Text>
                         <View style ={{flexDirection:'row'}}>
                         <Text style = {styles.CardHeaderText}>
                         {`${Flight.inBound[0].depDate.split("T")[1]}  - ${Flight.inBound[0].reachDate.split("T")[1]}`}</Text>
                         </View>
                      </View>
                      <View style = {styles.innerCard}> 
                           <View style = {styles.image}>
                            <Image 
                            source= {require('./assets/6E.png')}
                            style ={{resizeMode:"contain" , height:60, marginLeft:5 , width:60 , borderRadius:10}} />
                          </View>
                        
                          <View style = {styles.durationAndStop}>
                          <Text style={{fontSize:14 ,margin:5 , fontWeight:"bold"}}> <ConvertMinsToTime data = {Flight.inBound[0].eft}/></Text>
                          <Text style={{fontSize:10 , margin:5 }}>(Non-stop)</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:10 , margin:5 }}>{`${Flight.inBound[0].fromAirport} -  ${Flight.inBound[0].toAirport}`}</Text>
                        </View>
                        <Text style={{fontWeight:'bold' , margin:5}}>SG-266</Text>
                          </View>
                          <View style= {{  justifyContent:'flex-end' , marginLeft:50  }}>
                              <FontAwesome5
                              name="info-circle"
                              color="#195fb9"
                              size={24}
                              onPress={() => setModalVisible(true)}
                              />
                          </View>
                      </View>


                      <View style = {{flexDirection:"row" , justifyContent:'space-around'  , marginLeft:20 }}>
                        <Text style={{ fontSize:18, fontWeight:'bold' , marginTop:8}}>{`₹ ${Flight.fare.grandTotal}`}</Text>
                        <View style ={{flex:1, justifyContent:"flex-end" , alignItems:"flex-end"   }} >
                                    <CheckBox
                                        style={{marginRight:11}}
                                        size = {20}
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        />
                           </View>
                    </View>
                </View>
              </View>
            </View>


            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style = {{alignItems:"flex-end" , justifyContent:"flex-end" , margin:10}}>
                  <FontAwesome5
                  name="times-circle"
                  size={20}
                  onPress={() => setModalVisible(!modalVisible)}
                  />
              </View>
            <Text style= {styles.modalText}>Flight Details</Text>
            <View style = {{flexDirection:'row' , justifyContent:"space-around"}}>
              <Text >
                  Chennai-NewDelhi
              </Text>
              <Text style = {{marginRight:5}}> 
                  Mon, Nov 01 2021
              </Text>
          </View>
        
          <View style = {{margin:10 , justifyContent:"center", borderWidth:1 , borderColor:"whitesmoke" }}>
              <Text style = {{ textTransform:'uppercase' , fontStyle:"italic"}} >
              The baggage information is just for reference. Please Check with airline before check-in. For more information, visit the airline's official website.
              </Text>
          </View>
          <View style={{alignItems:'center' , marginRight:5}}>
          <Image 
        source={require('./assets/INDIGO.png')}
        style={{width:50,height:50 , resizeMode:'contain'}} />
        </View>
          <View style = {{justifyContent:'center', alignItems:'center'}}>
              <View>
              </View>
          <View style= {{margin:10}}>
          <Text style = {{fontWeight:'bold', marginLeft:10}}>
              Indigo , SG266
          </Text>
          <Text>
          Operated by Indigo
          </Text>
          </View>
          <View style= {{margin:10}}>
              <Text style = {{fontWeight:'bold'}}>
                  Check-In Baggage
              </Text>
              <Text style= {{marginLeft:8 , marginTop:2}}>
                  15 kg per person
              </Text>
              <Text style = {{fontWeight:'bold' , marginTop:10 , marginLeft:8 }}>Cabin Baggage</Text>
              <Text style={{ marginLeft:10 , marginTop:2}}>
                  7 kg per person
              </Text>
          </View>
          <View style= {{margin:10}}>
              <Text style = {{fontWeight:'bold' , marginLeft:16, marginTop:2}}>
              Chennai(MAA)
              </Text>
              <Text style = {{marginLeft:5 , marginTop:2}}>Chennai International</Text>
              <Text style= {{ marginLeft:40 , marginTop:2}}>8:00 PM</Text>
          </View>
          </View>
          </View>
        </View>

       <View style= {{flexDirection:'row' , justifyContent:'space-between' , backgroundColor:'whitesmoke'}}>
         <View style= {{
           width:160,
           marginTop:11,
           height:2,
           backgroundColor:"#195fb9"
           }}>
         </View>
         <View>
           <FontAwesome5
           name="plane"
           size={24}
           color="#195fb9"
           />
         </View>
         <View style= {{
           width:170,
           height:2,
           marginTop:11,
           backgroundColor:"#195fb9"
           }}>
         </View>
       </View>

       <View style ={{justifyContent:'center' , backgroundColor:'whitesmoke' ,alignItems:'center'}}>
         <View>
           <Text style= {{marginLeft:25 , fontWeight:"bold"}}>
             New-delhi(DEL)
           </Text>
           <Text>
             Indira Gandhi International
           </Text>
           <Text style = {{marginLeft:50 , marginBottom:20}}>
             08:45 AM
           </Text>
         </View>
       </View>
      </Modal>
    </View>


            </>
        )
    }


    return(
        <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={FlightData.flightResult}
        keyExtractor = {(item, index) => index.toString()}
        renderItem={({item}) => <Flight Flight={item} />}
      />
    </View>
    )
 }


const styles=StyleSheet.create({
    MainCard:{
        shadowColor:"grey",
        elevation:16,
        shadowOpacity:10,
        shadowRadius:10,
        margin:10,
        color:"red",
        width:Width -20,
        height:Height -590,
        backgroundColor:'#f5f5f5',
        borderRadius:20
    },
    innerCard:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#195fb9",
        margin:10,
        marginLeft:20,
        width:Width -60,
        height:Height -680,
        flexDirection:"row",
    },
    CardHeaderText:{
        fontWeight:"600",
        fontSize:20
    },
    image:{
        borderRadius:10,
        width:80,
        shadowColor:"grey",
        shadowOpacity:5,
        shadowOffset:{
            width: 10, height: 0
         },
        shadowRadius:10,
        elevation:4,
        height:80,
        borderBottomRightRadius:30,
        borderTopRightRadius:30,
        justifyContent:'center',
        marginTop:20,
    },
    durationAndStop:{
        marginLeft:80,
        width:80,
        borderRadius:10,
        height:105,
        borderColor:"#195fb9",
        borderWidth:1,
        marginTop:10,
    },
    container: {
        flex:1,
        backgroundColor:"#fff",
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        marginTop: 10
      },
      modalView: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      backgroundColor:'whitesmoke'
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom:20,
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center"
      },
})

export default NewCard;