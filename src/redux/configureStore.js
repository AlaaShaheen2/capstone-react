import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import charsReducer from './Characters/Characters';

const reducer = combineReducers({
  characters: charsReducer,
});

const store = configureStore({ reducer });

export default store;
