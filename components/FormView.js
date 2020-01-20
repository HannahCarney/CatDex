import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormItem from './FormItem'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

class FormView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: false };
    }

    render() {
        const { handleSubmit, onSubmitCallback } = this.props

        //Refactor using a Form element?
        return (
            <View >
                <Field
                    name='name'
                    component={FormItem} />
                 <Field
                    name='breed'
                    component={FormItem} />
                <TouchableOpacity onPress={handleSubmit(onSubmitCallback)}>
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