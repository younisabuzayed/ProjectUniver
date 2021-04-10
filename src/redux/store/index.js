import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CategoriesReducer from '../reducers/CategoriesReducer';
import LoginReducer from '../reducers/LoginReducer';
import ProductsReducer from '../reducers/ProductsReducer';
import SignupReducer from '../reducers/SignupReducer';
import ProfileReducer from '../reducers/ProfileReducer';

const rootReducers = combineReducers({
    Login: LoginReducer,
    Signup: SignupReducer,
    Categories: CategoriesReducer,
    Products: ProductsReducer,
    Profile: ProfileReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
