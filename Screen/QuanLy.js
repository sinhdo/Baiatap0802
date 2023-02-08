import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Modal, TextInput, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThongTin from '../Screen/ThongTin'
import App from '../App';


// const Stack = createNativeStackNavigator();


const QuanLy = (props) => {

  

  const nav = props.navigation;
  const route=  props.route;
  const TenAbout = route.params?.ten;
  const TuoiTuAbout = route.params?.tuoi;
  const DcAbout = route.params?.dc;
  const SdtAbout = route.params?.sdt;
  const Emailbout = route.params?.email;
  const tt= 2;
  console.log(TenAbout+TuoiTuAbout);

  const [name, setName] = useState(TenAbout);
const [number, setNumber] = useState(SdtAbout);
const [address, setAdress] = useState(DcAbout);
const [emails ,setEmails] = useState(Emailbout);
const [age, setAge] = useState(TuoiTuAbout);

  return (
    <View>
      <Text>{TenAbout}+{TuoiTuAbout}</Text>
      <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder='Tên'/>
      <TextInput value={age} onChangeText={(text)=>setAge(text)} placeholder='Tuổi' keyboardType='numeric'/>
      <TextInput value={address} onChangeText={(text)=>setAdress(text)} placeholder='Địa chỉ'/>
      <TextInput value={emails} onChangeText={(text)=>setEmails(text)} placeholder='Email'/>
      <TextInput value={number} onChangeText={(text)=>setNumber(text)} placeholder='SĐT'/>
      <Button title='Lưu'
       onPress={() => nav.navigate('ThongTin',{name,age,address,emails,number,tt:2})}
      />
      <Button title='Huỷ'
      onPress={() => nav.navigate('Home')}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  ds: {
    textAlign: 'right'

  }
})
export default QuanLy;
