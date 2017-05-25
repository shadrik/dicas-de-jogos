<View style={styles.container}>
        <Text style={styles.paragraph}>
          Tela de principal "dicas de jogos"como jogar blood strike e ser um profissional no blood.
          
        </Text>
        
        <Button
          title="1-Entre no jogo"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="2-Clique numa sala"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="3-Aperte para jogar"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="4-e voce esta no jogo"
          onPress={this._handleButtonPress}
        />
      <Text>Obs as outras dicas vai tar no meu canal.Inscreva-se! </Text>
      
      </View>
      
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

