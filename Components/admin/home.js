import React from 'react';
import database from "@react-native-firebase/database"
import { StyleSheet, Text,View,TouchableOpacity,BackHandler, Alert} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function Home(props){

   
    React.useEffect(()=>{

     
        
        
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to logout?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
        
    },[])


    return(
        <View >
            
<ScrollView>
   
            <View style={{
                width:"97%",
                height:200,
                margin:5,
              
                backgroundColor:"white",
                borderRadius:10,
                borderStyle:"solid",
                justifyContent:"center",
                
            }}>
                <TouchableOpacity
               onPress={()=>{

                props.navigation.navigate('Student Data Manage')
               
               }}
               >
               <Text style={{fontSize:23,padding:15,fontWeight:"bold",textAlign:"center"}}>
                   STUDENT DATA
                </Text>
                
               </TouchableOpacity>
            </View>

            <View style={{
                width:"97%",
                height:200,
                margin:5,
              
                backgroundColor:"white",
                borderRadius:10,
                borderStyle:"solid",
                justifyContent:"center"
                
            }}>
                <TouchableOpacity
               onPress={()=>{
                props.navigation.navigate('Company Data Handle')
               }}
               >
               <Text style={{fontSize:23,padding:15,fontWeight:"bold",textAlign:"center"}}>
                   COMPANY DATA
                </Text>
                
               </TouchableOpacity>
            </View>




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