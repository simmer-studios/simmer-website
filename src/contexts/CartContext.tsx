"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

interface Cart {
  items: string[];
  isVisible: boolean;
  isDiscounted: boolean;
  isChefChoiceSelected: boolean;
  addItem: (item: string) => void;
  removeItem: (itemId: string) => void;
  toggleDiscount: () => void;
  toggleChefChoice: () => void;
}

const CartContext = createContext<Cart>({
  items: [],
  isVisible: false,
  isDiscounted: false,
  isChefChoiceSelected: false,
  addItem: () => null,
  removeItem: () => null,
  toggleDiscount: () => null,
  toggleChefChoice: () => null
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("simmer-cart");
      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const [isChefChoiceSelected, setIsChefChoiceSelected] =
    useState<boolean>(false);

  const addCartItem = (item: string) => {
    if (!items.includes(item)) {
      setItems((prev) => [...prev, item]);
    }
  };

  const removeCartItem = (itemToRemove: string) => {
    setItems((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const toggleDiscount = () => {
    setIsDiscounted((prev) => !prev);
  };

  const toggleChefChoice = () => {
    setIsChefChoiceSelected((prev) => !prev);
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
        isDiscounted: false,
        isChefChoiceSelected: false,
        addItem: addCartItem,
        removeItem: removeCartItem,
        toggleDiscount,
        toggleChefChoice
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
