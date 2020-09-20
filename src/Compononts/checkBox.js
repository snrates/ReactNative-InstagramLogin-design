import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

const Check = (props) => (

    <View style={{flexDirection: "row",marginBottom: 10}} >
    
      <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.5}
            style={{
              borderRadius: 35,
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              marginRight: 10,
              marginLeft: 1 ,
              alignItems: 'center',
              justifyContent: 'center'   
           }}>
     
           { props.status &&   <View style={{
               
               width: 15,
               height: 15,
               backgroundColor: 'blue',
               borderRadius: 4,
               borderRadius: 35

               }}/>  }
                 
        </TouchableOpacity> 
               
       <Text> {props.text}</Text>
    </View>
);

export default Check;
