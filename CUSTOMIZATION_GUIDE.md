# Customization Guide

## Common Customizations

### 1. Update WhatsApp Number

**File**: `src/pages/Orders.jsx` (Line 42)

```javascript
// BEFORE
const whatsappUrl = `https://wa.me/2348012345678?text=${encodeURIComponent(message)}`

// AFTER
const whatsappUrl = `https://wa.me/YOUR_COUNTRY_CODE_AND_NUMBER?text=${encodeURIComponent(message)}`
```

**Format**: Country code + number (no + or spaces)
- Nigeria: `2348012345678`
- USA: `12025551234`
- UK: `441632960000`

---

### 2. Add New Product

**File**: `src/pages/Menu.jsx` or `src/pages/Home.jsx`

```javascript
const MENU_ITEMS = [
  // ... existing items
  {
    id: 7,
    name: 'New Dish Name',
    price: 15000,
    description: 'Detailed description of the dish',
    image: 'https://your-image-url.com/image.jpg',
    badge: 'New',
    badgeColor: 'seasonal', // or 'signature'
  },
]
```

**Badge Options**:
- `badgeColor: 'seasonal'` - Green badge
- `badgeColor: 'signature'` - Red badge
- `badge: null` - No badge

---

### 3. Change Theme Colors

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#ac2c00',           // Main brand color
      'primary-container': '#ff7852', // Light primary
      'secondary': '#176a21',         // Secondary color
      'tertiary': '#765600',          // Accent color
      'on-surface': '#4e2120',        // Text color
      // ... more colors
    },
  },
}
```

**Common Colors to Change**:
- `primary` - Main brand color
- `secondary` - Secondary accent
- `tertiary` - Tertiary accent
- `on-surface` - Text color
- `background` - Background color

---

### 4. Update Contact Information

**File**: `src/pages/Contact.jsx`

```javascript
// Location
<p className="text-on-surface-variant">Your Location Here</p>

// Phone
<p className="text-on-surface-variant">+234 XXX XXX XXXX</p>

// Email
<p className="text-on-surface-variant">your@email.com</p>

// Hours
<p className="text-on-surface-variant">Mon - Sun: 11:00 AM - 10:00 PM</p>
```

---

### 5. Change Logo/Branding

**File**: `src/components/Navbar.jsx`

```javascript
// Change icon
<span className="material-symbols-outlined text-[#ac2c00]">restaurant</span>

// Change text
<span className="text-xl font-black text-[#4e2120] font-headline tracking-tight">
  Your Brand Name
</span>
```

**Available Icons**: [Material Symbols](https://fonts.google.com/icons)

---

### 6. Add Cart Persistence (localStorage)

**File**: `src/context/CartContext.js`

```javascript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.id === item.id)
        if (existingItem) {
          return {
            items: state.items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }
        }
        return { items: [...state.items, { ...item, quantity: 1 }] }
      }),

      // ... rest of the store
    }),
    {
      name: 'cart-storage', // localStorage key
    }
  )
)
```

---

### 7. Change Fonts

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  headline: ['Your Font Name'],
  body: ['Your Font Name'],
  label: ['Your Font Name'],
}
```

**File**: `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

---

### 8. Modify Carousel Items

**File**: `src/pages/Home.jsx`

```javascript
const PRODUCTS = [
  {
    id: 1,
    name: 'Signature Smokey Jollof',
    price: 12500,
    description: 'Your description',
    image: 'your-image-url',
    badge: 'Seasonal',
    badgeColor: 'seasonal',
  },
  // Add or remove items here
]
```

---

### 9. Change Button Styles

**File**: Any component with buttons

```javascript
// Primary button
<button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full">
  Button Text
</button>

// Secondary button
<button className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-xl">
  Button Text
</button>

// Outline button
<button className="px-8 py-4 border border-outline-variant/20 rounded-full font-bold">
  Button Text
</button>
```

---

### 10. Add New Page

**Step 1**: Create new page file `src/pages/NewPage.jsx`

```javascript
export default function NewPage() {
  return (
    <main className="pb-24">
      <section className="px-6 pt-8 md:pt-16 max-w-7xl mx-auto">
        <h1 className="font-headline font-black text-5xl">Page Title</h1>
        {/* Your content */}
      </section>
    </main>
  )
}
```

