import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  duration: string;
  fee: string;
  description: string;
  highlights: string[];
  onApplyNow: () => void;
  onDownloadBrochure: () => void;
}

export default function CourseCard({ 
  title, 
  duration, 
  fee, 
  description, 
  highlights, 
  onApplyNow, 
  onDownloadBrochure 
}: CourseCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 border border-gray-200">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-manipal-text-dark">{title}</h3>
            <Badge variant="secondary" className="bg-manipal-orange-light text-manipal-orange font-semibold">
              {duration}
            </Badge>
          </div>
          
          <div className="mb-4">
            <div className="text-2xl font-bold text-manipal-orange mb-2">{fee}</div>
            <p className="text-manipal-text-light text-sm mb-4">{description}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-manipal-text-dark mb-2">Key Highlights:</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-manipal-text-light flex items-start">
                  <span className="text-manipal-orange mr-2">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Button 
            variant="manipal-outline" 
            size="sm" 
            className="flex-1"
            onClick={onDownloadBrochure}
          >
            Download Brochure
          </Button>
          <Button 
            variant="manipal" 
            size="sm" 
            className="flex-1"
            onClick={onApplyNow}
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}