import React from 'react';
import { connect } from 'react-redux';
import { Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import CatListItem from '../components/CatListItem'
import { deleteCat } from '../redux/actions/CatActions'


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };

  deleteCat = (id) => {
    this.props.deleteCat(id);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

      <SafeAreaView style={styles.container}>

        <FlatList
          data={this.props.cats.current}
          renderItem={({ item, index }) => <CatListItem index={index} values={item} delete={id => this.deleteCat(id)}></CatListItem>}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />

        <Button
          title="Add Cat"
          onPress={() => navigate('AddCats')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  }
});

const mapStateToProps = (state) => {
  const { cats } = state
  return { cats }
};

const mapDispatchToProps = { deleteCat }

export default connect(mapStateToProps, mapDispatchToProps)(Home);