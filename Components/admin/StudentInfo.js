import React from 'react';
import { StyleSheet, Text,View,Button} from 'react-native';
import database from "@react-native-firebase/database";
import { ScrollView } from 'react-native-gesture-handler';

function Info(props){

  
  console.log("Data In Student Info",props.route.params.Data);

 const Studentdata=props.route.params.Data;

const Delete=()=>{
    var res = Studentdata.value.replace(".","");
       database().ref('/').child('CRS/Students/'+res).remove()
        console.log(res)
      props.navigation.navigate('Admin Home')
}



    return(
        <View >
           
<ScrollView>
<Text style={{textAlign:"center",marginTop:10,fontSize:23,fontWeight:"bold"}}>
    STUDENT DETAILS
</Text>
<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Student Name : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.names}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Student Father Name : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.Fname}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Student Email: 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.value}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
     Student Phone Number : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.Pno}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Student City : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.City}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
Matriculation year : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.MY}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    School Name : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.MIM}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
Education Filed In Matric : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.EFM}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Matric Percentage : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.MP}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
    Marks in Matric : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.MIM}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
College name : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.CN}
</Text>

<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
Education Filed In College : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.EFC}
</Text>



<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
Marks in First Year : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.MIF}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
Marks in Second Year : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.MIS}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
First Year Percentage : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.PIF}
</Text>


<Text style={{textAlign:"left",marginTop:20,marginLeft:8,fontSize:18,fontWeight:"bold"}}>
Second Year Percentage : 
</Text>
<Text style={{textAlign:"left",marginTop:10,marginLeft:40,fontSize:18}}>
    {Studentdata.PIS}
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