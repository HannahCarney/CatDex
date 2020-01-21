
import React from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import globalstyles from '../globalStyleSheet'


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
            <View style={globalstyles.cardview}>
                <View style={styles.mainRow}>
                    <View style={globalstyles.column}>
                        <View style={globalstyles.row}>
                            <FontAwesome5 style={styles.padding} name="cat" />
                            <Text style={styles.padding} >Name:</Text>
                            <Text style={[styles.title, globalstyles.text]}>{values.name}</Text>
                        </View>
                        <View style={globalstyles.row}>
                            <FontAwesome5 style={styles.padding} name="paw" />
                            <Text style={styles.padding} >Breed:</Text>
                            <Text style={[styles.title, globalstyles.text]}>{values.breed}</Text>
                        </View>
                    </View>
                    <Icon
                        name='trash'
                        type='font-awesome'
                        style={styles.column}
                        onPress={() => {  this.alert(values) }} />
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
  
    padding: {
        paddingRight: 3
    },
    title: {
        fontSize: 20,
    },
    image: {
        width: "100%",
        height: 300,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth:1
    },
    mainRow: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    closeButton: {
        position: 'relative',
        right: 0,
        top: 0
    }
});

