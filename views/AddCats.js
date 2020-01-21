import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions/CatActions';

import FormView from '../components/FormView';

class AddCats extends React.Component {

  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Add a Cat',
  };

  addCat = (values) => {
    this.props.addCat(values);
  };

  render() {
    return (
      <View>
        <FormView onSubmitCallback={ values => this.addCat(values)}></FormView>
      </View>
    );
  }
}

const mapDispatchToProps = { addCat }

export default connect(
  null,
  mapDispatchToProps
)(AddCats)
