
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Eye, FileText, Image, Video, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [contentType, setContentType] = useState('article');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'article',
    category: 'Academic',
    status: 'draft',
    tags: ''
  });
  const { toast } = useToast();

  const contents = [
    {
      id: 1,
      title: "Introduction to Calculus",
      type: "article",
      category: "Academic",
      status: "published",
      author: "Dr. Smith",
      publishDate: "2024-01-15",
      views: 1250,
      tags: ["mathematics", "calculus", "education"]
    },
    {
      id: 2,
      title: "Physics Lab Safety Guide",
      type: "guide",
      category: "Safety",
      status: "published",
      author: "Prof. Johnson",
      publishDate: "2024-01-10",
      views: 890,
      tags: ["physics", "safety", "laboratory"]
    },
    {
      id: 3,
      title: "Study Tips for Exams",
      type: "video",
      category: "Study Tips",
      status: "draft",
      author: "Admin",
      publishDate: "2024-01-20",
      views: 0,
      tags: ["study", "exams", "tips"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating content:', formData);
    toast({
      title: "Content created",
      description: "Your content has been saved successfully.",
    });
    setShowForm(false);
    setFormData({ title: '', content: '', type: 'article', category: 'Academic', status: 'draft', tags: '' });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return FileText;
      case 'video': return Video;
      case 'guide': return FileText;
      case 'image': return Image;
      default: return FileText;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
          <p className="text-gray-600">Create and manage educational content</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Content</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold">124</p>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <Edit className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">45.2K</p>
              </div>
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList>
          <TabsTrigger value="content">All Content</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {showForm && (
            <Card>
              <CardHeader>
                <CardTitle>Create New Content</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title</label>
                      <Input
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="Content title"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Content Type</label>
                      <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="guide">Guide</SelectItem>
                          <SelectItem value="image">Image</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Academic">Academic</SelectItem>
                          <SelectItem value="Safety">Safety</SelectItem>
                          <SelectItem value="Study Tips">Study Tips</SelectItem>
                          <SelectItem value="News">News</SelectItem>
                          <SelectItem value="Events">Events</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Status</label>
                      <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Tags</label>
                      <Input
                        value={formData.tags}
                        onChange={(e) => setFormData({...formData, tags: e.target.value})}
                        placeholder="tag1, tag2, tag3"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      placeholder="Write your content here..."
                      rows={8}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button type="submit">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Content
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Content List */}
          <div className="space-y-4">
            {contents.map((content) => {
              const TypeIcon = getTypeIcon(content.type);
              return (
                <Card key={content.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <TypeIcon className="h-6 w-6 text-gray-500 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{content.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>By {content.author}</span>
                            <span>Published: {content.publishDate}</span>
                            <span>{content.views} views</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{content.category}</Badge>
                            <Badge className={`${getStatusColor(content.status)} text-white`}>
                              {content.status.toUpperCase()}
                            </Badge>
                            {content.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="articles">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600">Article-specific content management will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600">Video content management will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600">Guide content management will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContent;
