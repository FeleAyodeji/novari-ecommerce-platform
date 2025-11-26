"use client";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b border-white">
      {/* 1. Added 'relative' to this container so the Nav can position itself relative to this box */}
      <div className="relative flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
        >
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rotate-45 rounded-sm"></div>
          </div>
          <span className="text-xl font-serif font-semibold text-foreground">
            Novari
          </span>
        </Link>

        {/* Navigation - CENTERED FIX */}
        {/* 2. Added 'absolute left-1/2 -translate-x-1/2' 
            This ignores the width of neighbors and forces true center */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/men"
            className="text-foreground hover:text-primary transition-colors"
          >
            Men
          </Link>
          <Link
            to="/women"
            className="text-foreground hover:text-primary transition-colors"
          >
            Women
          </Link>
          <Link
            to="/wishlist"
            className="text-foreground hover:text-primary transition-colors"
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="text-foreground hover:text-primary transition-colors"
          >
            Cart
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Search and Icons */}
        {/* We keep ml-auto here, or just let justify-between handle the spacing */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-3 bg-secondary px-4 py-2 rounded-lg border border-border">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search watches..."
              className="bg-transparent outline-none text-foreground placeholder-muted-foreground w-32"
            />
          </div>

          {/* Wishlist Icon */}
          <button
            aria-label="Wishlist"
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <Heart className="w-6 h-6 text-foreground" />
          </button>

          {/* Cart Icon */}
          <button
            aria-label="Shopping cart"
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
