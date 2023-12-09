import React from 'react'
import { Image ,Text, TouchableOpacity, View } from 'react-native';
import styles from './HomeStyle'

const Home = ({navigation}: any) => {
  const goToPage = (path : String) => {
    navigation.navigate(path)
  }
  return(
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../../../assets/Foto/Logo.png')}
      />
      {/* <View>
        <TouchableOpacity style={styles.button} onPress={() => {goToPage("CadastrarProduto")}}>
          <Text style={styles.textLink}>Cadastrar Material</Text>
        </TouchableOpacity>
      </View> */}
      <View>
        <TouchableOpacity style={styles.button} onPress={() => {goToPage("ListarProduto")}}>
          <Text style={styles.textLink}>Listar Itens</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => {goToPage("Favoritos")}}>
          <Text style={styles.textLink}>Materiais Favoritos</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textLink}>Cadastrar serviço</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textLink}>Listar Serviços</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textLink}>Modificar Senha</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default Home