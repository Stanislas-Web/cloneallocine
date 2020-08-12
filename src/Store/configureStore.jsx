// Store/configureStore.js

import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriesReducer'

export default createStore(toggleFavorite)