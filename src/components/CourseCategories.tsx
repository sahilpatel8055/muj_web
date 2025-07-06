import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Management",
    icon: "🎯",
    courses: ["MBA", "BBA", "PGDM"],
    description: "Build leadership and business skills"
  },
  {
    title: "Information Technology",
    icon: "💻",
    courses: ["MCA", "BCA", "M.Sc IT"],
    description: "Master modern technology skills"
  },
  {
    title: "Data Science",
    icon: "📊",
    courses: ["M.Sc Data Science", "Business Analytics"],
    description: "Analyze data for business insights"
  },
  {
    title: "Media & Journalism",
    icon: "📰",
    courses: ["MA Journalism", "Mass Communication"],
    description: "Shape the future of media"
  },
  {
    title: "Commerce",
    icon: "💼",
    courses: ["BCOM", "M.Com", "BCOM(Hons)"],
    description: "Excel in business and finance"
  },
  {
    title: "Arts & Humanities",
    icon: "🎨",
    courses: ["BA", "MA", "BA(Hons)"],
    description: "Explore diverse academic disciplines"
  }
];

export default function CourseCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-4">
            Top Online Course Categories
          </h2>
          <p className="text-xl text-manipal-text-light max-w-2xl mx-auto">
            Choose from our wide range of UGC approved online degree programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 border border-gray-200"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-manipal-text-dark mb-2 group-hover:text-manipal-orange transition-colors">
                  {category.title}
                </h3>
                <p className="text-manipal-text-light mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.courses.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="px-3 py-1 bg-manipal-orange-light text-manipal-orange text-sm rounded-full font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}