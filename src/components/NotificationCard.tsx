
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertCircle } from 'lucide-react';

interface NotificationCardProps {
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  title, 
  content, 
  date, 
  priority, 
  category 
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-gray-900 flex-1 pr-4">
            {title}
          </CardTitle>
          <Badge className={`${getPriorityColor()} text-white`}>
            {priority.toUpperCase()}
          </Badge>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {date}
          </span>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
