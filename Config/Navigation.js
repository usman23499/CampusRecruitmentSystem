// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../Components/login";
import Selects from "../Components/Preregestration";

import STURegestration from "../Components/Student/Resgestration";
import SHome from "../Components/Student/Home";


import COMRegestration from "../Components/Company/Resgestration";
import CHome from "../Components/Company/Home";
import Cinfo from "../Components/Student/Info";
import Sinfo from "../Components/Company/Info";

import AHome from "../Components/admin/home";
import SData from "../Components/admin/Studentdata";
import SAinfo from "../Components/admin//StudentInfo";
import CAdata from "../Components/admin/Companydata";
import CAinfo from "../Components/admin/Compnayinfo";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={Login}
       options={{
        headerShown: false
       }}
        />
        <Stack.Screen name="Selects" component={Selects} 
        
        options={{
          headerShown: false
         }}
        
        />

<Stack.Screen name="StudentRegestration" component={STURegestration} 
        options={{
            headerShown: false,
            
           }}
        />


<Stack.Screen 
        options={{
          headerLeft:false
        }}

        
        
        name="Student Home" component={SHome} />



<Stack.Screen name="ComapanyRegestration" component={COMRegestration} 
        options={{
            headerShown: false,
            
           }}
        />

<Stack.Screen 
        options={{
          headerLeft:false
        }}

        
        
        name="Company Home" component={CHome} />



{/* for student */}
<Stack.Screen 
        

        
        
        name="Company Info" component={Cinfo} />

{/* For Companay */}
<Stack.Screen 
        
        name="Student Info" component={Sinfo} />

<Stack.Screen 
        options={{
          headerLeft:false
        }}
        name="Admin Home" component={AHome} />


<Stack.Screen 
        
        name="Student Data Manage" component={SData} />


<Stack.Screen 
        
        name="Student Data Handle" component={SAinfo} />
        

      <Stack.Screen 
        
        name="Company Data Handle" component={CAdata} />
        

        <Stack.Screen 
        
        name="Company Info Handle" component={CAinfo} />


      </Stack.Navigator>




     




    </NavigationContainer>
  );
}

export default App;