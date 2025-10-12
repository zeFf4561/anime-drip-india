import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import OfferBanner from "@/components/OfferBanner";
import HeroCarousel from "@/components/HeroCarousel";
import { products, categories, upcomingProducts } from "@/data/products";
import { Flame } from "lucide-react";

const Homepage = () => {
  const animeProducts = products.filter(p => p.isAnime);
  const nonAnimeProducts = products.filter(p => !p.isAnime);
  const animeCategories = categories.filter(c => c.isAnime);
  const nonAnimeCategories = categories.filter(c => !c.isAnime);

  return (
    <div className="min-h-screen bg-background">
      {/* Offer Banner */}
      <OfferBanner />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Anime Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Explore Your Anime Universe
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            From classic hits to latest series - wear your favorite anime
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Beyond Anime - Express Yourself
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Memes, minimalist art, vintage vibes & more - your style, your way
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* Featured Anime Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Anime Best Sellers
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Most loved designs from top anime series
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {animeProducts.filter(p => p.featured).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Non-Anime Products */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trending Styles
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Popular picks beyond anime - memes, art, and more
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {nonAnimeProducts.filter(p => p.featured).slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/collections">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Anime Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">Anime Drops Coming Soon!</h2>
              <Flame className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground">
              New anime designs dropping soon. Stay tuned for epic launches!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProducts.filter(item => 
              animeCategories.some(cat => cat.name === item.category)
            ).slice(0, 8).map((item, index) => (
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

      {/* Upcoming Non-Anime Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-accent animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">More Styles On The Way!</h2>
              <Flame className="h-8 w-8 text-accent animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground">
              Fresh memes, minimalist art & retro vibes coming your way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProducts.filter(item => 
              nonAnimeCategories.some(cat => cat.name === item.category)
            ).slice(0, 4).map((item, index) => (
              <Card key={index} className="bg-card/50 border-dashed border-accent/30 hover:border-accent/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    {item.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Flame className="h-8 w-8 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-center mb-2">{item.name}</h3>
                  <div className="text-center">
                    <span className="text-sm text-accent font-medium">Preview Soon</span>
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