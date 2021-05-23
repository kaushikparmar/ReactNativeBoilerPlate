import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import store from './redux/store/rootStore';
import { Provider } from 'react-redux';
import { User } from './views/User';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View style={{
            flex: 1,
            flexDirection: 'column',
          }}>
            <User />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
