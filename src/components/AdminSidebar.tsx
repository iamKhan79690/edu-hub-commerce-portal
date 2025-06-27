
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  Bell, 
  Briefcase, 
  ShoppingBag, 
  Users, 
  Settings,
  FileText,
  BarChart3
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Notifications', icon: Bell, path: '/admin/notifications' },
    { name: 'Jobs', icon: Briefcase, path: '/admin/jobs' },
    { name: 'Products', icon: ShoppingBag, path: '/admin/products' },
    { name: 'Users', icon: Users, path: '/admin/users' },
    { name: 'Reports', icon: BarChart3, path: '/admin/reports' },
    { name: 'Content', icon: FileText, path: '/admin/content' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <Card className="h-screen w-64 rounded-none border-r">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || 
                            (item.path === '/admin' && location.pathname === '/admin');
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </Card>
  );
};

export default AdminSidebar;
