import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCartStore } from '../context/CartContext'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const totalItems = useCartStore((state) => state.getTotalItems())

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 w-full z-50 bg-[#fff4f3]/80 backdrop-blur-xl bg-gradient-to-b from-[#ffedeb] to-transparent shadow-[0_4px_30px_rgba(78,33,32,0.04)]">
      <nav className="flex justify-between items-center px-6 py-4 w-full">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[#ac2c00]">restaurant</span>
          <span className="text-xl font-black text-[#4e2120] font-headline tracking-tight">Culinary Editorial</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-label font-bold uppercase tracking-widest text-[11px] transition-all ${
              isActive('/') ? 'text-[#ac2c00]' : 'text-[#834c4b] hover:opacity-80'
            }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`font-label font-bold uppercase tracking-widest text-[11px] transition-all ${
              isActive('/menu') ? 'text-[#ac2c00]' : 'text-[#834c4b] hover:opacity-80'
            }`}
          >
            Menu
          </Link>
          <Link
            to="/orders"
            className={`font-label font-bold uppercase tracking-widest text-[11px] transition-all ${
              isActive('/orders') ? 'text-[#ac2c00]' : 'text-[#834c4b] hover:opacity-80'
            }`}
          >
            Orders
          </Link>
          <Link
            to="/contact"
            className={`font-label font-bold uppercase tracking-widest text-[11px] transition-all ${
              isActive('/contact') ? 'text-[#ac2c00]' : 'text-[#834c4b] hover:opacity-80'
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/orders')}
            className="active:scale-95 duration-200 transition-opacity hover:opacity-80 relative"
          >
            <span className="material-symbols-outlined text-[#ac2c00]">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
