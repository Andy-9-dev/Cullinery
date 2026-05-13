import { useState, useEffect } from 'react'
import { fetchNigerianFoods, organizeFoodsByCategory } from '../services/spoonacularService'
import { useCartStore } from '../context/CartContext'
import '../styles/menu.css'

export default function Menu() {
  const [foods, setFoods] = useState({
    smallChops: [],
    mainDishes: [],
    soupsSwallows: [],
    mocktails: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    const loadFoods = async () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedFoods = await fetchNigerianFoods()
        
        if (fetchedFoods.length === 0) {
          setError('No menu items available. Please try again later.')
          return
        }
        
        const organized = organizeFoodsByCategory(fetchedFoods)
        setFoods(organized)
      } catch (err) {
        setError('Failed to load menu. Please refresh the page.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadFoods()
  }, [])

  const handleAddToCart = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
  }

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23ffe1e0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23834c4b" text-anchor="middle" dy=".3em"%3ENigerian Food%3C/text%3E%3C/svg%3E'
  }

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-6 pb-32 pt-12">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-on-surface-variant">Loading authentic Nigerian menu...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-6 pb-32 pt-12">
        <div className="text-center">
          <p className="text-error mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold"
          >
            Retry
          </button>
        </div>
      </main>
    )
  }

  const hasAnyFood = foods.smallChops.length > 0 || foods.mainDishes.length > 0 || foods.soupsSwallows.length > 0 || foods.mocktails.length > 0
  
  // Log what we got
  console.log('Menu loaded with:', {
    smallChops: foods.smallChops.length,
    mainDishes: foods.mainDishes.length,
    soupsSwallows: foods.soupsSwallows.length,
    mocktails: foods.mocktails.length,
  })

  return (
    <main className="max-w-7xl mx-auto px-6 pb-32">
      {/* Hero Section */}
      <section className="py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase rounded-full">
            Naija Fusion Collection
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter">
            Bold Flavors, <br />
            <span className="text-primary italic">Authentically</span> Naija.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-md leading-relaxed">
            Explore our seasonally updated menu where traditional Nigerian recipes meet modern culinary artistry. Every bite is a celebration of home.
          </p>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] rotate-3 bg-surface-container-low">
            {foods.mainDishes[0] && (
              <img
                className="w-full h-full object-cover menu-image"
                src={foods.mainDishes[0].image}
                alt={foods.mainDishes[0].name}
                onError={handleImageError}
              />
            )}
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] -rotate-6 border-8 border-surface bg-surface-container-low">
            {foods.mainDishes[1] && (
              <img
                className="w-full h-full object-cover menu-image"
                src={foods.mainDishes[1].image}
                alt={foods.mainDishes[1].name}
                onError={handleImageError}
              />
            )}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="sticky top-20 z-40 py-6 bg-surface/80 backdrop-blur-md -mx-6 px-6 hide-scrollbar overflow-x-auto flex gap-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide flex-shrink-0 transition-colors ${
            selectedCategory === 'all'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          All Items
        </button>
        <button
          onClick={() => setSelectedCategory('smallChops')}
          className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide flex-shrink-0 transition-colors ${
            selectedCategory === 'smallChops'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          Small Chops
        </button>
        <button
          onClick={() => setSelectedCategory('mainDishes')}
          className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide flex-shrink-0 transition-colors ${
            selectedCategory === 'mainDishes'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          Main Dishes
        </button>
        <button
          onClick={() => setSelectedCategory('soupsSwallows')}
          className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide flex-shrink-0 transition-colors ${
            selectedCategory === 'soupsSwallows'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          Soups & Swallows
        </button>
        <button
          onClick={() => setSelectedCategory('mocktails')}
          className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide flex-shrink-0 transition-colors ${
            selectedCategory === 'mocktails'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
          }`}
        >
          Mocktails
        </button>
      </nav>

      {/* Menu Bento Grid */}
      {hasAnyFood ? (
        <div className="mt-12 space-y-24">
          {/* All Items Section - Mixed */}
          {selectedCategory === 'all' && (
            <section id="all-items">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="text-3xl font-headline font-bold">All Items</h3>
                <div className="h-px flex-1 mx-8 bg-surface-container-high"></div>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Everything</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {[...foods.smallChops, ...foods.mainDishes, ...foods.soupsSwallows, ...foods.mocktails].map((item) => (
                  <div key={item.id} className="group relative bg-surface-container-low p-6 rounded-xl transition-all duration-300 hover:bg-surface-container-highest">
                    <div className="relative -mt-16 mb-6 aspect-square rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] transition-transform duration-500 group-hover:-translate-y-2 bg-surface-container-lowest">
                      <img
                        className="w-full h-full object-cover menu-image"
                        src={item.image}
                        alt={item.name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-headline font-bold text-on-surface">{item.name}</h4>
                      <span className="text-primary font-bold">₦{item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-md">
                        {item.tag}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(78,33,32,0.08)] active:scale-90 transition-transform"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Small Chops Section */}
          {selectedCategory === 'smallChops' && foods.smallChops.length > 0 && (
            <section id="small-chops">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="text-3xl font-headline font-bold">Small Chops</h3>
                <div className="h-px flex-1 mx-8 bg-surface-container-high"></div>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Starters</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {foods.smallChops.map((item) => (
                  <div key={item.id} className="group relative bg-surface-container-low p-6 rounded-xl transition-all duration-300 hover:bg-surface-container-highest">
                    <div className="relative -mt-16 mb-6 aspect-square rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] transition-transform duration-500 group-hover:-translate-y-2 bg-surface-container-lowest">
                      <img
                        className="w-full h-full object-cover menu-image"
                        src={item.image}
                        alt={item.name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-headline font-bold text-on-surface">{item.name}</h4>
                      <span className="text-primary font-bold">₦{item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-md">
                        {item.tag}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(78,33,32,0.08)] active:scale-90 transition-transform"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Main Dishes Section */}
          {selectedCategory === 'mainDishes' && foods.mainDishes.length > 0 && (
            <section id="main-dishes">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="text-3xl font-headline font-bold">Main Dishes</h3>
                <div className="h-px flex-1 mx-8 bg-surface-container-high"></div>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Signature Entrees</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Featured Item */}
                {foods.mainDishes[0] && (
                  <div className="lg:col-span-2 group flex flex-col md:flex-row bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)]">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 menu-image"
                        src={foods.mainDishes[0].image}
                        alt={foods.mainDishes[0].name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-3xl font-headline font-bold text-on-surface leading-tight">
                          {foods.mainDishes[0].name}
                        </h4>
                        <span className="text-2xl font-bold text-primary">₦{foods.mainDishes[0].price.toLocaleString()}</span>
                      </div>
                      <p className="text-on-surface-variant mb-8 leading-relaxed">{foods.mainDishes[0].description}</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleAddToCart(foods.mainDishes[0])}
                          className="flex-1 bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-[0_12px_40px_rgba(78,33,32,0.08)]"
                        >
                          <span className="material-symbols-outlined">add_shopping_cart</span>
                          Add to Order
                        </button>
                        <button className="w-14 h-14 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                          <span className="material-symbols-outlined">favorite</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Other Main Dishes */}
                {foods.mainDishes.slice(1).map((item) => (
                  <div key={item.id} className="flex gap-6 items-center p-6 bg-surface-container-low rounded-xl">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 shadow-sm bg-surface-container-lowest">
                      <img
                        className="w-full h-full object-cover menu-image"
                        src={item.image}
                        alt={item.name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-headline font-bold text-lg">{item.name}</h4>
                        <span className="text-primary font-bold">₦{item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mb-3 line-clamp-2">{item.description}</p>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:opacity-70 transition-opacity"
                      >
                        <span className="material-symbols-outlined text-sm">add_circle</span>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Soups & Swallows Section */}
          {selectedCategory === 'soupsSwallows' && foods.soupsSwallows.length > 0 && (
            <section id="soups-swallows">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="text-3xl font-headline font-bold">Soups & Swallows</h3>
                <div className="h-px flex-1 mx-8 bg-surface-container-high"></div>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Traditional</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {foods.soupsSwallows.map((item) => (
                  <div key={item.id} className="group relative bg-surface-container-low p-6 rounded-xl transition-all duration-300 hover:bg-surface-container-highest">
                    <div className="relative -mt-16 mb-6 aspect-square rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] transition-transform duration-500 group-hover:-translate-y-2 bg-surface-container-lowest">
                      <img
                        className="w-full h-full object-cover menu-image"
                        src={item.image}
                        alt={item.name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-headline font-bold text-on-surface">{item.name}</h4>
                      <span className="text-primary font-bold">₦{item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-md">
                        {item.tag}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(78,33,32,0.08)] active:scale-90 transition-transform"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Mocktails Section */}
          {selectedCategory === 'mocktails' && foods.mocktails.length > 0 && (
            <section id="mocktails">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="text-3xl font-headline font-bold">Mocktails</h3>
                <div className="h-px flex-1 mx-8 bg-surface-container-high"></div>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Beverages</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {foods.mocktails.map((item) => (
                  <div key={item.id} className="group relative bg-surface-container-low p-6 rounded-xl transition-all duration-300 hover:bg-surface-container-highest">
                    <div className="relative -mt-16 mb-6 aspect-square rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] transition-transform duration-500 group-hover:-translate-y-2 bg-surface-container-lowest">
                      <img
                        className="w-full h-full object-cover menu-image"
                        src={item.image}
                        alt={item.name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-headline font-bold text-on-surface">{item.name}</h4>
                      <span className="text-primary font-bold">₦{item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-md">
                        {item.tag}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(78,33,32,0.08)] active:scale-90 transition-transform"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-on-surface-variant">No menu items available at the moment.</p>
        </div>
      )}
    </main>
  )
}
