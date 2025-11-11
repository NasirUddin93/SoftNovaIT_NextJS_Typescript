// app/shop/cart/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div>
                {/* Cart items would be rendered here */}
                <div className="text-center py-8">
                  <p className="text-gray-600">Cart items would appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}