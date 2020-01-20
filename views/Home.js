import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

function Item({ values, index }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{values.name}</Text>
      <Text style={styles.title}>{values.breed}</Text>
    </View>
  );
}

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
          renderItem={({ item, index }) => <Item index={index} values={item} />}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />

        <Button
          title="Go to Cats"
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const mapStateToProps = (state) => {
  const { cats } = state
  return { cats }
};


export default connect(mapStateToProps, null)(Home);