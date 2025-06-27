
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';
import AdminDashboard from './admin/AdminDashboard';
import AdminNotifications from './admin/AdminNotifications';
import AdminJobs from './admin/AdminJobs';

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="products" element={<div className="p-6"><h1 className="text-2xl font-bold">Products Management</h1><p className="text-gray-600">Product management features coming soon...</p></div>} />
          <Route path="users" element={<div className="p-6"><h1 className="text-2xl font-bold">User Management</h1><p className="text-gray-600">User management features coming soon...</p></div>} />
          <Route path="reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports</h1><p className="text-gray-600">Analytics and reporting features coming soon...</p></div>} />
          <Route path="content" element={<div className="p-6"><h1 className="text-2xl font-bold">Content Management</h1><p className="text-gray-600">Content management features coming soon...</p></div>} />
          <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600">Settings panel coming soon...</p></div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
