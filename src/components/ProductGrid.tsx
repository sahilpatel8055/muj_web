import ProductCard from "./ProductCard";
import phoneImage from "@/assets/phone.jpg";
import laptopImage from "@/assets/laptop.jpg";
import headphonesImage from "@/assets/headphones.jpg";
import gamingImage from "@/assets/gaming.jpg";

const products = [
  {
    id: "1",
    name: "iPhone 15 Pro Max - Latest Model with Advanced Camera",
    image: phoneImage,
    price: 134900,
    originalPrice: 159900,
    rating: 4.5,
    reviews: 1240,
    isWishlisted: false
  },
  {
    id: "2",
    name: "MacBook Air M3 - Ultra-thin Design with All-day Battery",
    image: laptopImage,
    price: 114900,
    originalPrice: 134900,
    rating: 4.7,
    reviews: 856,
    isWishlisted: true
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 - Premium Noise Cancelling Headphones",
    image: headphonesImage,
    price: 29990,
    originalPrice: 34990,
    rating: 4.6,
    reviews: 1891,
    isWishlisted: false
  },
  {
    id: "4",
    name: "PlayStation 5 DualSense Controller - Wireless Gaming",
    image: gamingImage,
    price: 5990,
    originalPrice: 6990,
    rating: 4.4,
    reviews: 2341,
    isWishlisted: false
  },
  {
    id: "5",
    name: "iPhone 15 Pro - Professional Photography Experience",
    image: phoneImage,
    price: 124900,
    originalPrice: 139900,
    rating: 4.5,
    reviews: 967,
    isWishlisted: true
  },
  {
    id: "6",
    name: "Dell XPS 13 - Premium Ultrabook for Professionals",
    image: laptopImage,
    price: 89990,
    originalPrice: 109990,
    rating: 4.3,
    reviews: 543,
    isWishlisted: false
  },
  {
    id: "7",
    name: "AirPods Pro 2nd Generation - Spatial Audio Experience",
    image: headphonesImage,
    price: 24900,
    originalPrice: 26900,
    rating: 4.8,
    reviews: 3456,
    isWishlisted: false
  },
  {
    id: "8",
    name: "Xbox Series X Controller - Enhanced Gaming Experience",
    image: gamingImage,
    price: 5590,
    originalPrice: 6590,
    rating: 4.5,
    reviews: 1234,
    isWishlisted: true
  }
];

interface ProductGridProps {
  title: string;
  subtitle?: string;
}

const ProductGrid = ({ title, subtitle }: ProductGridProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;