// CarrinhoContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

// Defina as ações possíveis no carrinho
const ACTIONS = {
  ADICIONAR_PRODUTO: 'ADICIONAR_PRODUTO',
  REMOVER_PRODUTO: 'REMOVER_PRODUTO',
  LIMPAR_CARRINHO: 'LIMPAR_CARRINHO',
};

// Função redutora para o carrinho
const carrinhoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADICIONAR_PRODUTO:
      // Lógica para adicionar produto ao carrinho
      // ...

    case ACTIONS.REMOVER_PRODUTO:
      // Lógica para remover produto do carrinho
      // ...

    case ACTIONS.LIMPAR_CARRINHO:
      // Lógica para limpar o carrinho
      // ...

    default:
      return state;
  }
};

// Cria o contexto do carrinho
const CarrinhoContext = createContext();

// Provedor do Carrinho
export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, []);

  // Funções de ação para interagir com o carrinho
  const adicionarProduto = (produto) => {
    dispatch({ type: ACTIONS.ADICIONAR_PRODUTO, payload: produto });
  };

  const removerProduto = (produtoId) => {
    dispatch({ type: ACTIONS.REMOVER_PRODUTO, payload: produtoId });
  };

  const limparCarrinho = () => {
    dispatch({ type: ACTIONS.LIMPAR_CARRINHO });
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do carrinho
export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);

  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }

  return context;
};
