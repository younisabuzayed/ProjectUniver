import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CategoriesReducer from '../reducers/CategoriesReducer';
import LoginReducer from '../reducers/LoginReducer';
import ProductsReducer from '../reducers/ProductsReducer';

const rootReducers = combineReducers({
    Login: LoginReducer,
    Categories: CategoriesReducer,
    Products: ProductsReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
