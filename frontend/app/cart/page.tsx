'use client';

import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  CreditCard,
  Lock,
  Tag,
  Heart,
  Star,
  Clock,
  Zap,
  CheckCircle2,
  AlertCircle,
  Package,
  UserCheck,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

const CartPage: NextPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nexus - React Admin Dashboard',
      description: 'Complete admin dashboard template with 50+ components',
      price: 49,
      originalPrice: 89,
      image: '/api/placeholder/80/80',
      category: 'template',
      quantity: 1,
      inStock: true,
      delivery: 'Instant Download',
      features: ['React + TypeScript', '50+ Components', 'Dark Mode'],
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 2,
      name: 'AI-Powered Analytics Plugin',
      description: 'Advanced analytics plugin with AI insights and real-time data',
      price: 79,
      originalPrice: 129,
      image: '/api/placeholder/80/80',
      category: 'plugin',
      quantity: 1,
      inStock: true,
      delivery: 'Instant Download',
      features: ['AI Insights', 'Real-time Data', 'Custom Reports'],
      rating: 4.8,
      reviews: 892
    },
    {
      id: 3,
      name: 'Modern UI Kit Pro',
      description: 'Comprehensive UI kit with 200+ components and design system',
      price: 39,
      originalPrice: 69,
      image: '/api/placeholder/80/80',
      category: 'ui-kit',
      quantity: 2,
      inStock: true,
      delivery: 'Instant Download',
      features: ['200+ Components', 'Figma Files', 'Design System'],
      rating: 4.7,
      reviews: 734
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: number) => {
    // Implementation for moving to wishlist
    console.log('Move to wishlist:', id);
  };

  const applyPromoCode = () => {
    if (promoCode.trim() && !isPromoApplied) {
      setIsPromoApplied(true);
      // Apply promo logic here
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.1 : 0; // 10% discount for demo
  const tax = subtotal * 0.08; // 8% tax for demo
  const total = subtotal - discount + tax;

  const recommendedProducts = [
    {
      id: 101,
      name: 'E-Commerce Website Template',
      description: 'Professional e-commerce template with shopping cart',
      price: 59,
      originalPrice: 99,
      image: '/api/placeholder/100/100',
      rating: 4.6,
      delivery: 'Instant'
    },
    {
      id: 102,
      name: 'Mobile App UI Components',
      description: 'React Native UI components library',
      price: 45,
      originalPrice: 79,
      image: '/api/placeholder/100/100',
      rating: 4.5,
      delivery: 'Instant'
    },
    {
      id: 103,
      name: 'Premium Icon Pack',
      description: '5000+ icons with multiple styles',
      price: 29,
      originalPrice: 49,
      image: '/api/placeholder/100/100',
      rating: 4.7,
      delivery: 'Instant'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center">
              <ShoppingCart className="w-8 h-8 mr-3 text-blue-600" />
              Shopping Cart
            </h1>
            <span className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {cartItems.length === 0 ? (
            // Empty Cart State
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
              <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any products to your cart yet. Start shopping to discover amazing digital products!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Continue Shopping
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center text-gray-700">
                  <Heart className="w-5 h-5 mr-2" />
                  View Wishlist
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Cart Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                      <span className="text-sm text-gray-600">Total: ${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Cart Items List */}
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                                  {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                  {item.description}
                                </p>
                                
                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {item.features.map((feature, index) => (
                                    <span 
                                      key={index}
                                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700"
                                    >
                                      <CheckCircle2 className="w-3 h-3 mr-1" />
                                      {feature}
                                    </span>
                                  ))}
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mt-2">
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm text-gray-700 ml-1">{item.rating}</span>
                                    <span className="text-sm text-gray-500 ml-1">({item.reviews} reviews)</span>
                                  </div>
                                </div>

                                {/* Delivery Info */}
                                <div className="flex items-center mt-2 text-sm text-green-600">
                                  <Zap className="w-4 h-4 mr-1" />
                                  {item.delivery}
                                </div>
                              </div>

                              {/* Price */}
                              <div className="text-right ml-4">
                                <div className="flex items-center space-x-2">
                                  <span className="text-2xl font-bold text-gray-900">
                                    ${item.price}
                                  </span>
                                  {item.originalPrice && (
                                    <span className="text-lg text-gray-500 line-through">
                                      ${item.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm text-green-600 mt-1">
                                  Save ${((item.originalPrice || item.price) - item.price).toFixed(2)}
                                </div>
                              </div>
                            </div>

                            {/* Quantity Controls & Actions */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center space-x-3">
                                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="px-4 py-2 text-gray-900 font-medium min-w-12 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                                <span className="text-sm text-gray-600">
                                  = ${(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>

                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => moveToWishlist(item.id)}
                                  className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                                  title="Move to Wishlist"
                                >
                                  <Heart className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                                  title="Remove Item"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Continue Shopping */}
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors duration-200">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Continue Shopping
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
                    <p className="text-sm text-gray-600">Your payment information is protected</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                    <Truck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Delivery</h3>
                    <p className="text-sm text-gray-600">Get immediate access after purchase</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                    <RotateCcw className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Money Back Guarantee</h3>
                    <p className="text-sm text-gray-600">30-day refund policy</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 sticky top-6">
                  {/* Summary Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                  </div>

                  <div className="p-6">
                    {/* Price Breakdown */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                        <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                      </div>
                      
                      {isPromoApplied && (
                        <div className="flex justify-between text-sm">
                          <span className="text-green-600">Discount (10%)</span>
                          <span className="text-green-600">-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tax</span>
                        <span className="text-gray-900">${tax.toFixed(2)}</span>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between text-lg font-semibold">
                          <span className="text-gray-900">Total</span>
                          <span className="text-gray-900">${total.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Including ${tax.toFixed(2)} tax</p>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Promo Code
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter promo code"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          disabled={isPromoApplied}
                        />
                        <button
                          onClick={applyPromoCode}
                          disabled={isPromoApplied || !promoCode.trim()}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isPromoApplied
                              ? 'bg-green-100 text-green-700 cursor-not-allowed'
                              : promoCode.trim()
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {isPromoApplied ? 'Applied' : 'Apply'}
                        </button>
                      </div>
                      {isPromoApplied && (
                        <p className="text-green-600 text-sm mt-2 flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          10% discount applied successfully!
                        </p>
                      )}
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mb-4">
                      <Lock className="w-5 h-5 mr-2" />
                      Proceed to Checkout
                    </button>

                    {/* Security Notice */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500 flex items-center justify-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Secure checkout powered by SSL encryption
                      </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">We Accept</h3>
                      <div className="flex justify-center space-x-4">
                        <div className="w-12 h-8 bg-gray-100 rounded border flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="w-12 h-8 bg-gray-100 rounded border flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="w-12 h-8 bg-gray-100 rounded border flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Support */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
                  <div className="flex items-start space-x-4">
                    <UserCheck className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Our support team is here to help with any questions about your order.
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Contact Support ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recommended Products */}
          {cartItems.length > 0 && (
            <section className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  View All
                  <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-900">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;