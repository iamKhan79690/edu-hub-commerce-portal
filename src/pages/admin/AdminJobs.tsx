
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, MapPin, DollarSign, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminJobs = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    requirements: ''
  });
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Mathematics Teacher",
      company: "Sunrise Academy",
      location: "New York, NY",
      salary: "$45,000 - $60,000",
      type: "Full-time",
      description: "Teaching advanced mathematics to high school students",
      requirements: "Bachelor's degree in Mathematics, Teaching certification",
      posted: "2 days ago",
      status: "active",
      applications: 12
    },
    {
      id: 2,
      title: "Science Lab Coordinator",
      company: "Green Valley School",
      location: "Los Angeles, CA",
      salary: "$40,000 - $55,000",
      type: "Full-time",
      description: "Coordinating science laboratory activities and equipment",
      requirements: "Science degree, Lab experience, Safety certification",
      posted: "3 days ago",
      status: "active",
      applications: 8
    }
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing job
      setJobs(prev => prev.map(job => 
        job.id === editingId 
          ? { ...job, ...formData, posted: "Updated today" }
          : job
      ));
      toast({
        title: "Job updated",
        description: "Your job listing has been updated successfully.",
      });
      setEditingId(null);
    } else {
      // Add new job
      const newJob = {
        id: Date.now(),
        ...formData,
        posted: "Just now",
        status: "active",
        applications: 0
      };
      setJobs(prev => [newJob, ...prev]);
      toast({
        title: "Job posted",
        description: "Your job listing has been published successfully.",
      });
    }
    
    setShowForm(false);
    setFormData({
      title: '',
      company: '',
      location: '',
      salary: '',
      type: 'Full-time',
      description: '',
      requirements: ''
    });
  };

  const handleEdit = (job: any) => {
    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      type: job.type,
      description: job.description,
      requirements: job.requirements
    });
    setEditingId(job.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setJobs(prev => prev.filter(job => job.id !== id));
    toast({
      title: "Job deleted",
      description: "The job listing has been removed successfully.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Jobs</h1>
          <p className="text-gray-600">Create and manage job postings</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          New Job Posting
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Job Posting' : 'Create New Job Posting'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Mathematics Teacher"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Company name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, State"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Salary Range</label>
                  <Input
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                    placeholder="$40,000 - $60,000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Type</label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Job Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe the job role and responsibilities..."
                  rows={4}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Requirements</label>
                <Textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  placeholder="List job requirements (one per line)..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit">
                  <Plus className="h-4 w-4 mr-2" />
                  {editingId ? 'Update Job' : 'Publish Job'}
                </Button>
                <Button type="button" variant="outline" onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({
                    title: '',
                    company: '',
                    location: '',
                    salary: '',
                    type: 'Full-time',
                    description: '',
                    requirements: ''
                  });
                }}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Existing Jobs */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <Badge className="bg-primary text-white">{job.type}</Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{job.company}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                  <div className="mt-2">
                    <span className="text-sm text-gray-500">{job.applications} applications received</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(job)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(job.id)}>
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

export default AdminJobs;
