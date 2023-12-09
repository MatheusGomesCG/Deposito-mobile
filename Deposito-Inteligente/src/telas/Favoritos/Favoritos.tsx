import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Card } from 'react-native-elements';
import styles from './FavoritoStyle';

const Favoritos = ({ shoppingcart, setShoppingCart, favorites, setFavorites }: any) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const openToast = (message: string) => { 
    ToastAndroid.show(message, 3000);
  };

  const removeFavorite = (productId: string) => {
    setFavorites(favorites.filter((fav: any) => fav.productId !== productId));
  };

  const addToCart = (product: any, quantity: number) => {
    openToast(`Adicionando ${quantity} ao carrinho`);
  
    const newItem = { ...product, quantity };
  
    const existingItem = shoppingcart.find((item: any) => item.productId === product.productId);
  
    if (existingItem) {
      setShoppingCart((prevCart) =>
        prevCart.map((item: any) =>
          item.productId === existingItem.productId ? { ...item, quantity } : item
        )
      );
    } else {
      setShoppingCart((prevCart) => [...prevCart, newItem]);
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      {favorites.map((product: any) => {
        const isFavorite = favorites.some((fav: any) => fav.productId === product.productId);

        return (
          <Card containerStyle={styles.card} key={product.productId}>
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
                    onChangeText={(text) =>
                      setQuantities({ ...quantities, [product.productId]: parseInt(text, 10) || 1 })
                    }
                  />
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cardLabel}>Unidade:</Text>
                  <Text style={styles.cardValue}>{product.measurement}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (isFavorite) {
                    removeFavorite(product.productId);
                  } else {
                    setFavorites([...favorites, { ...product, isFavorite: true }]);
                  }
                }}
                style={styles.cardButton}>
                <Text style={styles.buttonText}>
                  {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const quantity = quantities[product.productId] || 1;
                  addToCart(product, quantity);
                }}
                style={styles.cardButton}>
                <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
              </TouchableOpacity>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default Favoritos;
