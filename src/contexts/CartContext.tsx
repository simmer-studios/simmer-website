"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { useAnalytics } from "@/hooks/useAnalytics";

interface Cart {
  items: string[];
  isDiscounted: boolean;
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearCart: () => void;
  applyDiscount: () => void;
}

const CartContext = createContext<Cart>({
  items: [],
  isDiscounted: false,
  addItem: (item: string) => {},
  removeItem: () => {},
  clearCart: () => {},
  applyDiscount: () => {}
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const { captureEvent } = useAnalytics();

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
    captureEvent("DISCOUNT_APPLIED");
  };

  // Get the cart state from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("simmer-cart");
      const discount = localStorage.getItem("simmer-discount");

      setIsDiscounted(discount === "true");

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

  // Save the cart items to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("simmer-cart", JSON.stringify(items));
    }
  }, [items]);

  // Save isDiscounted to localStorage when it changes
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
        addItem,
        removeItem,
        clearCart,
        applyDiscount
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
