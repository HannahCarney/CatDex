
import React from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default class FormItem extends React.Component {

    //Alert for deleting cat
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
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text>Name:</Text>
                        <Text style={styles.title}>{values.name}</Text>
                        <Text>Breed:</Text>
                        <Text style={styles.title}>{values.breed}</Text>
                    </View>
                    <Icon name='trash'
                        type='font-awesome'
                        size={40}
                        style={styles.column}
                        onPress={() => { this.alert(values) }} />
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: values.uri }}
                />

            </View>
        );
    };
};

const styles = StyleSheet.create({
    image: {
        width: "100%", height: 300
    },
    container: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    closeButton: {
        position: 'relative',
        right: 0,
        top: 0
    }
});

