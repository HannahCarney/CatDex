import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

const renderInput = ({ input: { onChange, ...restInput } }) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

class FormView extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.hannah.toString())
        this.state = { error: false };
    }

     submit = values => {
        console.log('submitting form', values)
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <View >
                <Text>Name:</Text>
                <Field name="name" component={renderInput} />
                <TouchableOpacity onPress={handleSubmit(this.props.hannah)}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default reduxForm({
    form: 'test'
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