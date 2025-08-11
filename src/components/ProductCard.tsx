import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  isWishlisted?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount;

  return (
    <Card className="group relative overflow-hidden bg-white hover:shadow-large transition-all duration-300 border-0 shadow-soft">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discountPercentage && (
          <Badge className="absolute top-2 left-2 bg-ecommerce-success text-white font-bold px-2 py-1">
            {discountPercentage}% OFF
          </Badge>
        )}
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className={`h-4 w-4 ${product.isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
        
        {/* Quick Add to Cart */}
        <Button
          size="sm"
          className="absolute bottom-2 left-2 right-2 bg-primary hover:bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;