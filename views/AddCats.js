import React from 'react';
import { Button, ImageBackground, StyleSheet } from 'react-native';
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
      )
    }
  };

  addCat = (values) => {
    this.props.addCat(values);
  };

  render() {
    return (
      <ImageBackground source={require('../assets/cat-background.jpg')} style={styles.formContainer}>
        <FormView onSubmitCallback={values => this.addCat(values)}></FormView>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = { addCat }

export default connect(
  null,
  mapDispatchToProps
)(AddCats)

const styles = StyleSheet.create({
  formContainer: {
     width: '100%',
     height: '100%',
     justifyContent: 'center'
  }
})
