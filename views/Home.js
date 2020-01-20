import React from 'react';
import { Button } from 'react-native';


export default class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Cats"
          onPress={() => navigate('AddCats')}
        />
      );
    }
  }