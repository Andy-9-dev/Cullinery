import { useCartStore } from '../context/CartContext'

export default function ProductCard({ id, name, price, description, image, badge, badgeColor }) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToOrder = () => {
    addItem({
      id,
      name,
      price,
      image,
    })
  }

  const badgeClasses = {
    seasonal: 'bg-secondary text-on-secondary',
    signature: 'bg-primary text-on-primary',
  }

  return (
    <div className="min-w-[320px] md:min-w-[400px] snap-start group flex flex-col h-full">
      <div className="bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(78,33,32,0.1)] flex flex-col h-full">
        <div className="h-64 overflow-hidden relative flex-shrink-0">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={image}
            alt={name}
          />
          {badge && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 ${badgeClasses[badgeColor] || badgeClasses.seasonal} rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                {badge}
              </span>
            </div>
          )}
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="font-headline font-bold text-2xl text-on-surface leading-tight flex-1">{name}</h3>
            <span className="font-headline font-bold text-primary text-xl flex-shrink-0">₦{price.toLocaleString()}</span>
          </div>
          <p className="text-on-surface-variant body-lg mb-8 line-clamp-2 flex-grow">{description}</p>
          <button
            onClick={handleAddToOrder}
            className="w-full py-4 border border-outline-variant/20 rounded-full font-bold text-on-surface hover:bg-primary hover:text-on-primary hover:border-transparent transition-all active:scale-95 mt-auto"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  )
}
