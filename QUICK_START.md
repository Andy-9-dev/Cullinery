# Quick Start Guide

## 30-Second Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` - Done!

## What You Get

✓ Full React app with 4 pages
✓ Shopping cart with Zustand
✓ WhatsApp checkout integration
✓ Mobile-responsive design
✓ 100% design match with original HTML

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing |
| `src/pages/Home.jsx` | Landing page |
| `src/pages/Menu.jsx` | Product menu |
| `src/pages/Orders.jsx` | Cart & checkout |
| `src/context/CartContext.js` | Cart state (Zustand) |
| `tailwind.config.js` | Theme colors |

## Common Tasks

### Add a Product
Edit `src/pages/Menu.jsx`:
```javascript
const MENU_ITEMS = [
  {
    id: 4,
    name: 'New Dish',
    price: 10000,
    description: 'Description',
    image: 'image-url',
    badge: 'New',
    badgeColor: 'seasonal',
  },
]
```

### Change WhatsApp Number
Edit `src/pages/Orders.jsx` line 42:
```javascript
const whatsappUrl = `https://wa.me/2348012345678?text=...`
                              ^^^^^^^^^^^^^^
                              Your number here
```

### Update Contact Info
Edit `src/pages/Contact.jsx` - update the contact details in the JSX

### Change Colors
Edit `tailwind.config.js` - modify the `colors` object

## Cart Usage

```javascript
import { useCartStore } from './context/CartContext'

// In your component:
const addItem = useCartStore((state) => state.addItem)
const items = useCartStore((state) => state.items)
const total = useCartStore((state) => state.getTotalPrice())

// Add item
addItem({ id: 1, name: 'Jollof', price: 12500, image: 'url' })

// Get total
console.log(total()) // ₦12500
```

## Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, featured items, testimonials |
| Menu | `/menu` | Full product grid |
| Orders | `/orders` | Cart & WhatsApp checkout |
| Contact | `/contact` | Contact info & form |

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static host

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Images not loading?**
- Check image URLs are valid
- Replace with your own images

**Cart not persisting?**
- Add localStorage to `CartContext.js` (optional)

**WhatsApp link not working?**
- Format: country code + number (no + or spaces)
- Example: `2348012345678` for Nigeria

## File Structure at a Glance

```
src/
├── components/          # Reusable UI parts
├── pages/              # Full pages
├── context/            # State management
├── App.jsx             # Main app
├── main.jsx            # Entry point
└── index.css           # Styles
```

## Next Steps

1. ✓ Run `npm install`
2. ✓ Run `npm run dev`
3. ✓ Update WhatsApp number
4. ✓ Customize products
5. ✓ Test on mobile
6. ✓ Deploy!

## Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Zustand](https://github.com/pmndrs/zustand)

---

**Ready to go!** 🚀
