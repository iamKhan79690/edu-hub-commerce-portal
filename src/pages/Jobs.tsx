
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobCard from '@/components/JobCard';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "Mathematics Teacher",
      company: "Sunrise Academy",
      location: "New York, NY",
      salary: "$45,000 - $60,000",
      type: "Full-time",
      posted: "2 days ago",
      description: "We are looking for a passionate mathematics teacher to join our dynamic team. The ideal candidate will have experience teaching high school mathematics and a commitment to student success.",
      requirements: [
        "Bachelor's degree in Mathematics or Education",
        "Teaching certification required",
        "2+ years of teaching experience",
        "Strong communication skills"
      ]
    },
    {
      id: 2,
      title: "Science Lab Coordinator",
      company: "Green Valley School",
      location: "Los Angeles, CA",
      salary: "$40,000 - $55,000",
      type: "Full-time",
      posted: "3 days ago",
      description: "Join our science department as a Lab Coordinator. You'll be responsible for maintaining lab equipment, preparing experiments, and supporting science teachers.",
      requirements: [
        "Bachelor's degree in Science field",
        "Laboratory experience preferred",
        "Organizational skills",
        "Safety certification"
      ]
    },
    {
      id: 3,
      title: "Online Tutor - English",
      company: "EduConnect Platform",
      location: "Remote",
      salary: "$25 - $40/hour",
      type: "Part-time",
      posted: "1 day ago",
      description: "Flexible online tutoring opportunity for English language arts. Work with students from elementary to high school level in a virtual environment.",
      requirements: [
        "Bachelor's degree in English or related field",
        "Experience with online teaching platforms",
        "Flexible scheduling",
        "Strong internet connection"
      ]
    },
    {
      id: 4,
      title: "Curriculum Developer",
      company: "Learning Innovations Inc.",
      location: "Chicago, IL",
      salary: "$60,000 - $80,000",
      type: "Full-time",
      posted: "5 days ago",
      description: "Create engaging educational content and curricula for K-12 students. Work with a team of educators to develop innovative learning materials.",
      requirements: [
        "Master's degree in Education or subject area",
        "Curriculum development experience",
        "Knowledge of educational standards",
        "Creative problem-solving skills"
      ]
    },
    {
      id: 5,
      title: "Special Education Assistant",
      company: "Inclusive Learning Center",
      location: "Austin, TX",
      salary: "$30,000 - $40,000",
      type: "Full-time",
      posted: "1 week ago",
      description: "Support students with special needs in their educational journey. Work closely with teachers and therapists to provide individualized assistance.",
      requirements: [
        "Associate degree or equivalent experience",
        "Experience working with special needs students",
        "Patience and empathy",
        "First aid certification preferred"
      ]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = typeFilter === 'all' || job.type.toLowerCase() === typeFilter.toLowerCase();
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Opportunities</h1>
          <p className="text-gray-600 mb-6">Discover exciting career opportunities in education</p>
          
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="new york">New York</SelectItem>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <Briefcase className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              type={job.type}
              posted={job.posted}
              description={job.description}
              requirements={job.requirements}
            />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
