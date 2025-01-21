// CartContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of a product in the cart
interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Define the context shape
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Initialize cart state from localStorage if it exists
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Function to update cart in localStorage
  const updateCartInLocalStorage = (newCart: Product[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find((item) => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if product already in cart
      } else {
        updatedCart.push({ ...product, quantity: 1 }); // Add new product
      }

      updateCartInLocalStorage(updatedCart); // Update localStorage
      return updatedCart;
    });
  };

  // Remove product from cart
   const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== id);
      updateCartInLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

