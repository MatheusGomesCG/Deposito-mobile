import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from './Styles';

export const CriarUsuario = ({ navigation }: any) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrarUsuario = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      if (resposta.ok) {
        navigation.navigate('Login');
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
        <Text style={styles.texto}>Nome Completo</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={nome}
          onChangeText={setNome}
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
          value={senha}
          onChangeText={setSenha}
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
