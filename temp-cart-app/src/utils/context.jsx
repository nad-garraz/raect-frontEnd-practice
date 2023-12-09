import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
import { getTotals } from './utils';

const AppContext = createContext();

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    // console.log('Carrito: ', cart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clearCart = () => dispatch({ type: CLEAR_CART });
  const removeItem = (id) => dispatch({ type: REMOVE, payload: { id: id } });
  const increase = (id) => dispatch({ type: INCREASE, payload: { id: id } });
  const decrease = (id) => dispatch({ type: DECREASE, payload: { id: id } });

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
