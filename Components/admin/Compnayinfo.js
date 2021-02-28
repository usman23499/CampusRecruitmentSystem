import React from 'react';
import { StyleSheet, Text,View,Button} from 'react-native';
import database from "@react-native-firebase/database";
import { ScrollView } from 'react-native-gesture-handler';

function Info(props){

  
  console.log("Data In Company Info",props.route.params.Data);

 const Companydata=props.route.params.Data;
 const Delete=()=>{
    var res = Companydata.value.replace(".","");
       database().ref('/').child('CRS/Company/'+res).remove()
        console.log(res)
      props.navigation.navigate('Admin Home')
}

    return(
        <View >
           
<ScrollView>
<Text style={{textAlign:"center",marginTop:10,fontSize:23,fontWeight:"bold"}}>
    COMPANY DETAILS
</Text>
<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    COMPANY NAME : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.CN}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    COMPANY Field : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.OF}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    CEO Name : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.Aname}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Company Email : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.value}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Phone Number : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.Pno}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    City : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.City}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Address : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.Address}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Total Number of Employee : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Companydata.TNE}
</Text>

<Text></Text>
<Button
          title="DELETE ACCOUNT"
         

          onPress={Delete}
        />

<Text></Text>



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
export default Info;