import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, SafeAreaView, View, ImageBackground } from 'react-native';
import CatListItem from '../components/CatListItem'
import { deleteCat } from '../redux/actions/CatActions'
import { Icon } from 'react-native-elements'
import EmptyState from '../components/EmptyState'

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

  renderList() {
    let list = this.props.cats.current;
    if (list.length > 0) {
      return <FlatList
        data={list}
        renderItem={({ item, index }) => <CatListItem index={index} values={item} delete={id => this.deleteCat(id)}></CatListItem>}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    }
    else {
      return <EmptyState/>
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/cat-background.jpg')} style={{ width: '100%', height: '100%' }}>
          {this.renderList()}
          <View style={styles.buttonContainer}>
            <Icon
              raised
              reverse
              color='#147efb'
              name='add'
              size={32}
              onPress={() => navigate('AddCats')}
            />
          </View>
        </ImageBackground>
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
    bottom: "2%"

  }
});

const mapStateToProps = (state) => {
  const { cats } = state
  return { cats }
};

const mapDispatchToProps = { deleteCat }

export default connect(mapStateToProps, mapDispatchToProps)(Home);