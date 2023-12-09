import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './CarrinhoStyle';

const Carrinho = ({ route, shoppingcart, setShoppingCart }: any) => {
  const { params } = route;
  const initialShoppingCart = params?.shoppingcart || [];
  const [updatedShoppingCart, setUpdatedShoppingCart] = useState(initialShoppingCart);

  const openToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleRemoveItem = (productToRemove: any) => {
    const updatedCart = updatedShoppingCart.filter((product: any) => product !== productToRemove);
    setUpdatedShoppingCart(updatedCart);
  };

  useEffect(() => {
    setShoppingCart(updatedShoppingCart);
  }, [updatedShoppingCart, setShoppingCart]);

  return (
    <ScrollView style={styles.container}>
      {updatedShoppingCart.map((product: any, i: number) => (
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
                <Text style={styles.cardValue}>{product.quantity}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cardLabel}>Unidade:</Text>
                <Text style={styles.cardValue}>{product.measurement}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleRemoveItem(product)}
              style={styles.cardButton}>
              <Text style={styles.buttonText}>Remover do Carrinho</Text>
            </TouchableOpacity>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Carrinho;
