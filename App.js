import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ThongTin from './Screen/ThongTin';
import QuanLy from './Screen/QuanLy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Home = (props) => {
  const nav = props.navigation;
  return (<View>

     


    <View style={styles.btn}>
      <Button title='Thông tin'
        onPress={() => nav.navigate('ThongTin')}
      />
    </View>
  </View>)
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='QuanLy' component={QuanLy} />
        <Stack.Screen
          name='Home' component={Home} />
        <Stack.Screen
          name='ThongTin' component={ThongTin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  btn:{
    alignContent:'center',
    justifyContent:'center',
    width:390,
    padding:15,
    paddingBottom:15,
    
  }
});
export default App;
