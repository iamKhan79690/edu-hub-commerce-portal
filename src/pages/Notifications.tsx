
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import NotificationCard from '@/components/NotificationCard';
import { Search, Filter } from 'lucide-react';

const Notifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const notifications = [
    {
      id: 1,
      title: "New Course Registration Open",
      content: "Registration for the Advanced Mathematics course is now open. Limited seats available. Early bird discount applies until next week.",
      date: "2024-01-15",
      priority: "high" as const,
      category: "Academic"
    },
    {
      id: 2,
      title: "Library Hours Extended",
      content: "The main library will now be open until 10 PM on weekdays to accommodate student study needs during exam season.",
      date: "2024-01-14",
      priority: "medium" as const,
      category: "Facility"
    },
    {
      id: 3,
      title: "Workshop on Digital Learning",
      content: "Join our free workshop on effective digital learning strategies. Learn about the latest tools and techniques for online education.",
      date: "2024-01-13",
      priority: "medium" as const,
      category: "Workshop"
    },
    {
      id: 4,
      title: "Scholarship Applications Available",
      content: "Applications for merit-based scholarships are now available. Deadline for submission is March 15th. Don't miss this opportunity!",
      date: "2024-01-12",
      priority: "high" as const,
      category: "Financial"
    },
    {
      id: 5,
      title: "Campus Maintenance Notice",
      content: "Scheduled maintenance work will be conducted in Building A from January 20-22. Alternative arrangements have been made for affected classes.",
      date: "2024-01-11",
      priority: "low" as const,
      category: "Maintenance"
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || notification.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Daily Notifications</h1>
          <p className="text-gray-600 mb-6">Stay updated with the latest announcements and important information</p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="facility">Facility</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Notifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNotifications.map(notification => (
            <NotificationCard
              key={notification.id}
              title={notification.title}
              content={notification.content}
              date={notification.date}
              priority={notification.priority}
              category={notification.category}
            />
          ))}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No notifications found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
