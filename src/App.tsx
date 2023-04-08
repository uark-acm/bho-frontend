import './App.css';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import ReduxThunkMiddleWare from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewInventoryScreen from './screens/ViewInventoryScreen';
import HomeScreen from './screens/HomeScreen';
import NewItemFormScreen from './screens/NewItemFormScreen';
import Header from './components/Header';
import CheckoutFormScreen from './screens/CheckoutFormScreen';
import TestingReduxComponent from './components/TestingReduxComponent';

function App() {
    const store = createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunkMiddleWare)
    );
    return (
        <Provider store={store}>
            <BrowserRouter>
                <TestingReduxComponent />
                <Header />
                <Routes>
                    <Route
                        path="/viewInventory"
                        element={<ViewInventoryScreen />}
                    />
                    <Route index path="/*" element={<HomeScreen />} />
                    <Route path="/newItem" element={<NewItemFormScreen />} />
                    <Route
                        path="/checkout"
                        element={<CheckoutFormScreen />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
