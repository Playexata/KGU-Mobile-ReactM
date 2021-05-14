
import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
var  uName = "";
var  uLName = "";


import AsyncStorage from '@react-native-community/async-storage';
const readData = async () => {
  const userId = await AsyncStorage.getItem('user_id')
  uName = await AsyncStorage.getItem('user_firstname')
  uLName =await AsyncStorage.getItem('user_lastname')
  


}
const CustomSidebarMenu = (props) => {
  
  readData();
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {uName.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>{"Merhaba "+ uName}</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => <Text style={{color: '#d8d8d8'}}>Çıkış Yap</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Çıkış Yap',
              'Çıkış yapmak istediğinize emin misiniz_',
              [
                {
                  text: 'İptal',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Çıkış yap!',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
