import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Emoji from 'react-native-emoji';



export default class EmptyState extends React.Component {

    render() {
       
        return (
        <View style={styles.container}>
            <View style={[styles.cardview, styles.center]}>
                <Emoji name="crying_cat_face" style={{fontSize: 80}} />
                <Text> You have no cats! </Text>
            </View>
        </View>
        )
    }
}

//TODO duplicate create global stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    cardview: {
        backgroundColor: 'white',
        borderColor: '#000000',
        borderRadius: 8,
        borderWidth: 1,
        fontFamily: '',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    center: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});