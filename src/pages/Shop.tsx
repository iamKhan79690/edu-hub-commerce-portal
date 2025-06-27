
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';
import { Product } from '@/contexts/CartContext';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: "Advanced Mathematics Textbook",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=300&fit=crop",
      description: "Comprehensive textbook covering calculus, algebra, and advanced mathematical concepts for high school and college students.",
      category: "Books"
    },
    {
      id: 2,
      name: "Science Experiment Kit",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      description: "Complete science kit with lab equipment and materials for conducting 50+ hands-on experiments at home or in classroom.",
      category: "Equipment"
    },
    {
      id: 3,
      name: "Online Coding Course Bundle",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      description: "Comprehensive coding course covering Python, JavaScript, and web development with lifetime access and certificates.",
      category: "Courses"
    },
    {
      id: 4,
      name: "Educational Board Games Set",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      description: "Collection of educational board games designed to make learning fun for kids aged 8-14. Includes math, science, and geography games.",
      category: "Games"
    },
    {
      id: 5,
      name: "Digital Art Tablet",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      description: "Professional digital drawing tablet perfect for art students and creative learning. Includes stylus and drawing software.",
      category: "Equipment"
    },
    {
      id: 6,
      name: "World History Encyclopedia",
      price: 67.99,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: "Beautifully illustrated encyclopedia covering world history from ancient civilizations to modern times.",
      category: "Books"
    },
    {
      id: 7,
      name: "Language Learning Software",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      description: "Interactive language learning software supporting 12 languages with speech recognition and progress tracking.",
      category: "Courses"
    },
    {
      id: 8,
      name: "Chemistry Model Kit",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "3D molecular model kit for chemistry students to visualize and build molecular structures and compounds.",
      category: "Equipment"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Educational Store</h1>
          <p className="text-gray-600 mb-6">Discover quality educational materials, books, and learning tools</p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="books">Books</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
                <SelectItem value="courses">Courses</SelectItem>
                <SelectItem value="games">Games</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
