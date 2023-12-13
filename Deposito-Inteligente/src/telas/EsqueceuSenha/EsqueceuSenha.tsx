import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import httpService from '../../../httpService';
import styles from './Styles';

export const EsqueceuSenha = () => {
  const [email, setEmail] = useState('');

  const enviarSolicitacao = async () => {
    try {
      const resultado = await httpService.recuperarSenha(email);
      Alert.alert("Verifique seu e-mail para instruções de recuperação de senha.");
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível processar sua solicitação.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu e-mail</Text>
      <TextInput 
        style={[styles.input, styles.textInput]}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={enviarSolicitacao}>
        <Text style={styles.texto}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EsqueceuSenha;
