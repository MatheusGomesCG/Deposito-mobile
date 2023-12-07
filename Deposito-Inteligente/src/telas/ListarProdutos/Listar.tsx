import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './ListarStyle';

const ListarProdutos = ({shoppingcart, setShoppingCart, favorites, setFavorites} : any) => {
  const openToast = (message: string) => {
    ToastAndroid.show(message, 3000)
  }
  const removeFavorite = (product : any) => {
    for(let i=0; favorites.lenght; i++){
      if(favorites[i].name === product.name) {
        delete favorites[i]
      }
    }
  }
  const [carrinho, setCarrinho] = useState([]);

  const products = [
    {name: 'Perfil L 2"x1.1/2"', price: "R$ 45,00", measurement: "peça", quantity: "100", image:"https://static.wixstatic.com/media/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png/v1/fill/w_344,h_307,al_c,lg_1,q_85,enc_auto/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png"},
    {name: 'Perfil L 2"x1.1/2"', price: "R$ 45,00", measurement: "peça", quantity: "100", image:"https://static.wixstatic.com/media/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png/v1/fill/w_344,h_307,al_c,lg_1,q_85,enc_auto/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png"},
    {name: 'Perfil L 2"x1.1/2"', price: "R$ 45,00", measurement: "peça", quantity: "100", image:"https://static.wixstatic.com/media/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png/v1/fill/w_344,h_307,al_c,lg_1,q_85,enc_auto/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png"},
    {name: 'Perfil L 2"x1.1/2"', price: "R$ 45,00", measurement: "peça", quantity: "100", image:"https://static.wixstatic.com/media/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png/v1/fill/w_344,h_307,al_c,lg_1,q_85,enc_auto/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png"},
    {name: 'Perfil L 2"x1.1/2"', price: "R$ 45,00", measurement: "peça", quantity: "100", image:"https://static.wixstatic.com/media/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png/v1/fill/w_344,h_307,al_c,lg_1,q_85,enc_auto/fdadfc_94c1efdd13ec4eafbbbb574db500cb9a.png"},
  ]

  return (
    <ScrollView style={styles.container}>
      {products.map((product, i) => {
        const [favorite, setFavorite] = useState(false)
        return (
        <Card containerStyle={styles.card} key={i}>
          <View style={styles.cardTop}>
            <Card.Title style={styles.cardTitle}>{product.name}</Card.Title>
            {
              favorite ? 
              <Icon onPress={() => {removeFavorite(product), setFavorite(false)}} name="heart" size={28} color={"red"}></Icon>:
              <Icon onPress={() => {setFavorite(true), setFavorites([...favorites, product])}} name="hearto" size={28}></Icon>      
            }
          </View>
           
          <Card.Divider />
          <Image source={{ uri: product.image }} style={styles.cardImage} />
          <View style={styles.centeredContainer}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cardLabel}>Preço:</Text>
                <Text style={styles.cardValue}>{product.price}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cardLabel}>Quantidade:</Text>
                <TextInput
                  style={styles.inputQuantity}
                  keyboardType="numeric"
                  defaultValue="1"
                  // Adicione a lógica para atualizar a quantidade, se necessário
                />
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cardLabel}>Unidade:</Text>
                <Text style={styles.cardValue}>{product.measurement}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {
              openToast("Item adicionado com sucesso!")
              setShoppingCart([...shoppingcart, product])
            }}
            style={styles.cardButton}>
              <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </Card>
    )})}
    </ScrollView>
  );
};

export default ListarProdutos;