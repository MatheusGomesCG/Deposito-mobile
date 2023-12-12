import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import httpService from '../../httpService';
import styles from './Styles';

export const CriarUsuario = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cadastrarUsuario = async () => {
    try {
      const data = { login, email, password };
      const resposta = await httpService.createUser(data);

      if (resposta.ok) {
        Alert.alert('Usuário criado com sucesso!')
      } else {
        const erroData = await resposta.json();
        Alert.alert('Erro', erroData.message);
      }
    } catch (erro) {
      console.error('Erro ao cadastrar usuário:', erro);
      Alert.alert('Erro', 'Erro ao tentar conectar ao servidor. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Login</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={login}
          onChangeText={setLogin}
        />
        <Text style={styles.texto}>E-mail</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.texto}>Senha</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={cadastrarUsuario}>
          <Text style={styles.texto}>Cadastrar Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CriarUsuario;
