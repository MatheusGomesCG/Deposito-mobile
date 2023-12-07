import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './CadastrarProdutoStyle';

const CadastrarProduto: React.FC = () => {
  const [imagem, setImagem] = useState<string | null>(null);

  const escolherImagem = async (source: 'camera' | 'library') => {
    let result: ImagePicker.ImagePickerResult;
    
    if (source === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (result.canceled) {
      console.warn('A seleção de imagem foi cancelada.');
      return;
    }

    if ('uri' in result && typeof result.uri === 'string') {
      setImagem(result.uri);
    } else {
      console.error('A URI da imagem não é uma string válida.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome do Material</Text>
      <TextInput style={[styles.input, styles.textInput]} />
      <Text style={styles.texto}>Preço Unitário</Text>
      <TextInput style={[styles.input, styles.textInput]} />
      <Text style={styles.texto}>Quantidade</Text>
      <TextInput style={[styles.input, styles.textInput]} />
      <Text style={styles.texto}>Unidade de medida</Text>
      <TextInput style={[styles.input, styles.textInput]} />

      <TouchableOpacity onPress={() => escolherImagem('camera')} style={styles.botaoAdicionarImagem}>
        <Text style={styles.textoBotao}>Adicionar Imagem da Câmera</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => escolherImagem('library')} style={styles.botaoAdicionarImagem}>
        <Text style={styles.textoBotao}>Adicionar Imagem da Biblioteca</Text>
      </TouchableOpacity>

      {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default CadastrarProduto;
