import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormItem from './FormItem'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import globalstyles from '../globalStyleSheet'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { InitialState } from '../redux/catJson.js';

class FormView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: {} };
    }

    checkFormIsValid = (values) => {
        // Check form item is valid
        let tempErrState = {};
         InitialState.fieldTypes.forEach(item => {
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
        InitialState.fieldTypes.forEach(e => {
            items.push(<Field
                key={e}
                name={e}
                error={this.state.error[e]}
                component={FormItem}
                fieldTypes={InitialState.fieldTypes}
            />)
        });
        return items;
    }

    render() {
        const { handleSubmit } = this.props
        //TODO can this be a button?
        return (
            <ScrollView  contentContainerStyle={styles.scrollView} style={[globalstyles.cardview, styles.cardview]}>
                {this.renderDynamicFields()}
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={[globalstyles.row, globalstyles.button]} onPress={handleSubmit(this.checkFormIsValid)}>
                        <Text style={[globalstyles.text, styles.text]}>Submit</Text>
                        <FontAwesome5 style={styles.icon} name="cat" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default reduxForm({
    form: 'catForm' //add a name to redux form to fetch data later if needed
})(FormView)

const styles = StyleSheet.create({
    cardview: {
        maxHeight: 400
    },
    scrollView: {
        paddingBottom: 30,
        flexGrow: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between',
    },
    icon: {
        paddingLeft: 5,
        fontSize: 20
    },
    buttoncontainer: {
        paddingTop: 10,
        flexGrow:1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    text: {
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