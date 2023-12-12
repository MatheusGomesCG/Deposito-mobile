import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151A40',
    justifyContent: 'center',
  },
  texto: {
    marginLeft: "3%",
    marginVertical: "2%",
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
  },
  input: {
    height: 40,
    marginLeft: "5%",
    width: "90%",
    borderColor: "#848484",
    borderWidth: 1,
    fontFamily: "Montserrat_400Regular",
    color: "#FFF",
  },
  button: {
    alignItems: "center",
    marginTop: "5%",
    borderColor: "#848484",
    borderWidth: 1,
    borderRadius: 20,
    padding: "3%",
    marginHorizontal: "5%",
  },
  textInput: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    paddingHorizontal: 10
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    color: "#FFF"
  },
});

export default styles;
