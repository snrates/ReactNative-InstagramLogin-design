
import React ,{Component} from 'react';
import {View,Text,Image,SafeAreaView, TextInput, Button, ImageBackground} from 'react-native';
import Input from './src/image/Compononts/input';

export default class App extends Component {
  
  render() {
     
    return(

      <SafeAreaView 
      style={{ 
        flex: 1
      }}
      >
        <View style= {[styles.container,{flex: 2}]}>
          < Image 
          source={require('./src/image/logo.png')}
          style={{width: 210 ,height:100  }}
          ></Image>
        </View>

        <View style= {{flex: 3, alignItems: "center"}}>
          
          <Input placeholder={' Phone number, username or e-mail'}/>
          <Input placeholder={' Password'}  secureTextEntry 
           />
     
        </View>


        <View style= {[styles.container,{flex: 1,flexDirection: 'row'}]}> 
        <Image
            source={require('./src/image/facelogo.png')} 
            style={styles.faceItem}>
            </Image> 
            <Text style= {styles.signUp }> 
             Log In With Facebook</Text>
         </View>


        <View style= {[styles.signUptop,{flex: 0.5}]}>

             <Text style= {{ 
               fontSize: 15 ,
               color: "gray"
            }}> Don't have an account?
              <Text style= {styles.signUp }>   Sign Up</Text>
              </Text>
        </View>
        
      
      </SafeAreaView>
    )
  }
}


const styles={
  faceItem: {alignItems: 'center',width:30,height:30},
  container: { alignItems: "center" , justifyContent: "center" },
  signUp: {color: "blue", fontWeight: "bold"},
  signUptop: { alignItems: "center",
  justifyContent: "center",borderTopWidth: 1 ,borderTopColor: "gray" },
}