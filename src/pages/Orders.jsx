import { useState } from 'react'
import { useCartStore } from '../context/CartContext'

export default function Orders() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const clearCart = useCartStore((state) => state.clearCart)

  const [fulfillment, setFulfillment] = useState('delivery')
  const [address, setAddress] = useState('')
  const [specialInstructions, setSpecialInstructions] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  const totalPrice = getTotalPrice()
  const deliveryFee = fulfillment === 'delivery' ? 2500 : 0
  const tax = Math.round(totalPrice * 0.075)
  const finalTotal = totalPrice + deliveryFee + tax

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert('Your cart is empty')
      return
    }

    if (fulfillment === 'delivery' && !address.trim()) {
      alert('Please enter a delivery address')
      return
    }

    const orderMessage = items
      .map((item) => `${item.name} x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`)
      .join('\n')

    const message = `🍽️ *Order Details*\n${orderMessage}\n\n*Subtotal:* ₦${totalPrice.toLocaleString()}\n*Delivery:* ₦${deliveryFee.toLocaleString()}\n*Tax:* ₦${tax.toLocaleString()}\n*Total:* ₦${finalTotal.toLocaleString()}\n\n*Fulfillment:* ${fulfillment === 'delivery' ? 'Delivery' : 'Pickup'}${
      address ? `\n*Address:* ${address}` : ''
    }${specialInstructions ? `\n*Special Instructions:* ${specialInstructions}` : ''}\n*Payment:* ${paymentMethod === 'card' ? 'Card' : 'Cash on Delivery'}`

    const whatsappUrl = `https://wa.me/2348012345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (items.length === 0) {
    return (
      <main className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto">
        {/* Empty State Content Canvas */}
        <div className="w-full flex flex-col items-center text-center">
          {/* High-End Editorial Illustration Container */}
          <div className="relative w-full max-w-md mb-12">
            <div className="absolute inset-0 bg-surface-container-low rounded-full blur-3xl opacity-60 transform scale-110"></div>
            <div className="relative z-10 aspect-square flex items-center justify-center p-8">
              <div className="relative w-full h-full rounded-full bg-surface-container-lowest editorial-shadow overflow-hidden group">
                <img
                  alt="Empty designer plate"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5AX1DTt6aRW0U1dfpAi9GxwiTDVy1R-Ad7BXbfg7ir76QktgLqlM8JS2kWkqfXiCaf9OHLgQb5Yu2IQmECRnbSRuUkJJTKZKOnErEWMqIYPF7TGMdpMghFdjwYusnDhluYoTY-u63EnZdfRY1PlZAJK7Ut5g5qHrYx3MdoLsNYdL2H7DPvjdEAOYgWkX4h3iOrxPx8AsP8EZLBCg9tutN1NftQ9ucxPaDLgh5K_cQrenJ7bb_Cl7Ci76sOcR9ozRZ853U4OeuMA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/40 to-transparent"></div>
              </div>
              {/* Floating Asymmetric Accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tertiary-container rounded-full editorial-shadow flex items-center justify-center transform rotate-12">
                <span className="material-symbols-outlined text-on-tertiary-container text-4xl">restaurant</span>
              </div>
              <div className="absolute -bottom-2 -left-6 w-20 h-20 bg-secondary-container rounded-xl editorial-shadow flex items-center justify-center transform -rotate-6">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">eco</span>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className="space-y-6 max-w-2xl">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tight leading-tight">
              Your plate is empty.
            </h2>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Our kitchen is ready when you are. Explore the flavors of Lagos and start your culinary journey.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 w-full flex flex-col items-center gap-6">
            <a
              href="/menu"
              className="signature-gradient text-on-primary font-body font-bold px-12 py-5 rounded-full text-lg editorial-shadow active:scale-95 transition-all hover:opacity-90 w-full md:w-auto inline-block text-center"
            >
              Browse the Menu
            </a>

            {/* Suggestions Bento Grid (Subtle Hinting) */}
            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl text-left flex items-start gap-4 hover:bg-surface-container-high transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">local_fire_department</span>
                <div>
                  <p className="font-headline font-bold text-on-surface">Spicy Jollof</p>
                  <p className="font-body text-sm text-on-surface-variant">Lagos' most loved classic.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl text-left flex items-start gap-4 hover:bg-surface-container-high transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">set_meal</span>
                <div>
                  <p className="font-headline font-bold text-on-surface">Grilled Croaker</p>
                  <p className="font-body text-sm text-on-surface-variant">Fresh catch, flame-grilled.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl text-left flex items-start gap-4 hover:bg-surface-container-high transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">bakery_dining</span>
                <div>
                  <p className="font-headline font-bold text-on-surface">Suya Platters</p>
                  <p className="font-body text-sm text-on-surface-variant">Signature spice-rubbed beef.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-surface pb-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 border-b border-outline-variant/20 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Checkout</span>
          <h1 className="font-headline font-black text-5xl md:text-6xl text-on-surface mt-2">Final Review</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Cart Items & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Fulfillment Toggle */}
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Fulfillment</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setFulfillment('delivery')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all ${
                    fulfillment === 'delivery'
                      ? 'bg-primary text-on-primary shadow-[0_8px_24px_rgba(172,44,0,0.2)]'
                      : 'bg-surface-container border border-outline-variant/20 text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  🚗 Delivery
                </button>
                <button
                  onClick={() => setFulfillment('pickup')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all ${
                    fulfillment === 'pickup'
                      ? 'bg-primary text-on-primary shadow-[0_8px_24px_rgba(172,44,0,0.2)]'
                      : 'bg-surface-container border border-outline-variant/20 text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  🏪 Pickup
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h2 className="font-headline font-bold text-lg text-on-surface mb-6">Order Items</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-surface-container rounded-xl p-4 flex gap-4 items-start">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-headline font-bold text-on-surface">{item.name}</h3>
                      <p className="text-on-surface-variant text-sm">₦{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-high rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded flex items-center justify-center hover:bg-primary/20 transition-all text-on-surface"
                      >
                        −
                      </button>
                      <span className="font-bold w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded flex items-center justify-center hover:bg-primary/20 transition-all text-on-surface"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-headline font-bold text-primary">₦{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-error hover:opacity-70 transition-opacity flex-shrink-0"
                    >
                      <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            {fulfillment === 'delivery' && (
              <div className="bg-surface-container-low rounded-2xl p-6">
                <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Delivery Address</h2>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  rows="3"
                  className="w-full px-4 py-3 bg-surface-container border border-outline-variant/20 rounded-xl text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none"
                />
              </div>
            )}

            {/* Special Instructions */}
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Special Instructions</h2>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Add any special requests or dietary preferences"
                rows="3"
                className="w-full px-4 py-3 bg-surface-container border border-outline-variant/20 rounded-xl text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none"
              />
            </div>

            {/* Payment Method */}
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 bg-surface-container rounded-xl cursor-pointer hover:bg-surface-container-high transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="font-bold text-on-surface">💳 Card Payment</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-surface-container rounded-xl cursor-pointer hover:bg-surface-container-high transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="font-bold text-on-surface">💵 Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container-high rounded-2xl p-8 sticky top-24 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <h2 className="font-headline font-bold text-2xl text-on-surface mb-8">Order Summary</h2>

              <div className="space-y-4 mb-8 pb-8 border-b border-outline-variant/20">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>
                {fulfillment === 'delivery' && (
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Delivery Fee</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-on-surface-variant">
                  <span>Tax (7.5%)</span>
                  <span>₦{tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between font-headline font-bold text-xl text-on-surface mb-8">
                <span>Total</span>
                <span className="text-primary">₦{finalTotal.toLocaleString()}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={items.length === 0}
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full shadow-[0_12px_40px_rgba(172,44,0,0.2)] active:scale-95 transition-all hover:shadow-[0_16px_50px_rgba(172,44,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Your Order
              </button>

              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full mt-3 py-3 border border-outline-variant/20 text-on-surface font-bold rounded-full hover:bg-surface-container transition-all"
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
