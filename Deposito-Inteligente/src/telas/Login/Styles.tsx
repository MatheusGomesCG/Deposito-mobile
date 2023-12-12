import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151A40',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: "3%",
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
  createForgotLink: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  link: {
    marginTop: "3%",
    paddingRight: "5%",
    marginLeft: "2%",
  },
  textLink: {
    fontFamily: "Montserrat_700Bold",
    color: "#2196F3",
  },
  viewPassword: {
    height: 40,
    alignItems: "center",
    marginLeft: "5%",
    width: "90%",
    borderColor: "#848484",
    borderWidth: 1,
    fontFamily: "Montserrat_400Regular",
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    paddingHorizontal: 10
  },
  withInput: {
    width: "85%",
  },
  eye :{
    paddingHorizontal: 10
  }
});

export default styles;
