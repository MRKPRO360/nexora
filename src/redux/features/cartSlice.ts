import { IItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
      console.log({ payload });

      const productToAdd = state.products.find(
        (product) => product.id === payload.id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        console.log({ payload });

        console.log(productToAdd);
      }
      return;
    },
    decrementOrderQuantity: (state, { payload }) => {
      const productToAdd = state.products.find(
        (product) => product.id === payload.id
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

// DEFAULT SELECTOR
export const selectCartProducts = (state: RootState) => state.cart.products;

export const {
  addProducts,
  clearCart,
  decrementOrderQuantity,
  incrementOrderQuantity,
  removeProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
