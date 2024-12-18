import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredArtworks = [
    {
      id: '1',
      title: 'Abstract Harmony',
      artist: 'Jane Doe',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      title: 'Urban Dreams',
      artist: 'John Smith',
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      title: 'Nature\'s Poetry',
      artist: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
            alt="Art Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Discover Unique Art & Printable Designs
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Explore our curated collection of original artwork and high-quality
              printable designs from talented artists worldwide.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500"
            >
              Explore Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork) => (
              <Link
                key={artwork.id}
                to={`/product/${artwork.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:scale-105">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                    <p className="text-gray-600">by {artwork.artist}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/gallery?category=original"
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80"
                alt="Original Art"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Original Art</h3>
              </div>
            </Link>
            <Link
              to="/gallery?category=prints"
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&q=80"
                alt="Fine Art Prints"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Fine Art Prints</h3>
              </div>
            </Link>
            <Link
              to="/gallery?category=digital"
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80"
                alt="Digital Downloads"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Digital Downloads</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}