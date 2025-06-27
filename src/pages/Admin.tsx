
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';
import AdminDashboard from './admin/AdminDashboard';
import AdminNotifications from './admin/AdminNotifications';
import AdminJobs from './admin/AdminJobs';
import AdminProducts from './admin/AdminProducts';
import AdminUsers from './admin/AdminUsers';
import AdminReports from './admin/AdminReports';
import AdminContent from './admin/AdminContent';
import AdminSettings from './admin/AdminSettings';

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
