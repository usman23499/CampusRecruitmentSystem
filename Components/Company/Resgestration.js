/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Toast from 'react-native-simple-toast';
import React from 'react';
import database from "@react-native-firebase/database"
import { ScrollView } from 'react-native-gesture-handler';

import {
  
  View,
  Text,
 
  Button,
  Image
,
} from 'react-native';


import { TextInput } from 'react-native';
function Userregestration( props) {

  const [value, onChangeText] = React.useState("");

  const [Pass, onChangepass] = React.useState("");
  const [CN, onChangeCN] = React.useState("");

  const [Aname, onChangeAname] = React.useState("");
  
  const [Pno, onChangePno] = React.useState("");
  const [OF, onChangeOF] = React.useState("");
  const [City, onChangeCity] = React.useState("");
  const [Address, onChangeAddress] = React.useState("");
  const [TNE, onChangeTNE] = React.useState("");
 
  


const submit=()=>{

  if(value.length<1 || Pass.length <1 || CN.length <1 
    || Pno.length <1 || Aname.length <1 || City.length <1
    || OF.length <1  || Address.length <1 || TNE.length <1 
      ){

    Toast.show('Please Fill all the fileds');
  }
  else if(value==="admin"){
    Toast.show('Email is Already Regested');
  }
 else{


  database().ref('/').child('CRS/Company/').once('value',function(data){

   var checkemail=true;

    // console.log(data.val())
    const mydata=data.val()
    
    Object.values(mydata).forEach((objvalue) => {
      
      console.log(objvalue)

      if(objvalue.value===value  ){

       
        Toast.show('Email is Already Regested');
        checkemail=false
        return true
      }
     

      
    })

if(checkemail){

  database().ref('/').child('CRS/Students/').once('value',function(data){

    var emailinuser=true
    // console.log(data.val())
    const mydata=data.val()
  
    Object.values(mydata).forEach((objvalue) => {
  
      // console.log(objvalue)
  
      if(objvalue.value===value  ){

        Toast.show('Email is Already Regested');
        emailinuser=false
        
        return true
      }
  
    
      
    })

if(emailinuser){


  let user={
    CN,
    OF,
    Aname,
    value,
    Pass,
    Pno,
    City,
    Address,
    TNE, 
    
    
    
    }
    
    var res = value.replace(".","");
  
    database().ref('/').child('CRS/Company/'+res).set(user)
  
    
  
    props.navigation.navigate('Company Home',{name:{CN},email:{value}})
  



}
    
  
  
  })   




}



})   








  

  


  
  
 }



 
  
}




  return (
   
    <>
      
     
    
         <View style={{alignItems:"center",width:"100%",height:"100%",  backgroundColor: '#fff',}}>
           <View  style={{alignItems:"center",height:290}} >



           <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/2226349/screenshots/14102700/educational-institution_4x.jpg',
          }}
          style={{ width: 250, height: 250 }}
        />
         
          <Text style={{fontWeight:"bold"}}>
           COMPANY REGESTRATION
          </Text>

           </View>
         <ScrollView>
        <View style={{ width:"100%"}}>
       
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:320, padding:10,marginTop:10}}
      onChangeText={text => onChangeCN(text)}
      value={CN}
      placeholder="Company name"
    />

  
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:320, padding:10,marginTop:10}}
      onChangeText={text => onChangeOF(text)}
      value={OF}
      placeholder="Organization Field"
    />
 
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:10,marginTop:10}}
      onChangeText={text => onChangeAname(text)}
      value={Aname}
      placeholder="Company admin name"
      
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:10,marginTop:10}}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder="Email"
      
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10  }}
      onChangeText={text => onChangepass(text)}
      value={Pass}
      placeholder="Password"
      secureTextEntry
    />




<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangePno(text)}
      value={Pno}
      placeholder="Phone Number"
      keyboardType="phone-pad"
    />


<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeCity(text)}
      value={City}
      placeholder="City"
    />


<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeAddress(text)}
      value={Address}
      placeholder="Address"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeTNE(text)}
      value={TNE}
      placeholder="Total Number Employee"
      keyboardType="phone-pad"
    />

    
    
    
    <Text></Text>
    
    <Button
          title="Sign Up"
         

          onPress={submit}
        />
        <Text style={{textAlign:"center"}}
        
        onPress={() => props.navigation.navigate('Login')}
        >
          Sign In ?
        </Text>


        
          </View>
          </ScrollView>
         </View>
        
    </>
  );
};



export default Userregestration;


