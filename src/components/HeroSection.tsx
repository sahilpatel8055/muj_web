import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, RotateCcw } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your One-Stop
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Shopping</span>
                <br />
                Destination
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover amazing products at unbeatable prices. From electronics to fashion, 
                we've got everything you need delivered right to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-primary hover:text-primary-foreground">
                Explore Categories
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-light-blue rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-ecommerce-blue" />
                </div>
                <div className="text-sm font-medium text-gray-700">Free Delivery</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-light-blue rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-ecommerce-blue" />
                </div>
                <div className="text-sm font-medium text-gray-700">Secure Payment</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-light-blue rounded-full flex items-center justify-center mx-auto">
                  <RotateCcw className="h-6 w-6 text-ecommerce-blue" />
                </div>
                <div className="text-sm font-medium text-gray-700">Easy Returns</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-light-blue rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-ecommerce-blue" />
                </div>
                <div className="text-sm font-medium text-gray-700">Top Quality</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-secondary rounded-3xl p-8 shadow-large transform rotate-3 hover:rotate-0 transition-bounce">
              <div className="bg-white rounded-2xl p-6 shadow-medium">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Featured Deal</div>
                      <div className="text-sm text-gray-600">Up to 60% OFF</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">₹15,999</div>
                    <Button size="sm" className="bg-ecommerce-success hover:bg-ecommerce-success/90">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;