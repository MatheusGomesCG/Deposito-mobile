import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { FontAwesome5 } from '@expo/vector-icons'
import styles from './Styles';
import { useState } from 'react';

const Login = ({navigation}: any) => {
    const [isPassword, setIsPassword] = useState(true)

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={require('../../../assets/Foto/Logo.png')}
            />
            <Text style={styles.texto}>Usuário</Text>
            <TextInput style={[styles.input, styles.textInput]}/>
            <Text style={styles.texto}>Senha</Text> 
            <View style={styles.viewPassword}>
                <TextInput secureTextEntry={isPassword} style={[styles.textInput, styles.withInput]}/>
                <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                    {isPassword == true ?
                        <FontAwesome5 name="eye-slash" size={24} color="#FFF" style={styles.eye}/>
                        :
                        <FontAwesome5 name="eye" size={24} color="#FFF" style={styles.eye} />
                    }   
                </TouchableOpacity>                
            </View>
            <View style={styles.createForgotLink}>
                <TouchableOpacity style={styles.link} onPress={() => {navigation.navigate("CriarUsuario")}}>
                    <Text style={styles.textLink}>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} onPress={() => {navigation.navigate("EsqueceuSenha")}}>
                    <Text style={styles.textLink}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.texto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login