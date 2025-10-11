import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/products";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Anime Categories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Explore our collection organized by your favorite anime series
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
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
