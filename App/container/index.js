import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import configStore from '../config/metrics';
import Router from '../components/index';
import reducers from '../reducers/auth_reducer';


const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ReduxThunk));

class App extends Component {
   componentWillMount() {
   }


   render() {
        if (module.hot) {
          // Enable Webpack hot module replacement for reducers
          module.hot.accept('./reducers/index', () => {
            store.replaceReducer(reducers);
          });
        }
      
        

      return (
         <Provider store={store}>
            <Router />
         </Provider>
      );
   }
}

export default App;
