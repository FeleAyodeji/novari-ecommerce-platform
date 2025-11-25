"use client";

interface WishlistCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onRemove: () => void;
  onMoveToCart: () => void;
}

export function WishlistCard({
  id,
  name,
  price,
  image,
  onRemove,
  onMoveToCart,
}: WishlistCardProps) {
  return (
    <div className="flex flex-col bg-white hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3 flex-1">
        <h3 className="font-serif font-semibold text-foreground text-base">
          {name}
        </h3>

        {/* Price */}
        <p className="font-serif text-lg font-semibold text-foreground">
          ${price.toLocaleString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <button
          onClick={onMoveToCart}
          className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          aria-label="Move to cart"
        >
          Move to Cart
        </button>
        <button
          onClick={onRemove}
          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-foreground hover:bg-gray-50 transition-colors"
          aria-label="Remove from wishlist"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
