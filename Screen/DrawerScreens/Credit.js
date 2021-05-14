
import React, { Component } from 'react';
import {StyleSheet,
    TextInput,
    View,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

var  currentCredit = "";
var uID ="";
const readData = async () => {
  uID = await AsyncStorage.getItem('user_id')
  currentCredit = await AsyncStorage.getItem('user_firstname')

}
let jetonb = "";

export class CreditScreen extends Component  {
    
    
    componentDidMount(){
        readData();
        this.mentorget();
        
      }
      mentorget(){
        fetch('https://kguproject.herokuapp.com/api/users/'+uID)
        .then((response) => response.json())
        .then((responseJson) => {
            jetonb = (responseJson.user.current_jeton)
            console.log(jetonb);
            
            
         })
         
         .catch((error) => {
           console.error(error);
         });
      }
    
   
      
      
 render(){   
   
    console.log(jetonb);
  return (
    
    <SafeAreaView style={{flex: 1}}>
        
      <View style={{flex: 1, padding: 16}}>
      <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <Text
                style={styles.inputStyle}
                
              >{"mevcut krediniz = "+/}</Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Miktar örn(45)" //abc@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
               
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
              <Text style={styles.buttonTextStyle}>Kredi Al</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );}
}; 

export default CreditScreen;
const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignContent: 'center',
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#4f46e5',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'grey',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    registerTextStyle: {
      color: 'grey',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
  });
  