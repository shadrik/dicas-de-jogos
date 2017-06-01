import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <Image source={{uri: 'http://img.ibxk.com.br/2015/12/11/11135313969498.jpg'}} style={styles.container}>
        <Text style={styles.paragraph}>
          Tela de principal "dicas de jogos"como jogar blood strike e ser um profissional no blood.
          
        </Text>
        
        <Button
          title="1-Faça uma conta no Facebook ou na nossa pagina"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="2-entre no jogo"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="3-entre numa sala"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="4-Aperte para jogar"
          onPress={this._handleButtonPress}
          />
          
      <Button
        title="5-e voce esta jogando"
        onPress={this._handleButtonPress}
      />
    
      <Text>Obs: as outras dicas vai tar no meu canal.Inscreva-se! </Text>
      
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
