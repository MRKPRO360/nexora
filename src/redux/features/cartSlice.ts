import { IItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface ICartProducts extends IItem {
  orderQuantity: number;
}

interface IInitialState {
  products: ICartProducts[];
}

const initialState: IInitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      const productToAdd = state.products.find(
        (product) => product.id === payload.id
      );

      //  IF PRODUCT EXISTS THEN INCREMENT THE PRODUCT QUANTITY

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      } else {
        //  IF PRODUCT DOESN"T EXIST THEN ADD IT TO THE CART

        state.products.push({
          ...payload,
          orderQuantity: 1,
        });
      }
    },
    incrementOrderQuantity: (state, { payload }) => {
      const productToAdd = state.products.find(
        (product) => product.id === payload
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
      }
      return;
    },
    decrementOrderQuantity: (state, { payload }) => {
      const productToAdd = state.products.find(
        (product) => product.id === payload
      );

      if (productToAdd) {
        productToAdd.orderQuantity -= 1;
      }
      return;
    },

    removeProducts: (state, { payload }) => {
      const productToAdd = state.products.find(
        (product) => product.id === payload
      );

      if (productToAdd) {
        state.products = state.products.filter(
          (product) => product.id !== payload
        );
      }
      return;
    },

    // CLEARING CART VALUE
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProducts,
  clearCart,
  decrementOrderQuantity,
  incrementOrderQuantity,
  removeProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
