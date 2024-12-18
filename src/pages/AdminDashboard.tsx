import React from 'react';
import {
  Users,
  Package,
  DollarSign,
  BarChart3,
  ShoppingCart,
  Image,
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your store and view analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DollarSign className="h-8 w-8 text-green-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">$12,345</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-8 w-8 text-blue-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">256</p>
          <p className="text-sm text-blue-600">+8 new today</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ShoppingCart className="h-8 w-8 text-purple-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Orders</h2>
          <p className="text-3xl font-bold">45</p>
          <p className="text-sm text-purple-600">12 pending</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Orders</h2>
          </div>
          <div className="p-6">
            {/* Add order table or list here */}
            <p className="text-gray-600">Loading orders...</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Quick Actions</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center">
              <Package className="h-6 w-6 text-gray-600 mb-2" />
              <span>Add Product</span>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center">
              <Image className="h-6 w-6 text-gray-600 mb-2" />
              <span>Upload Art</span>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center">
              <Users className="h-6 w-6 text-gray-600 mb-2" />
              <span>Manage Users</span>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center">
              <BarChart3 className="h-6 w-6 text-gray-600 mb-2" />
              <span>View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}