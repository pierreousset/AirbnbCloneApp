import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import color from '../color'
import { Button } from 'react-native-elements';
import InputCustom from './../components/Input'

const WIDTH = Dimensions.get("screen").width
const HEITGH = Dimensions.get("screen").height

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={{flex:1, justifyContent:'center'}}>
            <Text style={{fontSize:30, marginLeft: 30, color:color.white}}>Login</Text>
        </View>
        <View style={{flex:3, justifyContent:'center'}}>
          <View>
            <InputCustom placeholder="Username"/>
          </View>
          <View style={{marginTop: 30,}}>
            <InputCustom placeholder="Password"/>
          </View>
          <View style={{marginTop: 30, alignItems:'center',}}>
            <Button
                title="Connexion"
                containerStyle={{width:WIDTH - 80}}
                buttonStyle={{borderColor: color.white, backgroundColor:'transparent', borderRadius:40}}
                textStyle={{color:color.white}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.green01,
  },
});
