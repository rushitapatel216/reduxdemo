import {configureStore} from '@reduxjs/toolkit';

import {combineReducers} from 'redux';
import CartSlice from './CartReducer';

const rootReducer = combineReducers({
  cart: CartSlice,
});

const store = configureStore({reducer: rootReducer});

export default store;
