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
  isDiscounted: boolean;
  isChefChoiceSelected: boolean;
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearCart: () => void;
  applyDiscount: () => void;
  toggleChefChoice: () => void;
}

const CartContext = createContext<Cart>({
  items: [],
  isDiscounted: false,
  isChefChoiceSelected: false,
  addItem: (item: string) => {},
  removeItem: () => {},
  clearCart: () => {},
  applyDiscount: () => {},
  toggleChefChoice: () => {}
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const [isChefChoiceSelected, setIsChefChoiceSelected] =
    useState<boolean>(false);

  const addItem = (item: string) => {
    if (!items.includes(item)) {
      setItems((prev) => [...prev, item]);
    }
  };

  const removeItem = (itemToRemove: string) => {
    setItems((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyDiscount = () => {
    setIsDiscounted(true);
  };

  const toggleChefChoice = () => {
    setIsChefChoiceSelected((prev) => !prev);
  };

  useEffect(() => {
    if (isChefChoiceSelected) {
      addItem("Chef's Choice");
    } else {
      removeItem("Chef's Choice");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChefChoiceSelected]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const simmerDiscount = localStorage.getItem("simmer-discount");
      const cart = localStorage.getItem("simmer-cart");

      setIsDiscounted(simmerDiscount === "true");

      if (!cart) {
        setItems([]);
      } else {
        try {
          const parsedCart = JSON.parse(cart);
          if (
            Array.isArray(parsedCart) &&
            parsedCart.every((item) => typeof item === "string")
          ) {
            setItems(parsedCart);
            setIsChefChoiceSelected(parsedCart.includes("Chef's Choice"));
          } else {
            console.warn("Invalid cart format in localStorage, resetting cart");
            setItems([]);
          }
        } catch (error) {
          console.error("Failed to parse cart from localStorage:", error);
          setItems([]);
        }
      }

      setItems(cart ? JSON.parse(cart) : []);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("simmer-cart", JSON.stringify(items));
      if (items.includes("Chef's Choice")) {
        setIsChefChoiceSelected(true);
      } else {
        setIsChefChoiceSelected(false);
      }
    }
  }, [items]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("simmer-discount", isDiscounted ? "true" : "false");
    }
  }, [isDiscounted]);

  return (
    <CartContext.Provider
      value={{
        items,
        isDiscounted,
        isChefChoiceSelected,
        addItem,
        removeItem,
        clearCart,
        applyDiscount,
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
