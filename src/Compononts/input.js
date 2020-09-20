import React from 'react';
import {TextInput, Dimensions,} from 'react-native';

const {width , height}= Dimensions.get('window')

const Input = (props) => (
    
    <TextInput
        placeholder= {props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType= {props.keyboardType}
        value={props.value}   
        onChangeText={(value) => props.onChangeText(value)}
        style={{ 
            width: width*0.92, height: height*0.08, borderRadius: 8 , 
            backgroundColor:'#e3dfde',borderColor: 'gray',
            padding: 10,marginBottom: height*0.02,
            borderWidth: 0.8}}
    />
    
);
export default Input;
