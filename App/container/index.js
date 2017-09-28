import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/auth_reducer';
import Router from '../components/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
   componentWillMount() {
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
