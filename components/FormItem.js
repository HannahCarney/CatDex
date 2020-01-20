import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Field } from 'redux-form'
import { View } from 'react-native'


export default class FormItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: false };
    }

    checkIsValid = (value) => {
        // Check form item is valid
        // Can update props here to include type of Error for more information
        if (value && value.length > 0) {
            this.state.error = true;
        }
        return this.state.error = false;
    };

    render() {
        const {
            input: { value, onChange, name, label }
          } = this.props
        return (
            <View>
                <Input
                    {...this.props}
                    label={name.toUpperCase()}
                    placeholder={`Enter cat ${name}`}
                    errorStyle={{ color: 'red' }}
                    onChangeText={v => onChange(v)} 
                    errorMessage={this.state.error ? `Enter a Valid ${label}` : ""}
                />
            </View>

        )
    }
}



