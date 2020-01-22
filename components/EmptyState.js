import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import globalstyles from '../globalStyleSheet';
import Emoji from 'react-native-emoji';

export default class EmptyState extends React.Component {

    render() {
       
        return (
        <View style={styles.container}>
            <View style={[globalstyles.cardview, styles.center]}>
                <Emoji name="crying_cat_face" style={{fontSize: 80}} />
                <Text> You have no cats! </Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    center: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});