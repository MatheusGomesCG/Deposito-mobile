import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/telas/Login/Login'
import CriarUsuario from './src/telas/CriarUsuario/CriarUsuario'
import EsqueceuSenha from './src/telas/EsqueceuSenha/EsqueceuSenha'
import Home from './src/telas/Home/Home'
import ListarProduto from './src/telas/ListarProdutos/Listar'
import Icon from 'react-native-vector-icons/AntDesign'
import CadastrarProduto from './src/telas/CadastrarProduto/CadastrarProduto'
import Carrinho from './src/telas/Carrinho/Carrinho'
import Favoritos from './src/telas/Favoritos/Favoritos'
import { CommonActions } from '@react-navigation/native';
import { useState } from 'react'

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  const [shoppingcart, setShoppingCart] = useState([])
  const [favorites, setFavorites] = useState([])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#151A40"
        }
      }}>
        <Stack.Screen options={{headerShown:false}} name="login" component={Login}/>
        <Stack.Screen options={{title: 'Cadastrar Novo Usuário', headerTintColor: "#FFF"}} name="CriarUsuario" component={CriarUsuario}/>
        <Stack.Screen options={{title: 'Recuperar Senha', headerTintColor: "#FFF"}} name="EsqueceuSenha" component={EsqueceuSenha}/>
        <Stack.Screen options={({navigation}) => ({
          title: "",
          headerBackVisible:false,
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Icon name="logout" size={24} color={'#FFF'} />
            </TouchableOpacity>
          ),
          })} name="Home" component={Home}/>
        <Stack.Screen
          options={({navigation}) => ({
            title: 'Depósito',
            headerBackVisible: false,
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => (navigation.navigate('Carrinho', {shoppingcart}))}>
                <Icon name="shoppingcart" size={24} color={'#FFF'} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Icon name="logout" size={24} color={'#FFF'} />
              </TouchableOpacity>
            ),
          })} name="ListarProduto">
          {
            () => (
              <ListarProduto shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} favorites={favorites} setFavorites={setFavorites} ></ListarProduto>
            )
          }
          </Stack.Screen>
        <Stack.Screen options={({navigation}) => ({
          title: "",
          headerBackVisible:false,
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Icon name="logout" size={24} color={'#FFF'} />
            </TouchableOpacity>
          ),
          })} name="CadastrarProduto" component={CadastrarProduto}/>
        <Stack.Screen options={{
          title: 'Carrinho',
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
        }} name="Carrinho" component={Carrinho}/>
        <Stack.Screen options={{
          title: 'Materiais Favoritos',
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
        }} name="Favoritos">
          {
            () => (
              <Favoritos favorites={favorites} setFavorites={setFavorites}></Favoritos>
            )
          } 
        </Stack.Screen>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;