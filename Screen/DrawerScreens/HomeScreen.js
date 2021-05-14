
import React, { Component } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AppBodyData from './appBodyData';
import AsyncStorage from '@react-native-community/async-storage';


export class HomeScreen extends Component  {
  constructor(){
    super()
    this.state ={
        data:[]
    }
  
  }
  mentorget(){
    fetch('https://kguproject.herokuapp.com/api/mentors/all-mentors')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson.mentors});
     })
     
     .catch((error) => {
       console.error(error);
     });
  }
  componentDidMount(){
    this.mentorget();
  }
    
 render(){   
  return (

    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
      <AppBodyData data = {this.state.data}/>
      </View>
    </SafeAreaView>
  );}
}; 

export default HomeScreen;
