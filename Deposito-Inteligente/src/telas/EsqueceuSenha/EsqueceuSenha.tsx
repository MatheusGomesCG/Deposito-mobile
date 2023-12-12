import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Styles'

export const EsqueceuSenha = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Digite seu e-mail</Text>
        <TextInput style={[styles.input, styles.textInput]}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EsqueceuSenha;