import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

// Mock data - in a real app, this would come from an API
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Abstract Harmony',
    description: 'A vibrant exploration of color and form',
    price: 299.99,
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80'],
    category: 'original',
    artist: 'Jane Doe',
    inStock: true,
  },
  {
    id: '2',
    title: 'Urban Dreams',
    description: 'Contemporary cityscape in mixed media',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80'],
    category: 'print',
    artist: 'John Smith',
    inStock: true,
  },
  // Add more mock products...
];

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    sortBy: 'newest',
  });

  const filteredProducts = mockProducts.filter((product) => {
    if (filters.category === 'all') return true;
    return product.category === filters.category;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Art Gallery</h1>
        <button
          className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}