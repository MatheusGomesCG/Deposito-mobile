import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/telas/Login/Login'
import CriarUsuario from './src/telas/CriarUsuario/CriarUsuario'
import EsqueceuSenha from './src/telas/EsqueceuSenha/EsqueceuSenha'
import Home from './src/telas/Home/Home'

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#151A40"
        }
      }}>
        <Stack.Screen options={{headerShown:false}} name="login" component={Login}/>
        <Stack.Screen options={{title: 'Cadastrar Novo Usuário', headerTintColor: "#FFF"}}name="CriarUsuario" component={CriarUsuario}/>
        <Stack.Screen options={{title: 'Recuperar Senha', headerTintColor: "#FFF"}} name="EsqueceuSenha" component={EsqueceuSenha}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;