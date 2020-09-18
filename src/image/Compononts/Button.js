import React from 'react';
import { Text ,TouchableOpacity,Dimensions} from 'react-native';
const {width , height}= Dimensions.get('window')

const Click = (props) =>  (
    <TouchableOpacity

         onPress={ ()  =>{

         }}
         style={{
             alignItems: "center" ,
           justifyContent: "center",
           backgroundColor: "blue",
           
           width: width*0.9 , 
           height:height*0.08, 
           borderRadius: 15,
        }}>

       <Text
       style={{
         fontSize: width*0.04,
         color:"white"}}> {props.text}</Text>

   </TouchableOpacity>        

);
export default Click;