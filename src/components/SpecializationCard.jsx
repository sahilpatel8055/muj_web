// src/components/SpecializationCard.jsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SpecializationCard = ({ icon: Icon, title }) => {
  return (
    <Card className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-center rounded-3xl shadow-md p-6 bg-gray-100 border-none">
      <CardContent className="flex items-center p-0 space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white">
          {Icon && (
            <Icon
              className="w-6 h-6 text-gray-800"
            />
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 flex-grow">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default SpecializationCard;
