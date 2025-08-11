import { ShoppingCart, Search, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-primary shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary/90">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-primary-foreground">hlipshow</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Search for products, brands and more"
                className="w-full pl-4 pr-12 h-10 rounded-sm border-none bg-white focus:ring-2 focus:ring-white"
              />
              <Button size="icon" className="absolute right-0 top-0 h-10 w-12 rounded-l-none bg-ecommerce-warning hover:bg-ecommerce-warning/90">
                <Search className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex text-primary-foreground hover:bg-primary/90">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex text-primary-foreground hover:bg-primary/90">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-primary-foreground hover:bg-primary/90">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-ecommerce-warning text-xs font-bold">
                2
              </Badge>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              placeholder="Search for products, brands and more"
              className="w-full pl-4 pr-12 h-10 rounded-sm border-none bg-white"
            />
            <Button size="icon" className="absolute right-0 top-0 h-10 w-12 rounded-l-none bg-ecommerce-warning hover:bg-ecommerce-warning/90">
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;