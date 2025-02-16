"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

type CartItem = {
  id: string;
  name: string;
};

interface Cart {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  isVisible: boolean;
  toggleCartVisibility: () => void;
}

const CartContext = createContext<Cart>({
  items: [],
  addItem: () => null,
  removeItem: () => null,
  isVisible: false,
  toggleCartVisibility: () => null
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  /* TODO: load persisted cart value from local storage if available */
  const [items, setItems] = useState<CartItem[]>([]);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleCartVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const addCartItem = (item: CartItem) => {
    /* check if item is already included in the cart */
    if (items.find((i) => item.id === i.id)) {
      return;
    } else {
      setItems((prev) => [...prev, { id: item.id, name: item.name }]);
    }
  };

  const removeCartItem = (itemId: string) => {
    if (items.find((i) => i.id === itemId)) {
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    } else {
      return;
    }
  };

  /* TODO: persist cart items to local storage */
  // useEffect(() => {}, [items]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        isVisible,
        addItem: addCartItem,
        removeItem: removeCartItem,
        toggleCartVisibility
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cartContext = useContext<Cart>(CartContext);

  if (!cartContext) {
    throw new Error("useCart hook must be used within a CartProvider");
  }

  return cartContext;
};
