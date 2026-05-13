# Application Architecture

## Component Hierarchy

```
App (Router)
├── Navbar
│   └── Cart Badge (from CartContext)
├── Routes
│   ├── Home Page
│   │   ├── Hero Section
│   │   ├── Carousel
│   │   │   └── ProductCard (x3)
│   │   ├── About Section
│   │   └── Testimonials
│   │       └── TestimonialCard (x3)
│   ├── Menu Page
│   │   └── Product Grid
│   │       └── ProductCard (x6)
│   ├── Orders Page
│   │   ├── Cart Items Display
│   │   │   └── Cart Item (with quantity controls)
│   │   └── Checkout Sidebar
│   │       └── WhatsApp Button
│   └── Contact Page
│       ├── Contact Info Cards
│       └── Contact Form
└── BottomNav (Mobile only)
    └── Navigation Links with active states
```

## State Management (Zustand)

```
CartContext (useCartStore)
├── State
│   └── items: Array<CartItem>
│       ├── id: number
│       ├── name: string
│       ├── price: number
│       ├── image: string
│       └── quantity: number
├── Actions
│   ├── addItem(item)
│   ├── removeItem(itemId)
│   ├── updateQuantity(itemId, quantity)
│   ├── clearCart()
│   ├── getTotalPrice()
│   └── getTotalItems()
└── Consumers
    ├── Navbar (getTotalItems)
    ├── ProductCard (addItem)
    └── Orders Page (all actions)
```

## Data Flow

### Adding Item to Cart

```
ProductCard
    ↓
handleAddToOrder()
    ↓
useCartStore.addItem()
    ↓
CartContext (Zustand)
    ↓
Update state
    ↓
Navbar re-renders (badge updates)
Orders page re-renders (if open)
```

### Checkout Flow

```
Orders Page
    ↓
User enters name/address (optional)
    ↓
Click "Checkout via WhatsApp"
    ↓
Format order message
    ↓
Open WhatsApp with pre-filled message
    ↓
User sends order
```

## Routing Structure

```
BrowserRouter
├── / → Home
│   └── Hero + Carousel + About + Testimonials
├── /menu → Menu
│   └── Product Grid
├── /orders → Orders
│   └── Cart + Checkout
└── /contact → Contact
    └── Contact Info + Form
```

## Component Responsibilities

### Navbar
- Display logo and navigation links
- Show cart badge with item count
- Navigate to cart on icon click
- Sticky positioning

### BottomNav
- Mobile-only navigation
- Active state highlighting
- Quick access to all pages
- Fixed bottom positioning

### ProductCard
- Display product image
- Show name, price, description
- Badge (Seasonal/Signature)
- Add to cart button
- Hover effects

### TestimonialCard
- Display quote
- Show 5-star rating
- Author name and role
- Consistent styling

### Home Page
- Hero section with CTA
- Carousel with navigation
- About section with images
- Testimonials grid

### Menu Page
- Product grid layout
- Responsive columns
- Same ProductCard component

### Orders Page
- Cart items list
- Quantity controls
- Order summary
- WhatsApp checkout
- Optional fields (name, address)

### Contact Page
- Contact information cards
- Contact form
- Location, phone, email, hours

## Styling Architecture

```
Tailwind CSS
├── Custom Theme Colors (50+ colors)
├── Custom Font Families
│   ├── Epilogue (headlines)
│   └── Plus Jakarta Sans (body)
├── Custom Border Radius
├── Responsive Breakpoints
│   ├── Mobile (default)
│   ├── md: 768px
│   └── lg: 1024px
└── Utilities
    ├── Shadows
    ├── Gradients
    ├── Transitions
    └── Transforms
```

## File Dependencies

```
App.jsx
├── Navbar.jsx
│   └── CartContext.js
├── BottomNav.jsx
├── Home.jsx
│   ├── ProductCard.jsx
│   │   └── CartContext.js
│   └── TestimonialCard.jsx
├── Menu.jsx
│   └── ProductCard.jsx
│       └── CartContext.js
├── Orders.jsx
│   └── CartContext.js
└── Contact.jsx
```

## Performance Considerations

### Code Splitting
- React Router automatically splits pages
- Each page loads on demand

### Re-render Optimization
- Zustand only re-renders subscribed components
- ProductCard only re-renders on prop changes
- Navbar only re-renders on cart changes

### Bundle Size
- React: ~42KB
- React Router: ~12KB
- Zustand: ~2KB
- Tailwind: ~50KB (production)
- **Total**: ~106KB gzipped

## Scalability

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx` and `BottomNav.jsx`

### Adding New Products
1. Update product array in page component
2. ProductCard handles rendering

### Adding New Features
1. Create component in `src/components/`
2. Import and use in pages
3. Add state to CartContext if needed

## Testing Strategy

### Unit Tests
- ProductCard (add to cart)
- TestimonialCard (rendering)
- CartContext (add, remove, update)

### Integration Tests
- Navigation between pages
- Cart flow (add → view → checkout)
- WhatsApp link generation

### E2E Tests
- Full user journey
- Mobile responsiveness
- WhatsApp integration

## Deployment Architecture

```
Source Code (GitHub)
    ↓
Build (npm run build)
    ↓
dist/ folder
    ↓
Deploy to CDN
    ↓
Production (Vercel/Netlify)
```

## Environment Variables (Optional)

```
VITE_WHATSAPP_NUMBER=2348012345678
VITE_API_URL=https://api.example.com
```

## Future Enhancements

- [ ] Add localStorage for cart persistence
- [ ] Add backend API integration
- [ ] Add user authentication
- [ ] Add order history
- [ ] Add payment gateway
- [ ] Add admin dashboard
- [ ] Add analytics
- [ ] Add email notifications
- [ ] Add SMS notifications
- [ ] Add real-time order tracking

---

**Architecture Version**: 1.0.0
**Last Updated**: 2024
