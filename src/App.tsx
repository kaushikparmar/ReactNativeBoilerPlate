import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import store from './redux/store/rootStore';
import { Provider } from 'react-redux';
import { User } from './views/User';
import { View, Image } from 'react-native';
const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <View style={{backgroundColor:'#ddd'}}>
        <Image source={require('./assets/Logo.png')} style={{height:50, width:'100%'}} />
        </View>
        <User />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
