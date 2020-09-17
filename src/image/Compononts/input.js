import React from 'react';
import {TextInput} from 'react-native';

const Input = (props) => (
    
    <TextInput
        placeholder= {props.placeholder}
        secureTextEntry={props.secureTextEntry}
    
        style={[{ width:340,height: 60, borderRadius: 8, 
            backgroundColor:'#e3dfde',borderColor: 'gray',padding: 10,marginBottom: 15,
            borderWidth: 0.8 }, props.style]}
    />
    
);
export default Input;
