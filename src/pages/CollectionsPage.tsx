import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Current Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Browse our entire collection of premium anime T-shirts
          </p>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
