import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

const OrderConfirmation = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart when order is confirmed
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 max-w-2xl">
        <Card className="text-center">
          <CardContent className="py-12 px-8">
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-primary mx-auto mb-4 animate-pulse" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Order Placed Successfully! ✅
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your order has been placed successfully!
              </p>
              <p className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
                This was a demo checkout. Stay tuned for real drops when we launch officially!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Package className="h-5 w-5" />
                <span>Demo Order #ANIME-2024-001</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Demo delivery address: 221B Anime Street, Bengaluru, India</p>
                <p>Estimated delivery: When we launch for real! 🚀</p>
              </div>
            </div>

            <div className="space-y-4">
              <Link to="/">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Want to stay updated on our launch?
                </p>
                <p className="text-sm text-primary font-medium">
                  Follow us for exclusive anime tee drops! 🔥
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;