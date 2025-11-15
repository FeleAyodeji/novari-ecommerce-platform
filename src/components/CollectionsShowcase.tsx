export function CollectionsShowcase() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Explore Our Collections
          </h2>
          <p className="text-gray-600 text-lg text-pretty max-w-2xl mx-auto">
            Find the perfect wristwatch that resonates with your style and personality, for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Collections */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="/luxury-mens-watches-collection-elegant.jpg"
              alt="Men's Collections"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center">
              <h3 className="text-white text-3xl font-bold mb-4">Men's Collections</h3>
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                View Collection
              </button>
            </div>
          </div>

          {/* Women's Collections */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="/luxury-womens-watches-collection-elegant-diamonds.jpg"
              alt="Women's Collections"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center">
              <h3 className="text-white text-3xl font-bold mb-4">Women's Collections</h3>
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
