import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import TestimonialCard from '../components/TestimonialCard'
import { fetchNigerianFoods } from '../services/spoonacularService'
import signatureSmokey from '../assets/images/Signature Smokey Jollof.webp'
import poundedYamEgusi from '../assets/images/Pounded Yam & Egusi.webp'
import wagyuBeefSuya from '../assets/images/Wagyu Beef Suya.webp'

const HERO_PRODUCTS = [
  {
    id: 1,
    name: 'Signature Smokey Jollof',
    price: 12500,
    description: 'Long-grain parboiled rice infused with scotch bonnet, wood-fire smoke, and served with sweet dodo.',
    image: signatureSmokey,
    badge: 'Seasonal',
    badgeColor: 'seasonal',
  },
  {
    id: 2,
    name: 'Pounded Yam & Egusi',
    price: 18000,
    description: 'Silky smooth yam petals served with melon seed soup, fresh spinach, and slow-braised assorted meats.',
    image: poundedYamEgusi,
    badge: 'Signature',
    badgeColor: 'signature',
  },
  {
    id: 3,
    name: 'Wagyu Beef Suya',
    price: 15000,
    description: 'Flame-grilled tenderloin strips dusted in artisanal Yaji spice, served with red onion petals and vine tomatoes.',
    image: wagyuBeefSuya,
    badge: null,
    badgeColor: null,
  },
]

