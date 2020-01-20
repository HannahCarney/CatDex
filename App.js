import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import catReducer from './redux/reducers/CatReducer';

const store = createStore(
  catReducer
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <AppNavigator />
      </Provider>
    );
  }
}