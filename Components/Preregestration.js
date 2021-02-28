import React from 'react';

import {Text,View,Button,Image} from 'react-native';

function Selects(props){


    return(
        <View style={{display:"flex",alignItems:"center",flex:1,width:"100%",  backgroundColor: '#fff',}}>
        <View  style={{display:"flex",alignItems:"center",flex:4,}} >
        
        
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/2226349/screenshots/14102700/educational-institution_4x.jpg',
          }}
          style={{ width: 300, height: 300 }}
        />
       
        


        </View>
        
        <View style={{ flex:5,width:"100%"}}>


            
            <Button title="Student" onPress={() => props.navigation.navigate('StudentRegestration')}/>

        
<Text></Text>
            <Button title="Company" onPress={() => props.navigation.navigate('ComapanyRegestration')} />

     
            

            </View>
        </View>
    )
}


export default Selects;



