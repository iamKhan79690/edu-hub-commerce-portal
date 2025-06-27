
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  description: string;
  requirements: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  salary,
  type,
  posted,
  description,
  requirements
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 mb-2">{title}</CardTitle>
            <div className="flex items-center text-gray-600 mb-2">
              <Building className="h-4 w-4 mr-1" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <Badge className="bg-primary text-white">{type}</Badge>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            {salary}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {posted}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="text-sm">{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline">Save Job</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
