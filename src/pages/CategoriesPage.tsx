import CategoryCard from "@/components/CategoryCard";
import OfferBanner from "@/components/OfferBanner";
import { categories } from "@/data/products";

const CategoriesPage = () => {
  const animeCategories = categories.filter(c => c.isAnime);
  const nonAnimeCategories = categories.filter(c => !c.isAnime);

  return (
    <div className="min-h-screen bg-background">
      {/* Offer Banner */}
      <OfferBanner />

      {/* Hero Section */}
      <section className="relative hero-gradient py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            All Categories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Explore our collection - from epic anime to trending styles
          </p>
        </div>
      </section>

      {/* Anime Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Anime Collection</h2>
          <p className="text-muted-foreground mb-8">Your favorite anime series in premium quality</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animeCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                image={category.image}
                slug={category.slug}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Anime Categories */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Anime</h2>
          <p className="text-muted-foreground mb-8">Express yourself with unique designs and styles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonAnimeCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                image={category.image}
                slug={category.slug}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
