import React from 'react';
import { Button, View } from 'react-native';
import { Form, Control } from 'react-redux-form/lib/native';
import FormItem from './FormItem'

export default class ReduxForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: false };
    }
    render() {
        return (
           
            <Form model="form" onSubmit={(vals) => console.log(vals)}>

                <FormItem label='Name'
                    placeholder='Enter cat name'
                    name='paw'
                    size={24}
                ></FormItem>              
              <Button title="button" onPress={() => dispatch(actions.submit('form'))} />
            </Form>
        );
    }
}
