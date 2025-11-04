import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

// ====================== 🛒 TYPES ======================
export type CartType = {
  id: number;
  thumnail: string;
  name: string;
  price: number;
  quantity: number;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartType, "quantity"> }
  | { type: "REMOVE_ONE"; payload: number }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" }

type CartContextType = {
  cart: CartType[];
  addToCart: (item: Omit<CartType, "quantity">) => void;
  removeItem: (id: number) => void;
  removeItem_Id: (id: number) => void;
  clearCart: () => void;
};

// ====================== 🧩 CONTEXT ======================
const CartContext = createContext<CartContextType | null>(null);

// ====================== ⚙️ REDUCER ======================
const initialState: CartType[] = [];

const cartReducer = (state: CartType[], action: CartAction): CartType[] => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);

      if (existingItem) {
        return state.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...state, { ...item, quantity: 1 }];
    }

    case "REMOVE_ONE": {
      const id = action.payload;
      const existingItem = state.find((i) => i.id === id);

      if (existingItem && existingItem.quantity > 1) {
        return state.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }

      return state.filter((i) => i.id !== id);
    }

 

    case "REMOVE_ITEM": {
      const id = action.payload;
      return state.filter((i) => i.id !== id);
    }


    case "CLEAR_CART": {
      return [];
    }

    default:
      return state;
  }
};

// ====================== 🧱 PROVIDER ======================
export const MyCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // wrapper functions
  const addToCart = (item: Omit<CartType, "quantity">) =>
    dispatch({ type: "ADD_ITEM", payload: item });

  const removeItem = (id: number) =>
    dispatch({ type: "REMOVE_ONE", payload: id });

  const removeItem_Id = (id: number) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });



  
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, removeItem_Id, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ====================== 🪄 HOOK ======================
export const useCart = () => {
  const myCart = useContext(CartContext);
  if (!myCart) {
    throw new Error("Cannot use context outside of provider");
  }
  return myCart;
};
