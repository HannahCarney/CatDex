import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from 'native-base';
import CatListItem from '../components/CatListItem'

//move into component


class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (

      <SafeAreaView style={styles.container}>

        <FlatList
          data={this.props.cats.current}
          renderItem={({ item, index }) => <CatListItem index={index} values={item}></CatListItem>}
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


export default connect(mapStateToProps, null)(Home);