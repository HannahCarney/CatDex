import React from 'react';
import { Button } from 'react-native';


export default class AddCats extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Cats"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }