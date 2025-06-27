
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Bell, 
  Briefcase, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign,
  Eye,
  MessageSquare
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Notifications',
      value: '45',
      change: '+3',
      icon: Bell,
      color: 'text-green-600'
    },
    {
      title: 'Job Postings',
      value: '23',
      change: '+5',
      icon: Briefcase,
      color: 'text-orange-600'
    },
    {
      title: 'Products Sold',
      value: '189',
      change: '+18%',
      icon: ShoppingBag,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$12,543',
      change: '+25%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Page Views',
      value: '45,678',
      change: '+8%',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Engagement',
      value: '89%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      title: 'Messages',
      value: '156',
      change: '+12',
      icon: MessageSquare,
      color: 'text-purple-600'
    }
  ];

  const recentActivity = [
    { action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { action: 'Job posting published', time: '15 minutes ago', type: 'job' },
    { action: 'Product order received', time: '1 hour ago', type: 'order' },
    { action: 'Notification sent', time: '2 hours ago', type: 'notification' },
    { action: 'New course uploaded', time: '4 hours ago', type: 'content' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">Send Notification</p>
                <p className="text-sm text-gray-600">Create new announcement</p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Briefcase className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">Post Job</p>
                <p className="text-sm text-gray-600">Add new job listing</p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <ShoppingBag className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">Add Product</p>
                <p className="text-sm text-gray-600">List new product</p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">Manage Users</p>
                <p className="text-sm text-gray-600">View user accounts</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
