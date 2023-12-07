import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151A40',
    justifyContent: 'center',
  },
  texto: {
    marginLeft: '3%',
    marginVertical: '2%',
    fontFamily: 'Montserrat_700Bold',
    color: '#FFF',
  },
  input: {
    height: 40,
    marginLeft: '5%',
    width: '90%',
    borderColor: '#848484',
    borderWidth: 1,
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF',
  },
  textInput: {
    color: '#FFF',
    fontFamily: 'Montserrat_400Regular',
    paddingHorizontal: 10,
  },
  botaoAdicionarImagem: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginTop: "5%",
    marginLeft: '5%',
    width: '90%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontFamily: 'Montserrat_700Bold',
  },
});

export default styles;
