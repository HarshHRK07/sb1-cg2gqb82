import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Package2, Heart, Settings, CreditCard } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuthStore();

  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'delivered',
      total: 299.99,
      items: ['Abstract Harmony'],
    },
    // Add more mock orders...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
        <p className="text-gray-600">Manage your orders and account settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Package2 className="h-8 w-8 text-blue-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Orders</h2>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Heart className="h-8 w-8 text-red-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Wishlist</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CreditCard className="h-8 w-8 text-green-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Total Spent</h2>
          <p className="text-3xl font-bold">$599.98</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Settings className="h-8 w-8 text-gray-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Settings</h2>
          <button className="text-blue-600 hover:text-blue-500">
            Manage Account
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Recent Orders</h2>
        </div>
        <div className="divide-y">
          {orders.map((order) => (
            <div key={order.id} className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold mb-1">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${order.total}</p>
                <p className="text-sm text-green-600 capitalize">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}