const TESTIMONIALS = [
  {
    quote: 'The best Jollof Rice in all of Victoria Island. The smokey flavor is authentic and the presentation is world-class.',
    author: 'Amara Okoro',
    role: 'Lagos Food Critic',
  },
  {
    quote: 'Finally, a place that respects the craft of Nigerian cooking. The Egusi soup took me back to my childhood, but with a Michelin-level touch.',
    author: 'Femi Adebayo',
    role: 'Ikoyi Resident',
  },
  {
    quote: 'Seamless delivery to Lekki Phase 1. The food arrived piping hot and beautifully packaged. Truly an editorial experience.',
    author: 'Zainab Sanni',
    role: 'Creative Director',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const carouselRef = useRef(null)
  const [menuItems, setMenuItems] = useState([])
  const [scrollDirection, setScrollDirection] = useState(1) // 1 for right, -1 for left

  useEffect(() => {
    const loadMenu = async () => {
      const foods = await fetchNigerianFoods()
      // Get about 70% of items (20 out of 29)
      setMenuItems(foods.slice(0, 20))
    }
    loadMenu()
  }, [])

  // Continuous auto-scroll carousel
  useEffect(() => {
    if (!carouselRef.current || menuItems.length === 0) return

    const carousel = carouselRef.current
    const scrollSpeed = 1 // pixels per frame
    let animationId

    const animate = () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      const currentScroll = carousel.scrollLeft

      // Check if we've reached the end or beginning
      if (currentScroll >= maxScroll) {
        setScrollDirection(-1) // Start scrolling left
      } else if (currentScroll <= 0) {
        setScrollDirection(1) // Start scrolling right
      }

      // Scroll continuously
      carousel.scrollLeft += scrollSpeed * scrollDirection
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [menuItems, scrollDirection])

  return (
    <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
      {/* Hero Section */}
      <section className="relative mb-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-on-surface mb-6">
              The Art of <span className="text-primary italic">Lagos</span> Dining.
            </h1>
            <p className="text-body text-lg md:text-xl text-on-surface-variant max-w-md mb-10 leading-relaxed">
              An editorial journey through Nigerian heritage flavors, curated by master chefs in the heart of Victoria Island.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/menu')}
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full shadow-[0_12px_40px_rgba(172,44,0,0.2)] active:scale-95 transition-all hover:shadow-[0_16px_50px_rgba(172,44,0,0.3)]"
              >
                Order Now
              </button>
              <button className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-xl active:scale-95 transition-all hover:opacity-90">
                View Journal
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(78,33,32,0.15)] rotate-2 scale-105 md:scale-100">
              <img
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAaNs4bNfA4j-MGQBWHfzYy2YwVa5GZ_Z9iv21G5du-JBCvnfrHHIgdhV_CHx__7F4rkCHUIqNO5c7lLTjmqXbrH-3AzL6joHnUrKdwX4p0PwYOBqDRCZ0622HMIvIH5OzKqfejHrBnEecEuwHnPrBLfsTQndeeCM6-0kBIlaj7S71K8w0qH0cXIexWZU6q5R1D6hxWS2GTOdYtteAlwP7b8SrR25s95wm8WREW4z56o0YRh7D0pkJhbRg-9zGZqxT2IcvVvpQpQ"
                alt="ultra close-up of premium smokey jollof rice"
              />
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_40px_rgba(78,33,32,0.08)] max-w-[200px] hidden md:block -rotate-3 border border-outline-variant/10">
              <span className="text-primary font-headline font-bold text-3xl">100%</span>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1">Locally Sourced from Epe Markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Specials Carousel */}
      <section className="mt-24">
        <div className="mb-12">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Chef's Selection</span>
          <h2 className="font-headline font-extrabold text-4xl mt-2">Today's Specials</h2>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-8 pb-8 hide-scrollbar snap-x"
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
        >
          {menuItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* About Us Bento */}
      <section className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-surface-container-high rounded-xl p-12 flex flex-col justify-center">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Philosophy</span>
            <h2 className="font-headline font-black text-4xl md:text-5xl text-on-surface mb-6 leading-tight">
              Tradition Reimagined for the Modern Palate.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We believe that Nigerian cuisine is a tapestry of history and soul. Our kitchen in Lekki Phase 1 is dedicated to elevated storytelling through indigenous ingredients, sourcing the finest produce from across the West African coast.
            </p>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-16 rounded-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4KuwG0ZizaDUUH3t4Cv1_kTVDgbJJWAyWztC0fJYfjoxmp2rugUy4y8ON-jTDCI074VG2zZcHwbQli0DP7gi2Vl3KWlrG5Lh_9tbRWTzd757RrHE8oGAZK88YjLTK25YbGDNKFjoNwfzl7cEShl8Z0k6Zm4GX_ZqDBy7OStGzyLyqIJZPvT_cz1RncSihEFi6qp7muC3hVNy10_DGZCT92_eOac_od33AVkLv_qmbfCH8uAl8drrChf-IO1tCJVv6HFiGzBMGtQ"
                alt="Chef Tunde Balogun"
              />
              <div>
                <p className="font-bold text-on-surface">Chef Tunde Balogun</p>
                <p className="text-sm text-on-surface-variant">Executive Chef & Curator</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-rows-2 gap-8">
            <div className="bg-surface-container rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8LIauQqH0MFp-vtwahZeJy7QGyhv5chy-DU-1itSjt4QE5QgAA2jxqZ3XciKkx0SWIoWiJwNmIKuKVqVMCLiQdEHhAdgsTbh5gPuak9RDCVkgxoViKuIQ1wtLGe5SSFot1VX2tB2VedHITN5E2HoczMrRs55QWv1dHv-Euko82kTrBK2qlEGwkc8zvV4sevdrZeKZ5ThYU4GHsCmOVouPbU91DMuPYev_aoVAjpz20yrWdn123dn8l8J9kRmAxaInQpJpIsBnfw"
                alt="Lagos Coast Bounty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex items-end">
                <p className="text-white font-headline font-bold text-xl">Lagos Coast Bounty</p>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxHK4DpgOC_IMadERd7mL7JtkMlpnmBOB6o7xhO_sncWN2Aih__b15wiZkciS7tdZssbH2veYGgdDlOKFnt3D5zi2gVy3WHVOCdHrGF4-YagN4LslVAXl4VYKSs9m_kgdgT_nB_6nYMWFbGMwfFRoqS-8a2b0Vt-Ha4_xZtsxyUhWlqVubLMGHxfYkYqwWNKVNimFivl41MjA0eDTgf1jAQEpv4CjdbeY4N4uRrdSlVs4dTyAMrWkvcNmjMUZE7pZslzfzKw9W5w"
                alt="Ancestral Elixirs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex items-end">
                <p className="text-white font-headline font-bold text-xl">Ancestral Elixirs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-32 mb-20">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Testimonials</span>
          <h2 className="font-headline font-black text-4xl mt-2">Kind Words from Our Guests</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </main>
  )
}
