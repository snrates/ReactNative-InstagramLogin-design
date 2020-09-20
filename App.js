
import React ,{Component} from 'react';
import {View,Text,Image,SafeAreaView, Dimensions,  TouchableOpacity, ScrollView} from 'react-native';
import Click from './src/Compononts/Button';
import Check from './src/Compononts/checkBox';
import Input from './src/Compononts/input';

const {width, height}= Dimensions.get('window')

export default class App extends Component {

  state={
    username: '',
    password: '',
    isShowPassword: false
  }

  /*shouldComponentUpdate(nextProps,nextStade){
    if(this.state.username != nextStade.username){
      return true
    }
    return false
  }*/
  render() {

    const { 
      
      username,
      
      password,

      isShowPassword

    } = this.state

    return(
    
      <SafeAreaView style={{ flex: 1}}>

        <ScrollView contentContainerStyle={{flex:1}}>

        <View style= {[styles.container,{flex: 2}]}>
          < Image 
          source={require('./src/image/logo.png')}
          style={{width: width*0.6 ,height: height*0.2  }}
          ></Image>
        </View>

        <View style= {{flex: 3 ,alignItems: "center"}}>
          
          <Input 
             placeholder={' Phone number, username or e-mail'}
             value={username}
             onChangeText={(username) => this.setState({ username})}
             //keyboardType= {'email-address'}  
          />

          <Input  
             placeholder={' Password'} 
             secureTextEntry={!isShowPassword}
             value={password}
             onChangeText={(password) => this.setState({password})}
             //keyboardType= {'numeric'}
           />
           
           <View style={{flexDirection: "row" , width: width*0.9}}>
             
           <Check
              text= 'Hide Password'
              status ={isShowPassword}
              onPress= {()=> this.setState({isShowPassword: !isShowPassword})}
           />

            


             <TouchableOpacity>

                <Text style= {[styles.signUp,{marginLeft:120}] }>  Forgot Password </Text>
            </TouchableOpacity>            
           </View>
           
           <Click 
           onPress={()=>{
            console.log('',this.state.username, '',this.state.password); 
           }          
          }
           text= 'Login'
           />

           <View  style={{flexDirection: 'row',marginTop:30, alignItems: 'center'}}> 
              <View style={styles.line}></View>
                
                <Text style={{color: 'gray', fontWeight: 'bold'}}> OR </Text>
                
                <View style={styles.line}></View>
           
            </View>  
         
           
      
     
        </View>


        <TouchableOpacity style= {[styles.container,{flex: 1,flexDirection: 'row'}]}> 
        <Image
            source={require('./src/image/facelogo.png')} 
            style={styles.faceItem}>
            </Image> 
            <Text style= {styles.signUp }> 
             Log In With Facebook</Text>
         </TouchableOpacity>


        <View style= {[styles.signUptop,{flex: 0.5,flexDirection: 'row'}]}>
     
             <Text style= {{ 
               fontSize: height*0.025 ,
               color: "gray"
            }}> Don't have an account?</Text> 
            
              <Text style= {styles.signUp }>   Sign Up</Text> 
                          
        </View>
        
        </ScrollView>
      </SafeAreaView>
    
    )
  }
}


const styles={
  faceItem: {alignItems: 'center', width: width*0.07, height: height*0.04},
  container: { alignItems: "center" , justifyContent: "center" },
  signUp: {color: "blue", fontWeight: "bold"},
  line: {width: width*0.4,height: height*0.001,backgroundColor:'black'},
  signUptop: { alignItems: "center",
  justifyContent: "center",borderTopWidth: 2 ,borderTopColor: "gray" },
}