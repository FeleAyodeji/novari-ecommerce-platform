"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WomensProductGrid } from "@/components/WomensProductGrid";
import { FilterSort } from "@/components/FilterSort";

export default function Women() {
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            Women's Wristwatches
          </h1>

          {/* Filter and Sort Controls */}
          <FilterSort
            sortBy={sortBy}
            setSortBy={setSortBy}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />

          <WomensProductGrid
            sortBy={sortBy}
            filterBy={filterBy}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
