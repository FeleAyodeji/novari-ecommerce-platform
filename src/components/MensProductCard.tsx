"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

interface MensProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  onAddToWishlist: () => void;
  onAddToCart: () => void;
}

export function MensProductCard({
  id,
  name,
  price,
  rating,
  image,
  onAddToWishlist,
  onAddToCart,
}: MensProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist();
  };

  return (
    <div className="flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4">
        <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      {/* Product Info */}
      <div className="space-y-2 flex-1">
        <h3 className="font-serif font-semibold text-foreground text-base">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <span
                key={i}
                className="text-yellow-400 text-sm"
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({rating})</span>
        </div>

        {/* Price */}
        <p className="font-serif text-lg font-semibold text-foreground">
          ${price.toLocaleString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-4">
        <button
          onClick={handleWishlist}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-foreground hover:bg-gray-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-4 h-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : ""
            }`}
          />
          <span className="hidden sm:inline">Add to Wishlist</span>
        </button>
        <button
          onClick={onAddToCart}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
