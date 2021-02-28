import React from 'react';
import database from "@react-native-firebase/database"
import { StyleSheet, Text,View,TouchableOpacity,BackHandler, Alert} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function Home(props){

    const [Companydata,setCompanydata]=useState({});
    React.useEffect(()=>{

        database().ref('/').child('CRS/Company/').once('value',function(data){

            // console.log(data.val())
            // const mydata=data.val()
            setCompanydata(data.val())
    
    
        })  
        
        
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
{
     Object.values(Companydata).map((objvalue,key) => {

        console.log(objvalue.CN)

        return(
            <View key={key} style={{
                width:"97%",
                height:180,
                margin:5,
              
                backgroundColor:"white",
                borderRadius:10,
                borderStyle:"solid",

                
            }}
            
            
            >
               <TouchableOpacity
               onPress={()=>{
                props.navigation.navigate('Company Info',{Data:objvalue})
               }}
               >
               <Text style={{fontSize:23,padding:15,fontWeight:"bold"}}>
               Company Name:{objvalue.CN}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
               Company Field: {objvalue.OF}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
               Numbers of Employee: {objvalue.TNE}
                </Text>

                <Text style={{fontSize:18,paddingLeft:15}}>
               Phone Number: {objvalue.Pno}
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