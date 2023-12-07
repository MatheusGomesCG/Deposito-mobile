// Carrinho.tsx
import React from 'react';
import { Text } from 'react-native';

const Carrinho = ({route}: any) => {
  const {shoppingcart} = route.params
  return (
    shoppingcart.map((prod: any, i: number) => (
      <Text key={i}>{prod.name}</Text>
    ))
   )
}

export default Carrinho;
