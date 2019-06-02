import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import color from '../color'
import { Button } from 'react-native-elements';

const WIDTH = Dimensions.get("screen").width

export default class LoggedOut extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
            source={require('../../assets/airbnb-logo.png')}
            style={{width:160, height:70, marginTop: 35, alignItems:'center'}}/>
        <Text style={{color:color.white, fontSize:30, marginTop: 10}}>Bienvenue</Text>
        <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
            <Button
                title="Création utilisateur"
                //type="outline"
                containerStyle={{width:WIDTH - 80}}
                buttonStyle={{borderColor: color.white, backgroundColor:'transparent', borderRadius:40}}
                textStyle={{color:color.white}}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: color.green01,
  },
});
