"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/components/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import { useState } from "react";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: "1",
      name: "Classic Chronograph Silver",
      price: 499.0,
      image: "/luxury-silver-chronograph-watch.jpg",
      quantity: 1,
    },
    {
      id: "2",
      name: "Rose Gold Elegance Mesh",
      price: 350.0,
      image: "/rose-gold-mesh-watch.jpg",
      quantity: 2,
    },
    {
      id: "3",
      name: "Deep Sea Diver Blue",
      price: 720.0,
      image: "/blue-diving-watch.jpg",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 25.0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-12">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              Your cart is empty
            </p>
            <a
              href="/men"
              className="inline-block px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items in Cart */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Items in Cart
              </h2>
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
