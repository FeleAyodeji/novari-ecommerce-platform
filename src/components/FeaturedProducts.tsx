import { ProductCard } from "./ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "The Classic Chrono",
    price: 1200,
    image: "/luxury-watch-classic-chronograph.jpg",
  },
  {
    id: 2,
    name: "Aura Diamond Solitaire",
    price: 1500,
    image: "/elegant-womans-diamond-watch-rose-gold.jpg",
  },
  {
    id: 3,
    name: "Midnight Sentinel",
    price: 3500,
    image: "/navy-blue-luxury-sports-watch.jpg",
  },
  {
    id: 4,
    name: "Lunar Phase Elegance",
    price: 4500,
    image: "/pink-leather-strap-elegant-watch.jpg",
  },
  {
    id: 5,
    name: "Titanium Explorer",
    price: 2800,
    image: "/titanium-black-luxury-sport-watch.jpg",
  },
  {
    id: 6,
    name: "Emerald Cascade",
    price: 2000,
    image: "/gold-emerald-elegant-luxury-watch.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Our Latest Collection
          </h2>
          <p className="text-gray-600 text-lg text-pretty max-w-2xl mx-auto">
            Discover the most sought-after timepieces, curated for discerning
            collectors and trendsetters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onAddToCart={() => console.log(`Added ${product.name} to cart`)}
              onQuickView={() => console.log(`Quick view for ${product.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
