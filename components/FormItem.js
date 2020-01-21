import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Field } from 'redux-form'
import { View } from 'react-native'


export default class FormItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            input: { value, onChange, name}
          } = this.props

        return (
            <View>
                <Input
                    {...this.props}
                    label={name.toUpperCase()}
                    placeholder={`Enter cat ${name}`}
                    onChangeText={v => onChange(v)}
                    errorStyle={{ color: 'red' }}
                    errorMessage={this.props.error === true ? `Enter a Valid ${name}` : ""}
                />
            </View>

        )
    }
}



