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

  const handleFinalizarCarrinho = async () => {
    try {
        // Substitua a URL pelo endpoint correto do seu back-end
        const resultado = await fetch('http://192.168.1.11:3000/api/finalizarCompra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedShoppingCart),
        });

        if (resultado.ok) {
            setUpdatedShoppingCart([]);
            openToast('Compra finalizada com sucesso!');
        } else {
            openToast('Erro ao finalizar a compra');
        }
    } catch (error) {
        console.error('Erro ao finalizar compra:', error);
        openToast('Erro ao conectar ao servidor');
    }
};

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
      <TouchableOpacity
        onPress={handleFinalizarCarrinho}
        style={styles.cardButton}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Carrinho;
