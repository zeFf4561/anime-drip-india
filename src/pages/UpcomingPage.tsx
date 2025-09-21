import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { upcomingProducts } from "@/data/products";
import { Flame, Clock, Star } from "lucide-react";

const UpcomingPage = () => {
  // Group products by category
  const productsByCategory = upcomingProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof upcomingProducts>);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <Flame className="h-10 w-10 text-primary animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            20 new designs are on the way. Previews dropping soon. Stay ahead, stay epic.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Launching Soon - Be Ready!</span>
          </div>
        </div>
      </section>

      {/* Upcoming Products by Category */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {Object.entries(productsByCategory).map(([category, products]) => (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">{category} Collection</h2>
                <div className="flex-grow h-px bg-border"></div>
                <span className="text-sm text-muted-foreground">{products.length} designs</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {products.map((product, index) => (
                  <Card 
                    key={index} 
                    className="bg-card/50 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300 group"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-center text-muted-foreground">
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="aspect-square bg-muted/30 rounded-lg mb-3 flex items-center justify-center group-hover:bg-muted/50 transition-colors">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <Flame className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <p className="text-xs text-muted-foreground">Preview Soon</p>
                        </div>
                      </div>
                      <h3 className="font-medium text-sm text-center mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="text-center">
                        <span className="text-xs text-accent font-medium">Coming Soon</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss the Drop!</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know when these epic anime tees become available. 
            Limited quantities, unlimited hype!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2 text-primary">
              <Star className="h-5 w-5" />
              <span className="font-medium">Exclusive early access for subscribers</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Flame className="h-5 w-5" />
              <span className="font-medium">Limited edition drops</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingPage;