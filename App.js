import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Rotas from './src/Rotas';
import reducers from './src/reducers/index';

import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAFn-kqs3bYBW251w6HrGZBvtuRTOfqzQk",
      authDomain: "whatappclone-ac5c1.firebaseapp.com",
      databaseURL: "https://whatappclone-ac5c1.firebaseio.com",
      projectId: "whatappclone-ac5c1",
      storageBucket: "whatappclone-ac5c1.appspot.com",
      messagingSenderId: "269692871941"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Rotas />
      </Provider>
    );
  }
}