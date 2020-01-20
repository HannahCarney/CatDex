import React from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions/CatActions';
import FormItem from '../components/FormItem';
import { Form, Control } from 'react-redux-form/native';
import FormView from '../components/FormView';

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

  updateInput = (input) => {
    this.setState({ input });
  };

  render() {
    return (
      <View>
        <FormView></FormView>

      </View>
    );
  }
}


const mapDispatchToProps = { addCat }

export default connect(
  null,
  mapDispatchToProps
)(AddCats)
