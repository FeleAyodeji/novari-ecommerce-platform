export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center overflow-hidden">
      {/* Background watch image */}
      <div className="absolute inset-0 opacity-60">
        <img
          src="/luxury-gold-watch-on-neutral-background.jpg"
          alt="Luxury watch hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
          Timeless Elegance. Every Moment.
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100 text-pretty">
          Discover our exquisite collection of luxury watches, crafted for a
          lifetime.
        </p>
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
          Explore Collections
        </button>
      </div>
    </section>
  );
}
