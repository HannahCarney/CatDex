import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions/CatActions';

import FormView from '../components/FormView';

class AddCats extends React.Component {

  constructor(props) {
    super(props);
  }


  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add a cat",
      headerLeft: () => null,
      headerRight: () => (
        <Button
          title="Cancel"
          color="#147efb"
          onPress={() => navigation.goBack()}
        />
      ),
    }
  };


  addCat = (values) => {
    this.props.addCat(values);
  };

  render() {
    return (
      <View>
        <FormView onSubmitCallback={values => this.addCat(values)}></FormView>
      </View>
    );
  }
}

const mapDispatchToProps = { addCat }

export default connect(
  null,
  mapDispatchToProps
)(AddCats)
