// src/components/SpecializationCard.jsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SpecializationCard = ({ icon: Icon, title }) => {
  return (
    <Card className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-center rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:scale-105 group bg-white border border-gray-200">
      <CardContent className="flex flex-col items-center p-0">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4 transition-colors duration-300 group-hover:bg-blue-600">
          {Icon && (
            <Icon
              className="w-8 h-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
            />
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default SpecializationCard;
