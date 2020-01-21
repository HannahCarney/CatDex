import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormItem from './FormItem'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

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

    checkIfCanSubmitForm(tempErrState, values) {
        //check if any errors
        let hasError = false;
        for (var key in tempErrState) {
            if (tempErrState[key] === true) {
                hasError = true;
                break;
            }
        };

        //no errors we can submit redux form
        if (!hasError) {
            this.props.onSubmitCallback(values);
        }
    }

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

        return (
            <View >
                {this.renderDynamicFields()}
                <TouchableOpacity onPress={handleSubmit(this.checkFormIsValid)}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default reduxForm({
    form: 'catForm' //add a name to redux form to fetch data later if needed
})(FormView)

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250
    },
    container: {

    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250
    }
})