import React from 'react';
import { Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native'

export default class FormItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            input: { onChange, name}
          } = this.props

        return (
            <View style={styles.padding}>
                <Input
                    multiline
                    {...this.props}
                    label={name.toUpperCase()}
                    placeholder={`Enter cat ${name}`}
                    onChangeText={v => onChange(v)}
                    errorStyle={{ color: 'red' }}
                    errorMessage={this.props.error === true ? `Enter a valid ${name}` : ""}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
   padding: {
       paddingTop: 10
   }
})



