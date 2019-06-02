import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import color from '../color'
import { Button, Input } from 'react-native-elements';

const WIDTH = Dimensions.get("screen").width
const HEITGH = Dimensions.get("screen").height

export default class InputCustom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder:""
        }
    }
  render() {
    return (
        <Input label={this.props.placeholder}
        labelStyle={{color:color.white}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.green01,
  },
});
