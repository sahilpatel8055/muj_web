import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const branches = [
  {
    name: "Manipal Academy of Higher Education (MAHE)",
    location: "Manipal, Karnataka",
    established: "1953",
    accreditation: "NAAC A++",
    highlights: [
      "India's leading private university",
      "70+ years of educational excellence",
      "Global alumni network of 300,000+",
      "Ranked among top 5 private universities"
    ],
    programs: ["MBA", "MCA", "BCA", "M.Sc Data Science"]
  },
  {
    name: "Manipal University Jaipur (MUJ)",
    location: "Jaipur, Rajasthan",
    established: "2011",
    accreditation: "NAAC A+",
    highlights: [
      "State-of-the-art campus infrastructure",
      "Industry-aligned curriculum",
      "Strong placement record",
      "International collaborations"
    ],
    programs: ["BBA", "BCOM", "MA Journalism", "Business Analytics"]
  },
  {
    name: "Sikkim Manipal University (SMU)",
    location: "Gangtok, Sikkim",
    established: "1995",
    accreditation: "UGC Recognized",
    highlights: [
      "Pioneer in distance education",
      "Flexible learning options",
      "Technology-enabled education",
      "Student-centric approach"
    ],
    programs: ["MBA", "MCA", "BCA", "BCOM", "BBA"]
  }
];

export default function UniversityBranches() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-4">
            Three Prestigious Universities, One Legacy
          </h2>
          <p className="text-xl text-manipal-text-light max-w-3xl mx-auto">
            Choose from our three renowned university branches, each offering world-class education with the Manipal advantage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className="h-full transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2"
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-manipal-text-dark mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-manipal-text-light mb-2">{branch.location}</p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-manipal-orange text-white"
                  >
                    {branch.accreditation}
                  </Badge>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-manipal-text-light">
                    Established: <span className="font-semibold text-manipal-orange">{branch.established}</span>
                  </span>
                </div>

                <div className="flex-1 mb-6">
                  <h4 className="font-semibold text-manipal-text-dark mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {branch.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-manipal-text-light flex items-start">
                        <span className="text-manipal-orange mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-manipal-text-dark mb-3">Available Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.programs.map((program, programIndex) => (
                      <span 
                        key={programIndex}
                        className="px-3 py-1 bg-manipal-orange-light text-manipal-orange text-xs rounded-full font-medium"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-manipal-orange-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-manipal-text-dark mb-4">
              The Manipal Advantage
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-manipal-orange mb-2">300,000+</div>
                <div className="text-manipal-text-light">Global Alumni</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-manipal-orange mb-2">70+</div>
                <div className="text-manipal-text-light">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-manipal-orange mb-2">100%</div>
                <div className="text-manipal-text-light">Placement Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}