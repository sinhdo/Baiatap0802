import React from 'react';
import { View, Text ,Image,StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import QuanLy from '../Screen/QuanLy';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ThongTin = (props) => {
  
  const nav = props.navigation;

  const route=  props.route;
  const TenQuanLY = route.params?.name;
  const TuoiTuQuanLy = route.params?.gae;
  const DcQuanLy = route.params?.address;
  const SdtQuanLy = route.params?.number;
  const EmailQuanLy = route.params?.emails;
  //  trth = route.params?.tt;
  //  setTT(trth);

  console.log(TenQuanLY,TuoiTuQuanLy,DcQuanLy,SdtQuanLy,EmailQuanLy);
  
  const ten='Đỗ Trường SInh';
  const tuoi = 20;
  const sdt = '0337785538';
  const dc = 'Thái Bình';
  const email = 'sinhdtph27866';
 

  return (
    <View>
     
      <Image source={
    { uri: 'https://fastly.picsum.photos/id/440/200/200.jpg?hmac=KgupVeawJx9jCsstx3Ei3_HPctuUXH5wRAj9paxZ41U' }
    // require('../../../assets/icon.png')
  }
  style={styles.productImage}
/>
     <View style={styles.info}>
     <Text>Họ tên: {ten}</Text>
      <Text>Tuổi : {tuoi}</Text>
      <Text>SĐT : {sdt}</Text>
      <Text>Địa chỉ : {dc}</Text>
      <Text>Email : {email}</Text>
     </View>
      <Button title='Chỉnh sửa'
     onPress={() => nav.navigate('QuanLy',{ten,tuoi,sdt,dc,email})}/>
    </View>
  )
}
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='ThongTin'>
//         <Stack.Screen
//           name='QuanLy' component={QuanLy} />
//         <Stack.Screen
//           name='ThongTin' component={ThongTin} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  productImage: {
    width: 70,
    height: 70,
    marginLeft: 160,
    marginTop: 15,
    marginBottom: 15,
  },
  info:{
    width:300,
   backgroundColor:'red',
   color:'yellow',
    fontSize:30,
    justifyContent:'center',
    textAlign:'center' ,
    marginBottom:10,
    marginLeft:30,
    padding:5,
  },
  productImage: {
    width: 70,
    height: 70,
    marginLeft: 160,
    marginTop: 15,
    marginBottom: 15,


  },
});

export default ThongTin;
