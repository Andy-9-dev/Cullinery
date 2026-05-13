# Quick Setup Guide

## Prerequisites

- Node.js 16+ and npm installed
- A WhatsApp Business account (optional, for checkout)

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Configure WhatsApp Number:**
   - Open `src/pages/Orders.jsx`
   - Find line 42: `const whatsappUrl = ...`
   - Replace `2348012345678` with your WhatsApp number (include country code, no + or spaces)

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components (Home, Menu, Orders, Contact)
│   ├── context/          # Zustand cart store
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind theme configuration
├── vite.config.js        # Vite build configuration
└── package.json          # Dependencies
```

## Key Features

### Navigation
- Desktop: Top navbar with links
- Mobile: Bottom navigation bar
- Cart badge shows item count

### Cart System
- Add items from Home or Menu pages
- View/edit cart on Orders page
- Quantity controls (+ / -)
- Remove individual items
- Clear entire cart

### Checkout
- Optional name and address fields
- WhatsApp integration for orders
- Pre-formatted order message with totals

### Pages
- **Home** (`/`) - Hero, featured items, testimonials
- **Menu** (`/menu`) - Full product grid
- **Orders** (`/orders`) - Cart and checkout
- **Contact** (`/contact`) - Contact info and form

## Customization

### Add New Products
Edit the product arrays in `src/pages/Home.jsx` and `src/pages/Menu.jsx`:

```javascript
const PRODUCTS = [
  {
    id: 1,
    name: 'Dish Name',
    price: 10000,
    description: 'Description here',
    image: 'image-url',
    badge: 'Seasonal',
    badgeColor: 'seasonal', // or 'signature'
  },
  // ... more products
]
```

### Change Colors
Edit `tailwind.config.js` in the `colors` object. All colors match the original design.

### Update Contact Info
Edit `src/pages/Contact.jsx` to update:
- Location
- Phone number
- Email
- Hours

## Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder. Deploy to any static hosting (Vercel, Netlify, etc.)

## Troubleshooting

**Cart not persisting?**
- Cart state is in-memory. To persist, add localStorage to `src/context/CartContext.js`

**WhatsApp link not working?**
- Ensure phone number format: country code + number (no + or spaces)
- Example: `2348012345678` for Nigeria

**Images not loading?**
- Check image URLs are accessible
- Replace with your own image URLs

## Support

For issues or questions, refer to:
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Zustand: https://github.com/pmndrs/zustand
