import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products, categories, upcomingProducts } from "@/data/products";
import { Flame } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in">
              Wear Your Anime.
              <br />
              Live Your Story.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Exclusive anime T-shirts from your favorite universes. Limited drops, endless hype.
            </p>
            <Link to="/categories">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-semibold animate-glow-pulse transition-smooth"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Widgets */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Your Universe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Current Catalog */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">Coming Soon – Don't Miss Out!</h2>
              <Flame className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground">
              20 new designs are on the way. Previews dropping soon. Stay ahead, stay epic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProducts.map((item, index) => (
              <Card key={index} className="bg-card/50 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    {item.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Flame className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-center mb-2">{item.name}</h3>
                  <div className="text-center">
                    <span className="text-sm text-primary font-medium">Preview Soon</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;