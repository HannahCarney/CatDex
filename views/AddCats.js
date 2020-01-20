import React from 'react';
import { Button, View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions/CatActions';


 class AddCats extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
    static navigationOptions = {
      title: 'Home',
    };
   
    addCat = () => {
      this.props.addCat(this.state.input);
      this.setState({ input: "" });
    };

    updateInput = input => {
      this.setState({ input });
    };

    render() {
        return (
       <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.updateInput(text)}
          value={this.state.input}
          editable
          maxLength={40}
        />
        <Button
          title="Add Cat"
          onPress={() => this.addCat}
        />
       </View>
      );
    }
  }

  const mapStateToProps = state => ({ current: state.current })

  const mapDispatchToProps = { addCat }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddCats)
