import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="md:hidden fixed bottom-0 w-full rounded-t-[2.25rem] z-50 bg-[#fff4f3]/90 backdrop-blur-2xl border-t border-[#4e2120]/5 shadow-[0_-12px_40px_rgba(78,33,32,0.08)]">
      <div className="flex justify-around items-center px-4 pb-6 pt-3 w-full">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center rounded-full px-5 py-2 active:scale-90 transition-transform duration-300 ease-out ${
            isActive('/') 
              ? 'bg-gradient-to-br from-[#ac2c00] to-[#ff7852] text-white' 
              : 'text-[#834c4b] hover:text-[#ac2c00]'
          }`}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Home</span>
        </Link>

        <Link
          to="/menu"
          className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-300 ease-out ${
            isActive('/menu') 
              ? 'bg-gradient-to-br from-[#ac2c00] to-[#ff7852] text-white rounded-full' 
              : 'text-[#834c4b] hover:text-[#ac2c00]'
          }`}
        >
          <span className="material-symbols-outlined">restaurant_menu</span>
          <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Menu</span>
        </Link>

        <Link
          to="/orders"
          className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-300 ease-out ${
            isActive('/orders') 
              ? 'bg-gradient-to-br from-[#ac2c00] to-[#ff7852] text-white rounded-full' 
              : 'text-[#834c4b] hover:text-[#ac2c00]'
          }`}
        >
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Orders</span>
        </Link>

        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-300 ease-out ${
            isActive('/contact') 
              ? 'bg-gradient-to-br from-[#ac2c00] to-[#ff7852] text-white rounded-full' 
              : 'text-[#834c4b] hover:text-[#ac2c00]'
          }`}
        >
          <span className="material-symbols-outlined">chat</span>
          <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">Contact</span>
        </Link>
      </div>
    </nav>
  )
}
