"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WishlistGrid } from "@/components/WishListGrid"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Classic Chronograph",
      price: 2499,
      image: "/luxury-black-chronograph-watch.jpg",
    },
    {
      id: "2",
      name: "Elegance Slimline",
      price: 1850,
      image: "/classic-dress-watch-leather-strap.jpg",
    },
    {
      id: "3",
      name: "Dive Master Pro",
      price: 3100,
      image: "/professional-diving-watch-black.jpg",
    },
    {
      id: "4",
      name: "Urban Explorer",
      price: 2150,
      image: "/luxury-gold-watch-on-neutral-background.jpg",
    },
    {
      id: "5",
      name: "Grand Complication",
      price: 7800,
      image: "/luxury-watch-classic-chronograph.jpg",
    },
    {
      id: "6",
      name: "Vintage Heritage",
      price: 1950,
      image: "/classic-dress-watch-leather-strap.jpg",
    },
  ])

  const handleRemoveFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  const handleMoveToCart = (id: string) => {
    console.log(`Moving item ${id} to cart`)
    handleRemoveFromWishlist(id)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Title */}
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Your Wishlist</h1>

          {/* Wishlist Items */}
          {wishlistItems.length > 0 ? (
            <WishlistGrid items={wishlistItems} onRemove={handleRemoveFromWishlist} onMoveToCart={handleMoveToCart} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Your wishlist is empty</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
