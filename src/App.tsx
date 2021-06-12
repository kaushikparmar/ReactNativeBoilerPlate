import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import store from './redux/store/rootStore';
import { Provider } from 'react-redux';
import { User } from './views/User';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <User />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