**Step 2**: Add route in `src/App.jsx`

```javascript
import NewPage from './pages/NewPage'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

**Step 3**: Add navigation link in `src/components/Navbar.jsx`

```javascript
<Link to="/new-page" className="font-label font-bold uppercase tracking-widest text-[11px] text-[#834c4b] transition-opacity hover:opacity-80">
  New Page
</Link>
```

---

### 11. Customize Order Message Format

**File**: `src/pages/Orders.jsx` (Line 30-40)

```javascript
// BEFORE
const orderMessage = items
  .map((item) => `${item.name} x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`)
  .join('\n')

// AFTER - Custom format
const orderMessage = items
  .map((item) => `• ${item.name}\n  Qty: ${item.quantity}\n  Price: ₦${(item.price * item.quantity).toLocaleString()}`)
  .join('\n\n')
```

---

### 12. Add Backend API Integration

**File**: Create `src/services/api.js`

```javascript
const API_URL = 'https://your-api.com'

export const submitOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  })
  return response.json()
}

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`)
  return response.json()
}
```

**File**: `src/pages/Orders.jsx`

```javascript
import { submitOrder } from '../services/api'

const handleCheckout = async () => {
  try {
    const result = await submitOrder({
      items,
      name,
      address,
      total: totalPrice,
    })
    // Handle response
  } catch (error) {
    console.error('Order failed:', error)
  }
}
```

---

### 13. Add Analytics

**File**: `src/App.jsx`

```javascript
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    // Track page view
    console.log('Page viewed:', location.pathname)
    // Send to analytics service
  }, [location])

  // ... rest of app
}
```

---

### 14. Change Responsive Breakpoints

**File**: `tailwind.config.js`

```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
```

---

### 15. Add Loading States

**File**: Any component

```javascript
import { useState } from 'react'

export default function Component() {
  const [loading, setLoading] = useState(false)

  const handleAction = async () => {
    setLoading(true)
    try {
      // Do something
    } finally {
      setLoading(false)
    }
  }

  return (
    <button disabled={loading} onClick={handleAction}>
      {loading ? 'Loading...' : 'Click Me'}
    </button>
  )
}
```

---

## Environment Variables

**File**: `.env.local`

```
VITE_WHATSAPP_NUMBER=2348012345678
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Savor & Hearth
```

**Usage**: `import.meta.env.VITE_WHATSAPP_NUMBER`

---

## Styling Tips

### Add Custom Spacing
```javascript
className="p-8"  // padding
className="m-4"  // margin
className="gap-6" // gap between flex items
```

### Add Custom Colors
```javascript
className="text-primary"           // Primary color
className="bg-secondary-container" // Background
className="border-outline-variant" // Border
```

### Add Responsive Classes
```javascript
className="text-2xl md:text-4xl lg:text-6xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="hidden md:flex"
```

---

## Common Issues & Solutions

### Issue: Cart not persisting
**Solution**: Add localStorage middleware (see section 6)

### Issue: Images not loading
**Solution**: Check image URLs are valid and accessible

### Issue: WhatsApp link not working
**Solution**: Verify phone number format (country code + number, no + or spaces)

### Issue: Styles not applying
**Solution**: Clear Tailwind cache: `rm -rf node_modules/.cache`

### Issue: Port 3000 in use
**Solution**: `npm run dev -- --port 3001`

---

## Performance Tips

1. **Optimize Images**: Use WebP format, compress before uploading
2. **Lazy Load Images**: Add `loading="lazy"` to img tags
3. **Code Split**: React Router does this automatically
4. **Minify CSS**: Tailwind does this in production
5. **Cache Busting**: Vite handles this automatically

---

## Deployment Tips

1. **Vercel**: Push to GitHub, connect to Vercel
2. **Netlify**: Drag and drop `dist/` folder
3. **GitHub Pages**: Use `gh-pages` package
4. **Custom Server**: Copy `dist/` to server

---

**Need more help?** Check the other documentation files:
- README.md - Full documentation
- SETUP.md - Setup instructions
- QUICK_START.md - Quick reference
- ARCHITECTURE.md - System design
