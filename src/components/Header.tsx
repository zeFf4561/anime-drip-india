import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const location = useLocation();
  const { items } = useCart();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Epic Threadz" className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Epic Threadz
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/categories"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/categories") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Categories
          </Link>
          <Link
            to="/upcoming"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/upcoming") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Upcoming
          </Link>
        </nav>

        <Link to="/cart">
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;