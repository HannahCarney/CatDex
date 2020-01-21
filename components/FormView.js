import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormItem from './FormItem'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import globalstyles from '../globalStyleSheet'


import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class FormView extends React.Component {

    constructor(props) {
        super(props);
        //TODO get this from mockDB dynamically
        this.state = { fieldTypes: ['name', 'breed'], error: {} };
    }

    checkFormIsValid = (values) => {
        // Check form item is valid
        let tempErrState = {};
        this.state.fieldTypes.forEach(item => {
            let value = values[item];
            if (!value || value.length === 0) {
                tempErrState[item] = true
            }
            else {
                tempErrState[item] = false
            }
        });
        //triggers UI update
        this.setState({
            error: tempErrState
        });
        this.checkIfCanSubmitForm(tempErrState, values);
    };

    //TODO move this into API folder
    generateCatPicture(values) {
        return fetch('https://api.thecatapi.com/v1/images/search?limit=1?')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson[0]) {
                    //successfully gotten a cat pic we can now trigger callback
                    values.uri = responseJson[0].url
                    this.props.onSubmitCallback(values);
                }
                else {
                    //TODO add error message here so user can retrigger
                    console.error(error);
                }
            })
            .catch((error) => {
                //TODO add error message here so user can retrigger
                console.error(error);
            });
    }

    checkIfCanSubmitForm(tempErrState, values) {
        //check if any errors
        let hasError = false;
        for (var key in tempErrState) {
            if (tempErrState[key] === true) {
                hasError = true;
                break;
            }
        };

        //no errors we can submit redux form - yay!
        if (!hasError) {
            this.generateCatPicture(values);
        }
    }

    //This was done in case I wanted to quickly add more cat-egories 
    renderDynamicFields() {
        let items = [];
        this.state.fieldTypes.forEach(e => {
            items.push(<Field
                key={e}
                name={e}
                error={this.state.error[e]}
                component={FormItem}
            />)
        });
        return items;
    }

    render() {
        const { handleSubmit } = this.props
        //TODO can this be a button?
        return (
            <View style={[globalstyles.cardview, styles.cardview]}>
                {this.renderDynamicFields()}
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={[globalstyles.row, globalstyles.button]} onPress={handleSubmit(this.checkFormIsValid)}>
                        <Text style={styles.text}>Submit</Text>
                        <FontAwesome5 style={styles.icon} name="cat" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default reduxForm({
    form: 'catForm' //add a name to redux form to fetch data later if needed
})(FormView)

const styles = StyleSheet.create({
    cardview: {
        height: '50%',
    },
    icon: {
        paddingLeft: 5,
        fontSize: 20
    },
    buttoncontainer: {
        flex:1,
        justifyContent:"flex-end"
    },
    text: {
        color: 'black',
        height: '100%',
        fontSize: 24
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250
    }
})