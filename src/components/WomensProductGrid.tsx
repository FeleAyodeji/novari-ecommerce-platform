"use client";
import { MensProductCard } from "./MensProductCard";

interface WomensProductGridProps {
  sortBy: string;
  filterBy: string;
}

const womensWatches = [
  {
    id: "1",
    name: "Elegant Rose Gold Chrono",
    price: 899,
    rating: 5,
    image: "/elegant-rose-gold-chronograph.jpg",
  },
  {
    id: "2",
    name: "Classic Diamond Bezel",
    price: 1250,
    rating: 5,
    image: "/classic-diamond-bezel-watch.jpg",
  },
  {
    id: "3",
    name: "Minimalist Black Dial",
    price: 520,
    rating: 5,
    image: "/minimalist-black-dial-womens.jpg",
  },
  {
    id: "4",
    name: "Petite Silver Link",
    price: 780,
    rating: 5,
    image: "/petite-silver-link-watch.jpg",
  },
  {
    id: "5",
    name: "Vintage Leather Strap",
    price: 610,
    rating: 5,
    image: "/vintage-leather-strap-womens.jpg",
  },
  {
    id: "6",
    name: "Sporty Ceramic White",
    price: 999,
    rating: 5,
    image: "/sporty-ceramic-white-watch.jpg",
  },
  {
    id: "7",
    name: "Pearl Bezel Gold",
    price: 1150,
    rating: 5,
    image: "/pearl-bezel-gold-watch.jpg",
  },
  {
    id: "8",
    name: "Slim Mesh Bracelet",
    price: 480,
    rating: 5,
    image: "/slim-mesh-bracelet-watch.jpg",
  },
  {
    id: "9",
    name: "Two-Tone Elegant",
    price: 720,
    rating: 5,
    image: "/two-tone-elegant-watch.jpg",
  },
  {
    id: "10",
    name: "Square Face Modern",
    price: 550,
    rating: 5,
    image: "/square-face-modern-womens.jpg",
  },
  {
    id: "11",
    name: "Delicate Chain Watch",
    price: 690,
    rating: 5,
    image: "/delicate-chain-watch.jpg",
  },
  {
    id: "12",
    name: "Classic Roman Numerals",
    price: 820,
    rating: 5,
    image: "/classic-roman-numerals-womens.jpg",
  },
];

export function WomensProductGrid({
  sortBy,
  filterBy,
}: WomensProductGridProps) {
  const sortedWatches = [...womensWatches].sort((a, b) => {
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
