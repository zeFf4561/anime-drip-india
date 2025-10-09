import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import SearchBar from "@/components/SearchBar";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useCart();
  const { user, signOut } = useAuth();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img src={logo} alt="Epic Threadz" className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Epic Threadz
          </span>
        </Link>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <SearchBar />
        </div>

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
          {user && (
            <Link
              to="/orders"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/orders") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Orders
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
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

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/orders")}>
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;