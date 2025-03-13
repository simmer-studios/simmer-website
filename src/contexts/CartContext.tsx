"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

export type CartItem = {
  id: string;
  name: string;
};

interface Cart {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  isVisible: boolean;
  isDiscounted: boolean;
}

const CartContext = createContext<Cart>({
  items: [],
  addItem: () => null,
  removeItem: () => null,
  isVisible: false,
  isDiscounted: false
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("simmer-cart");
      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("simmer-cart", JSON.stringify(items));
    }
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        isVisible,
        addItem: addCartItem,
        removeItem: removeCartItem,
        isDiscounted: false
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
