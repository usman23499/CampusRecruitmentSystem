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
  const [names, onChangename] = React.useState("");

  const [Fname, onChangefname] = React.useState("");
  
  const [Pno, onChangePno] = React.useState("");
  const [City, onChangeCity] = React.useState("");
  const [EFM, onChangeEFM] = React.useState("");
  const [MP, onChangeMP] = React.useState("");
  const [MIM, onChangeMIM] = React.useState("");
  const [SC, onChangeSC] = React.useState("");
  const [MY, onChangeMY] = React.useState("");
  const [CN, onChangeCN] = React.useState("");
  const [EFC, onChangeEFC] = React.useState("");
  const [MIF, onChangeMIF] = React.useState("");
  const [MIS, onChangeMIS] = React.useState("");
  const [PIF, onChangePIF] = React.useState("");
  const [PIS, onChangePIS] = React.useState("");
  


const submit=()=>{

  if(value.length<1 || Pass.length <1 || names.length <1 
    || Pno.length <1 || Fname.length <1 || City.length <1
    || EFM.length <1  || MP.length <1 || MIM.length <1 
    || SC.length <1  || MY.length <1  || CN.length <1 
    || EFC.length <1 || MIF.length <1 || MIS.length <1
    || PIF.length <1 || PIS.length <1   ){

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

  database().ref('/').child('CRS/Company/').once('value',function(data){

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
   value,
   Pass,
   names,
   Fname,
   Pno,
   City,
   EFM,
   MP,
   MIM,
   SC,
   MY,
   CN,
   EFC,
   MIF,
   MIS,
   PIF,
   PIS,
   
  
  
  }

  var res = value.replace(".","");
  
  database().ref('/').child('CRS/Students/'+res).set(user)

  

  props.navigation.navigate('Student Home',{name:{names},email:{value}})
  



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
           STUDENT REGESTRATION
          </Text>

           </View>
         <ScrollView>
        <View style={{ width:"100%"}}>
       
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:320, padding:10,marginTop:10}}
      onChangeText={text => onChangename(text)}
      value={names}
      placeholder="Full Name"
    />

  
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:320, padding:10,marginTop:10}}
      onChangeText={text => onChangefname(text)}
      value={Fname}
      placeholder="Father Name"
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
      onChangeText={text => onChangeEFM(text)}
      value={EFM}
      placeholder="Education Filed In Matric (Science)"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeMP(text)}
      value={MP}
      placeholder="Matric Percentage"
      keyboardType="phone-pad"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeMIM(text)}
      value={MIM}
      placeholder="Marks in Matric(90/100)"
      keyboardType="phone-pad"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeSC(text)}
      value={SC}
      placeholder="School name"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeMY(text)}
      value={MY}
      placeholder="Matriculation year"
      keyboardType="phone-pad"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeCN(text)}
      value={CN}
      placeholder="College name"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeEFC(text)}
      value={EFC}
      placeholder="Education Filed In College"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeMIF(text)}
      value={MIF}
      placeholder="Marks in First Year(90/100)"
      keyboardType="phone-pad"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangeMIS(text)}
      value={MIS}
      placeholder="Marks in Second Year(90/100)"
      keyboardType="phone-pad"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangePIF(text)}
      value={PIF}
      placeholder="First Year Percentage"
      keyboardType="phone-pad"
    />
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10 }}
      onChangeText={text => onChangePIS(text)}
      value={PIS}
      placeholder="Second Year Percentage"
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


