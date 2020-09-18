
import React ,{Component} from 'react';
import {View,Text,Image,SafeAreaView, Dimensions,  TouchableOpacity} from 'react-native';
import Click from './src/image/Compononts/Button';
import Input from './src/image/Compononts/input';

const {width, height}= Dimensions.get('window')

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
          style={{width: width*0.6 ,height: height*0.2  }}
          ></Image>
        </View>

        <View style= {{flex: 3 ,alignItems: "center"}}>
          
          <Input 
             placeholder={' Phone number, username or e-mail'}
             //keyboardType= {'email-address'}  
          />

          <Input  
             placeholder={' Password'} 
             secureTextEntry 
             //keyboardType= {'numeric'}
           />
           <View style={{flexDirection: "row" , width: width*0.9}}>
             <View style={{flexDirection: "row",marginBottom: 10}}
             >
               <TouchableOpacity
                 
                 style={{

                    width: 20,
                    height: 20,
                    backgroundColor: 'white',
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginRight: 10,
                    marginLeft:10              
                    
                 }}
               
               />

              
               <Text> Hide Password</Text>
             </View>
             <TouchableOpacity>

                <Text style= {[styles.signUp,{marginLeft:100}] }>  Forgot Password </Text>
            </TouchableOpacity>            
           </View>
           
           <Click text= 'Login'/>

           <View style={{flexDirection: 'row',marginTop:30, alignItems: 'center'}}> 
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