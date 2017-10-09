import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './combineReducers';
import Router from './router';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const configs = {
   apiKey: 'AIzaSyBiQ28zeZyRJrJVWEmgsQjaOljOsc20q5U',
   authDomaine: 'story-dev.firebaseapp.com/',
   databaseURL: 'https://story-dev.firebaseio.com/'
};
class App extends Component {

   componentWillMount() {
      firebase.initializeApp(configs)
   }
   render() {
      
      return (
         <Provider store={store}>
            <Router />
         </Provider>
      );
   }
}

export default App;
