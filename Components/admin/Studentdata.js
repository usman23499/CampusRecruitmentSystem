import React from 'react';
import database from "@react-native-firebase/database"
import { StyleSheet, Text,View,TouchableOpacity,BackHandler, Alert} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function Home(props){

    const [Studentdata,setStudentdata]=useState({});
    React.useEffect(()=>{

        database().ref('/').child('CRS/Students/').once('value',function(data){

            // console.log(data.val())
            // const mydata=data.val()
            setStudentdata(data.val())
    
    
        })  
        
        
        
        
    },[])


    return(
        <View >
            
<ScrollView>
{
     Object.values(Studentdata).map((objvalue,key) => {

        console.log(objvalue.names)

        return(
            <View key={key} style={{
                width:"97%",
                height:200,
                margin:5,
              
                backgroundColor:"white",
                borderRadius:10,
                borderStyle:"solid",
                
            }}>
                <TouchableOpacity
               onPress={()=>{
                props.navigation.navigate('Student Data Handle',{Data:objvalue})
               }}
               >
               <Text style={{fontSize:23,padding:15,fontWeight:"bold"}}>
               College Name:{objvalue.CN}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
                Education Filed In College: {objvalue.EFC}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
                Matric Percentage: {objvalue.MP}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
                First Year Percentage: {objvalue.PIF}
                </Text>

                <Text style={{fontSize:18,paddingLeft:15}}>
                Second Year Percentage: {objvalue.PIS}
                </Text>
               </TouchableOpacity>
            </View>



        )

        
      })
}

</ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

})
export default Home;