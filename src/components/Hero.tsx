
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Briefcase, ShoppingBag, Users } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Daily Updates",
      description: "Stay informed with daily notifications and educational content updates."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Job Opportunities",
      description: "Discover the latest job openings and career opportunities in education."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      title: "Educational Store",
      description: "Shop for books, courses, and educational materials with ease."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Connect with educators and learners from around the world."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduHub
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your comprehensive platform for educational updates, job opportunities, and learning resources. 
              Stay connected with the latest in education and shop for quality educational materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/notifications">
                <Button size="lg" className="w-full sm:w-auto">
                  View Latest Updates
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Education
            </h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive features designed for educators and learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-0 shadow-md">
                <CardContent className="p-6 text-center">
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
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Daily Updates</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1,200+</div>
                <div className="text-blue-100">Job Opportunities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-blue-100">Happy Learners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
