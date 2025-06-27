
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Quality Education",
      description: "We provide access to high-quality educational resources and materials to support learning at all levels."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "Our platform connects educators, students, and institutions to create a thriving learning community."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards in educational content and user experience across our platform."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Serving learners and educators worldwide with accessible and inclusive educational solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About EduHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EduHub is a comprehensive educational platform designed to bridge the gap between 
            quality education and accessible learning. We provide daily updates, job opportunities, 
            and a marketplace for educational resources.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  To democratize access to quality education by creating a comprehensive platform 
                  that connects educators, learners, and educational resources. We believe that 
                  education should be accessible, engaging, and continuously evolving to meet 
                  the needs of modern learners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Educational Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Partner Institutions</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-6">
                Have questions or want to partner with us? We'd love to hear from you.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📧 contact@eduhub.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Education Street, Learning City, LC 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
