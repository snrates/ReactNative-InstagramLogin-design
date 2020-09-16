

import React from 'react';
import {View,Text } from 'react-native';



const App: () => React$Node = () => {

  const getFullName= (bir,iki,uc) => {

    return bir + "   " + iki + "   " + uc ;
  }
  return (

    <View style={{
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',      
     }}>
          <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            textShadowColor: 'blue',
            Colors: 'blue'
          }}> I am {getFullName("ali", "veli", "Kırkdokuzelli")} ATEŞ</Text>
         <Yaz/>
          

    </View>
   
  );
}

const Yaz = () => {
 
  return(
      
    <View>
       
       <Text>Welcome!</Text>
    </View>

  );

}
export default App;
