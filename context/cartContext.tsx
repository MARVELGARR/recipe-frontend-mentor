import { createContext,  useContext, useState, type ReactNode } from "react";

type CartType = {
  id: number;
  thumnail: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartType[];
  addToCart: (item: Omit<CartType, "quantity">) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const MyCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType[]>([]);

  const addToCart = (item: Omit<CartType, "quantity">) => {
    setCart((prev) => {
      const isCartExisting = prev.find((i) => i.id == item.id);

      if (isCartExisting) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };


  const removeItem = (id: number) =>{
    setCart((prev)=>{
        const isCartExisting = prev.find((i) => i.id == id);

        if(isCartExisting && isCartExisting.quantity > 1){
            return prev.map((i)=> i.id === id ? {...i, quantity : i.quantity - 1} : i )
        }
        return prev.filter((i)=> i.id !== id)
        
    })
  }


  const clearCart = () =>{
    setCart([])
  }

  return <CartContext.Provider value={{addToCart, removeItem, clearCart, cart}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const myCart = useContext(CartContext);
  if (!myCart) {
    throw new Error("Cannot use context outside of provider");
  }
  return myCart;
};
