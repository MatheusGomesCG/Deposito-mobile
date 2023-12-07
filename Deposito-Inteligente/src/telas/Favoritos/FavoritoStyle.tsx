import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  cardTop:{
    flexDirection: 'row',
    alignSelf: "flex-end",
  },
  cardTitle: {
    marginRight: "50%",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  centeredContainer: {
    alignItems: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
    marginRight: 10,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 16,
  },
  inputQuantity: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  cardButton: {
    width: "80%",
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  totalQuantityText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;
