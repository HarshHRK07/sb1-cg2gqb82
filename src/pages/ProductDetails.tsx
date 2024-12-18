import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';
import { Product } from '../types';

// Mock data - in a real app, this would come from an API
const mockProduct: Product = {
  id: '1',
  title: 'Abstract Harmony',
  description: 'A vibrant exploration of color and form, this piece captures the essence of modern abstract expressionism. Created using a mix of acrylic and oil paints on canvas, this artwork brings energy and life to any space.',
  price: 299.99,
  images: [
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80',
  ],
  category: 'original',
  artist: 'Jane Doe',
  inStock: true,
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [selectedImage, setSelectedImage] = React.useState(0);

  // In a real app, fetch product data based on id
  const product = mockProduct;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.images[selectedImage]}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-24 h-24 rounded-md overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600">by {product.artist}</p>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="text-2xl font-bold">${product.price}</div>

          <div className="space-y-4">
            <Button
              onClick={() => addItem(product)}
              className="w-full flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Add to Wishlist</span>
            </Button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="font-medium text-gray-500">Category</dt>
                <dd className="mt-1">{product.category}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Availability</dt>
                <dd className="mt-1">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}