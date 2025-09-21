import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products, upcomingProducts } from "@/data/products";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

interface SearchResult {
  item: {
    id?: string;
    name: string;
    price?: number;
    category: string;
    image?: string;
    description?: string;
    comingSoon?: boolean;
  };
  score?: number;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Combine available and upcoming products for search
  const searchData = [
    ...products.map(p => ({ ...p, comingSoon: false })),
    ...upcomingProducts.map(p => ({ ...p, comingSoon: true }))
  ];

  // Configure Fuse.js for fuzzy search
  const fuse = new Fuse(searchData, {
    keys: ['name', 'category', 'description'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2
  });

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = fuse.search(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    if (result.item.comingSoon) {
      navigate('/upcoming');
    } else if (result.item.id) {
      navigate(`/product/${result.item.id}`);
    }
    setIsOpen(false);
    setQuery("");
  };

  const formatPrice = (price?: number) => {
    if (!price) return null;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search anime tees..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && query.length >= 2 && (
        <Card className="absolute top-full left-0 right-0 mt-2 p-2 z-50 max-h-96 overflow-y-auto bg-background border shadow-lg">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.slice(0, 8).map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                >
                  {result.item.image && (
                    <img
                      src={result.item.image}
                      alt={result.item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm truncate">
                        {result.item.name}
                      </h4>
                      {result.item.comingSoon && (
                        <Badge variant="secondary" className="text-xs">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground capitalize">
                      {result.item.category.replace('-', ' ')}
                    </p>
                    {result.item.price && (
                      <p className="text-sm font-semibold text-primary">
                        {formatPrice(result.item.price)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for anime names or character names</p>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default SearchBar;