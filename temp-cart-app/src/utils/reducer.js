import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  const { type, payload } = action;
  const newCart = new Map(state.cart);

  switch (type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
    case REMOVE:
      newCart.delete(payload.id);
      return { ...state, cart: newCart };
    case INCREASE:
    case DECREASE:
      const { id } = payload;
      const newAmount = newCart.get(id).amount + (type === INCREASE ? 1 : -1);
      newAmount
        ? newCart.set(id, { ...newCart.get(id), amount: newAmount })
        : newCart.delete(id);
      return { ...state, cart: newCart };
    case LOADING:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      const fetchedItems = new Map(payload.cart.map((item) => [item.id, item]));
      return { ...state, cart: fetchedItems, loading: false,  };
    default:
      console.log('default');
      break;
  }

  throw new Error(`no matching action type: ${type}`);
};

export default reducer;
