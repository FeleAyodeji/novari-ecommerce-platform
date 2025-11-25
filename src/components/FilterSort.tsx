"use client";
import { ChevronDown } from "lucide-react";

interface FilterSortProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  filterBy: string;
  setFilterBy: (value: string) => void;
}

export function FilterSort({
  sortBy,
  setSortBy,
  filterBy,
  setFilterBy,
}: FilterSortProps) {
  return (
    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
      {/* Filter Dropdown */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
          Filter by
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm font-medium text-foreground bg-transparent cursor-pointer focus:outline-none appearance-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="rating">Top Rated</option>
        </select>
        <ChevronDown className="w-4 h-4 text-foreground pointer-events-none -ml-6" />
      </div>
    </div>
  );
}
