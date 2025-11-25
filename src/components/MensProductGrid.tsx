"use client";
import { MensProductCard } from "./MensProductCard";

interface MensProductGridProps {
  sortBy: string;
  filterBy: string;
}

const mensWatches = [
  {
    id: "1",
    name: "Classic Chronograph",
    price: 1250,
    rating: 5,
    image: "/luxury-black-chronograph-watch.jpg",
  },
  {
    id: "2",
    name: "Sport Diver Aurora",
    price: 980,
    rating: 5,
    image: "/professional-diving-watch-black.jpg",
  },
  {
    id: "3",
    name: "Elegant Dress Watch",
    price: 1500,
    rating: 5,
    image: "/classic-dress-watch-leather-strap.jpg",
  },
  {
    id: "4",
    name: "Modern Skeleton",
    price: 2100,
    rating: 5,
    image: "/skeleton-automatic-watch.jpg",
  },
  {
    id: "5",
    name: "Chronometer Pilot Watch",
    price: 850,
    rating: 5,
    image: "/aviation-pilot-watch.jpg",
  },
  {
    id: "6",
    name: "Luxury Tourbillon",
    price: 890,
    rating: 5,
    image: "/tourbillon-luxury-watch.jpg",
  },
  {
    id: "7",
    name: "Field Watch Aurora",
    price: 620,
    rating: 5,
    image: "/field-watch-green-military.jpg",
  },
  {
    id: "8",
    name: "Architectural Minimalist",
    price: 750,
    rating: 5,
    image: "/minimalist-stainless-steel-watch.jpg",
  },
];

export function MensProductGrid({ sortBy, filterBy }: MensProductGridProps) {
  const sortedWatches = [...mensWatches].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return Number.parseInt(b.id) - Number.parseInt(a.id);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sortedWatches.map((watch) => (
        <MensProductCard
          key={watch.id}
          {...watch}
          onAddToWishlist={() => console.log(`Added ${watch.name} to wishlist`)}
          onAddToCart={() => console.log(`Added ${watch.name} to cart`)}
        />
      ))}
    </div>
  );
}
