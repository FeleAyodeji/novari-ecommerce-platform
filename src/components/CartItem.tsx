"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex gap-4 pb-6 border-b border-border">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 bg-secondary rounded-lg overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            ${item.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(
                Math.max(1, Number.parseInt(e.target.value) || 1)
              )
            }
            className="w-12 h-8 border border-border rounded text-center text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Product quantity"
          />
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors p-2 flex-shrink-0"
        aria-label="Remove from cart"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
