import './App.css';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import ReduxThunkMiddleWare from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewInventoryScreen from './components/screens/ViewInventoryScreen';
import HomeScreen from './components/screens/HomeScreen';
import NewItemFormScreen from './components/screens/NewItemFormScreen';
import ReviewOrdersScreen from './components/screens/reviewOrdersScreen';
import Header from './components/Header';

function App() {
    const store = createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunkMiddleWare)
    );
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/viewInventory"
                        element={<ViewInventoryScreen />}
                    />
                    <Route index path="/*" element={<HomeScreen />} />
                    <Route path="/newItem" element={<NewItemFormScreen />} />
                    <Route path="/orders" element={<ReviewOrdersScreen />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
