
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminNotifications = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: 'medium',
    category: 'Academic'
  });
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Course Registration Open",
      content: "Registration for the Advanced Mathematics course is now open. Limited seats available.",
      priority: "high",
      category: "Academic",
      date: "2024-01-15",
      status: "active"
    },
    {
      id: 2,
      title: "Library Hours Extended",
      content: "The main library will now be open until 10 PM on weekdays.",
      priority: "medium",
      category: "Facility",
      date: "2024-01-14",
      status: "active"
    }
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing notification
      setNotifications(prev => prev.map(notif => 
        notif.id === editingId 
          ? { ...notif, ...formData, date: new Date().toISOString().split('T')[0] }
          : notif
      ));
      toast({
        title: "Notification updated",
        description: "Your notification has been updated successfully.",
      });
      setEditingId(null);
    } else {
      // Add new notification
      const newNotification = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0],
        status: "active"
      };
      setNotifications(prev => [newNotification, ...prev]);
      toast({
        title: "Notification created",
        description: "Your notification has been published successfully.",
      });
    }
    
    setShowForm(false);
    setFormData({ title: '', content: '', priority: 'medium', category: 'Academic' });
  };

  const handleEdit = (notification: any) => {
    setFormData({
      title: notification.title,
      content: notification.content,
      priority: notification.priority,
      category: notification.category
    });
    setEditingId(notification.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
    toast({
      title: "Notification deleted",
      description: "The notification has been removed successfully.",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Notifications</h1>
          <p className="text-gray-600">Create and manage daily notifications</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          New Notification
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Notification' : 'Create New Notification'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Notification title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Academic">Academic</SelectItem>
                      <SelectItem value="Facility">Facility</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Financial">Financial</SelectItem>
                      <SelectItem value="Maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Priority</label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Notification content..."
                  rows={4}
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  {editingId ? 'Update Notification' : 'Publish Notification'}
                </Button>
                <Button type="button" variant="outline" onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ title: '', content: '', priority: 'medium', category: 'Academic' });
                }}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Existing Notifications */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{notification.title}</h3>
                  <p className="text-gray-600 mb-3">{notification.content}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{notification.date}</span>
                    <Badge variant="outline">{notification.category}</Badge>
                    <Badge className={`${getPriorityColor(notification.priority)} text-white`}>
                      {notification.priority.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(notification)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(notification.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminNotifications;
