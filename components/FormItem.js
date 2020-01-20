import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        return (
            <Input
                {...this.props}
             
                errorStyle={{ color: 'red' }}
                onChangeText={value => this.checkIsValid(value)}
                errorMessage={this.state.error ? `Enter a Valid ${this.props.label}`: ""}
            />
        )
    }
}

//   leftIcon={
//     <Icon
//     {...this.props}
//     color='black'
// />}