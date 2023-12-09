import { Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './Styles';

export const CriarUsuario = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Nome Completo</Text>
        <TextInput style={[styles.input, styles.textInput]} />
        <Text style={styles.texto}>E-mail</Text>
        <TextInput style={[styles.input, styles.textInput]} />
        <Text style={styles.texto}>Senha</Text>
        <TextInput style={[styles.input, styles.textInput]} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texto}>Adicionar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texto}>Cadastrar Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CriarUsuario;
