import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, SafeAreaView, View } from 'react-native';
import CatListItem from '../components/CatListItem'
import { deleteCat } from '../redux/actions/CatActions'
import { Icon } from 'react-native-elements'


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'My Cats',
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
    <View style={styles.buttonContainer}>
     <Icon
         raised
         reverse
          style={styles.button}
          color='#0EBFE9'
          name='add'
          size={40}
          onPress={() => navigate('AddCats')}
        />
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  buttonContainer: {
  position: "absolute",
  right: "5%",
  bottom: "8%"

  }
});

const mapStateToProps = (state) => {
  const { cats } = state
  return { cats }
};

const mapDispatchToProps = { deleteCat }

export default connect(mapStateToProps, mapDispatchToProps)(Home);