import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";
import { Check } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before buying.",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });

    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-4">₹{product.price}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Select Size (Indian Sizing)</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`h-12 w-12 ${
                      selectedSize === size 
                        ? "bg-primary text-primary-foreground" 
                        : "border-border hover:border-primary"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Features */}
            <Card className="bg-card/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">100% Premium Cotton</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Oversized Fit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Anime-Inspired Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Premium Print Quality</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full font-semibold py-6 text-lg transition-smooth"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-smooth"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Category Badge */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Category:</span>
              <Badge variant="secondary" className="capitalize">
                {product.category.replace('-', ' ')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;