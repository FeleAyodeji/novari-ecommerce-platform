interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onAddToCart?: () => void;
  onQuickView?: () => void;
}

export function ProductCard({
  image,
  name,
  price,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-lg font-bold text-gray-900 mb-4">
          ${price.toLocaleString()}
        </p>
        <div className="flex gap-2 mt-auto">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-2 px-3 rounded font-semibold text-sm transition-colors duration-200"
          >
            Add to Cart
          </button>
          <button
            onClick={onQuickView}
            className="flex-1 border border-slate-800 text-slate-800 hover:bg-slate-50 py-2 px-3 rounded font-semibold text-sm transition-colors duration-200"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}
