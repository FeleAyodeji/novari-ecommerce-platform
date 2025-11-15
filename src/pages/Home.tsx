import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CraftsmanshipSection } from "@/components/CraftmanshipSection";
import { CollectionsShowcase } from "@/components/CollectionsShowcase";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CraftsmanshipSection />
      <CollectionsShowcase />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
