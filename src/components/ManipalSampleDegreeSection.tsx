import React, { useState } from "react";
import { Check } from "lucide-react";
import frontImage from "@/assets/degree/front.png";
import backImage from "@/assets/degree/back.png";

const ManipalSampleDegreeSection = () => {
  const [isFront, setIsFront] = useState(true);

  const handleDotClick = (side) => {
    setIsFront(side === 'front');
  };

  return (
    <section className="py-16" id="degree">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side: Description */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-prose">
              The degrees offered by Manipal University Jaipur are valid and recognized by various government bodies, making them suitable for all career opportunities.
            </p>
            <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">UGC-DEB & AICTE Approved</p>
                  <p className="text-sm text-muted-foreground">The degrees are fully valid for government, private, and overseas jobs or higher studies.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Digital Verification</p>
                  <p className="text-sm text-muted-foreground">Supports online QR-code-based verification for authenticity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Officially Stamped</p>
                  <p className="text-sm text-muted-foreground">Authenticated with the official university seal.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right side: Image with Flip and Dots */}
          <div className="flex-1 max-w-lg mx-auto md:max-w-none">
            <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 transform-style-3d perspective-1000">
              <div
                className={`relative w-full h-auto transition-transform duration-700 ease-in-out ${isFront ? 'rotate-y-0' : 'rotate-y-180'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={frontImage}
                  alt="Manipal Sample Degree Front"
                  className={`w-full h-auto object-contain rounded-lg absolute backface-hidden transition-opacity duration-700 ${isFront ? 'opacity-100' : 'opacity-0'}`}
                />
                <img
                  src={backImage}
                  alt="Manipal Sample Degree Back"
                  className={`w-full h-auto object-contain rounded-lg rotate-y-180 backface-hidden transition-opacity duration-700 ${!isFront ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <div
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${isFront ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => handleDotClick('front')}
              ></div>
              <div
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${!isFront ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => handleDotClick('back')}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManipalSampleDegreeSection;
