import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Card } from 'react-native-elements';
import styles from './FavoritoStyle'

const Favoritos = ({shoppingcart, setShoppingCart,favorites, setFavorites}: any) => {
  const openToast = (message: string) => {
    ToastAndroid.show(message, 3000)
  }
  return (
    <ScrollView style={styles.container}>
      {favorites.map((product, i) => {
        const [favorite, setFavorite] = useState(false)
        return (
        <Card containerStyle={styles.card} key={i}>
            <Card.Title style={styles.cardTitle}>{product.name}</Card.Title>
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
  )
}

export default Favoritos