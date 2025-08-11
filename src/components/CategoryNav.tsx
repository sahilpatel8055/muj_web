import { Smartphone, Laptop, Headphones, Gamepad2, Shirt, Home, Book, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: Smartphone, href: "#" },
  { name: "Computers", icon: Laptop, href: "#" },
  { name: "Audio", icon: Headphones, href: "#" },
  { name: "Gaming", icon: Gamepad2, href: "#" },
  { name: "Fashion", icon: Shirt, href: "#" },
  { name: "Home", icon: Home, href: "#" },
  { name: "Books", icon: Book, href: "#" },
  { name: "Sports", icon: Dumbbell, href: "#" },
];

const CategoryNav = () => {
  return (
    <nav className="bg-white shadow-soft border-b sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center overflow-x-auto scrollbar-hide py-3 gap-1">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost"
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-smooth"
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;