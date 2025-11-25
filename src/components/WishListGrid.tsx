import { WishlistCard } from "./WishListCard";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistGridProps {
  items: WishlistItem[];
  onRemove: (id: string) => void;
  onMoveToCart: (id: string) => void;
}

export function WishlistGrid({
  items,
  onRemove,
  onMoveToCart,
}: WishlistGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <WishlistCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          onRemove={() => onRemove(item.id)}
          onMoveToCart={() => onMoveToCart(item.id)}
        />
      ))}
    </div>
  );
}
