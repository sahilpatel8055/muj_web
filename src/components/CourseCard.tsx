import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  institution: string;
  duration: string;
  rating: number;
  students: string;
  imageUrl: string;
  institutionLogo?: string;
  institutionBadgeColor?: string;
  href?: string;
}

const CourseCard = ({ 
  title, 
  institution, 
  duration, 
  rating, 
  students, 
  imageUrl, 
  institutionLogo,
  institutionBadgeColor = "bg-primary",
  href = "#"
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          {rating}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-3">
          <Badge 
            className={`${institutionBadgeColor} text-white text-xs px-2 py-1 flex items-center gap-1 w-fit`}
          >
            {institutionLogo && (
              <img src={institutionLogo} alt="" className="w-4 h-4 object-contain" />
            )}
            {institution}
          </Badge>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {students}
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
          onClick={() => window.open(href, '_self')}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;