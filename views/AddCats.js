import React from 'react';
import { Button } from 'react-native';

 class AddCats extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Add Cat"
          onPress={() => navigate('AddCats')}
        />
      );
    }
  }

  export default AddCats