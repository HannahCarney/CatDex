
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Icon } from 'native-base';


export default class FormItem extends React.Component {

    alert = (values) => {
        console.log(values);
        Alert.alert(
            `Delete ${values.name}`,
            `Are you sure?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        var id = values.id;
                        this.props.delete(id)
                    }
                },
            ],
            { cancelable: true },
        );
    }

    render() {
        const values = this.props.values;
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{values.name}</Text>
                <Text style={styles.title}>{values.breed}</Text>
                <Icon name='md-close-circle-outline'
                    style={styles.closeButton}
                    onPress={() =>  { this.alert(values) }} />
            </View>
        );
    };
};

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
    closeButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0
    }
});

