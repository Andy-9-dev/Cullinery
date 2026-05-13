import signatureSmokey from '../assets/images/Signature Smokey Jollof.webp'
import poundedYamEgusi from '../assets/images/Pounded Yam & Egusi.webp'
import wagyuBeefSuya from '../assets/images/Wagyu Beef Suya.webp'
import eforiro from '../assets/images/Eforiro.jpg'
import ogbonoSoup from '../assets/images/Ogbono Soup and Fufu.jpg'
import whiteRiceStew from '../assets/images/White Rice & Stew.avif'
import chops from '../assets/images/CHops.jpg'
import puffPu from '../assets/images/Puff pu.jpg'
import puff from '../assets/images/Puff.jpg'
import samosa from '../assets/images/samosa.jpg'
import richSamosa from '../assets/images/Rich samosa.jpg'
import smallChops from '../assets/images/small chops.jpg'
import moiMoi from '../assets/images/Moi Moi.jpg'
import egusiSoup from '../assets/images/Egusiii4.jpg'
import pepperSoup from '../assets/images/Pepper soup.jpg'
import nigerianFriedRice from '../assets/images/Nigerian Fried Rice.jpg'
import grilledChickenAfrican from '../assets/images/Grilled Chicken African.jpg'
import mocktail from '../assets/images/Mocktail.jpg'
import fruitJuice from '../assets/images/fRuit juice.jpg'
import njoy from '../assets/images/njoy.jpg'
import orange from '../assets/images/Orange.jpg'
import orangeJuice from '../assets/images/range juice.jpg'
import strawberry from '../assets/images/STrawberry.jpg'
import tail from '../assets/images/Tail.jpg'
import wine from '../assets/images/WIne.jpg'
import bangaSoup from '../assets/images/Banga soup.jpg'
import edikaikong from '../assets/images/Edikaikong.jpg'
import spaghetti from '../assets/images/Spaghetti.jpg'

// Menu data using local images
const MENU_DATA = [
  // Small Chops
  {
    id: 1,
    name: 'Puff Puff',
    price: 2500,
    category: 'Small Chops',
    tag: 'Sweet',
    description: 'Golden fried dough balls - a Nigerian favorite.',
    image: puff
  },
  {
    id: 2,
    name: 'Puff Puff Deluxe',
    price: 3000,
    category: 'Small Chops',
    tag: 'Sweet',
    description: 'Premium puff puff with extra flavor.',
    image: puffPu
  },
  {
    id: 4,
    name: 'Spring Rolls',
    price: 3000,
    category: 'Small Chops',
    tag: 'Crispy',
    description: 'Crispy pastry rolls filled with vegetables and meat.',
    image: smallChops
  },
  {
    id: 5,
    name: 'Samosa',
    price: 2000,
    category: 'Small Chops',
    tag: 'Spicy',
    description: 'Triangular pastry with savory filling.',
    image: samosa
  },
  {
    id: 5.5,
    name: 'Rich Samosa',
    price: 2500,
    category: 'Small Chops',
    tag: 'Crispy',
    description: 'Premium samosa with rich, flavorful filling.',
    image: richSamosa
  },
  {
    id: 6,
    name: 'Chicken Chops',
    price: 3500,
    category: 'Small Chops',
    tag: 'Crispy',
    description: 'Breaded and fried chicken pieces.',
    image: chops
  },
  // Main Dishes
  {
    id: 7,
    name: 'Signature Smokey Jollof Rice',
    price: 12500,
    category: 'Main Dishes',
    tag: 'Signature',
    description: 'Authentic Nigerian jollof rice - freshly prepared with traditional spices and ingredients.',
    image: signatureSmokey
  },
  {
    id: 8,
    name: 'Wagyu Beef Suya',
    price: 15000,
    category: 'Main Dishes',
    tag: 'Spicy',
    description: 'Premium grilled beef with traditional Nigerian spice blend.',
    image: wagyuBeefSuya
  },
  {
    id: 9,
    name: 'Nigerian Fried Rice',
    price: 11500,
    category: 'Main Dishes',
    tag: 'Protein Rich',
    description: 'Colorful fried rice with vegetables and protein.',
    image: nigerianFriedRice
  },
  {
    id: 10,
    name: 'Pounded Yam & Egusi',
    price: 14000,
    category: 'Main Dishes',
    tag: 'Hearty',
    description: 'Smooth pounded yam served with rich egusi soup.',
    image: poundedYamEgusi
  },
  {
    id: 11,
    name: 'Grilled Chicken African',
    price: 8500,
    category: 'Main Dishes',
    tag: 'Hearty',
    description: 'Succulent grilled chicken with African spices.',
    image: grilledChickenAfrican
  },
  {
    id: 12,
    name: 'Beef Pepper Rice',
    price: 13000,
    category: 'Main Dishes',
    tag: 'Spicy',
    description: 'Spicy fried rice with tender beef pieces.',
    image: whiteRiceStew
  },
  {
    id: 13,
    name: 'Jollof Rice & Chicken',
    price: 13500,
    category: 'Main Dishes',
    tag: 'Signature',
    description: 'Smokey jollof rice paired with grilled chicken.',
    image: signatureSmokey
  },
  {
    id: 13.5,
    name: 'Moi Moi',
    price: 2500,
    category: 'Main Dishes',
    tag: 'Protein Rich',
    description: 'Steamed bean pudding - a classic Nigerian snack.',
    image: moiMoi
  },
  {
    id: 13.7,
    name: 'Spaghetti',
    price: 9500,
    category: 'Main Dishes',
    tag: 'Hearty',
    description: 'Delicious spaghetti with rich tomato sauce and meat.',
    image: spaghetti
  },
  // Soups & Swallows
  {
    id: 14,
    name: 'Egusi Soup',
    price: 18000,
    category: 'Soups & Swallows',
    tag: 'Hearty',
    description: 'Rich melon seed soup with traditional Nigerian flavors.',
    image: egusiSoup
  },
  {
    id: 15,
    name: 'Ogbono Soup',
    price: 16000,
    category: 'Soups & Swallows',
    tag: 'Rich',
    description: 'Authentic ogbono soup with tender meat and vegetables.',
    image: ogbonoSoup
  },
  {
    id: 16,
    name: 'Pepper Soup',
    price: 6000,
    category: 'Soups & Swallows',
    tag: 'Spicy',
    description: 'Aromatic pepper soup with meat and spices.',
    image: pepperSoup
  },
  {
    id: 17,
    name: 'Efo Riro',
    price: 5500,
    category: 'Soups & Swallows',
    tag: 'Traditional',
    description: 'Traditional leafy vegetable soup - a Nigerian favorite.',
    image: eforiro
  },
  {
    id: 17.5,
    name: 'Banga Soup',
    price: 7500,
    category: 'Soups & Swallows',
    tag: 'Rich',
    description: 'Creamy palm nut soup with tender meat and seafood.',
    image: bangaSoup
  },
  {
    id: 17.7,
    name: 'Edikaikong',
    price: 6500,
    category: 'Soups & Swallows',
    tag: 'Leafy',
    description: 'Delicious vegetable soup with pumpkin leaves and waterleaf.',
    image: edikaikong
  },
  // Mocktails
  {
    id: 18,
    name: 'Tropical Mocktail',
    price: 3500,
    category: 'Mocktails',
    tag: 'Refreshing',
    description: 'Tropical blend of fresh fruits and juices.',
    image: mocktail
  },
  {
    id: 19,
    name: 'Fruit Juice',
    price: 2500,
    category: 'Mocktails',
    tag: 'Fresh',
    description: 'Freshly squeezed fruit juice.',
    image: fruitJuice
  },
  {
    id: 20,
    name: 'Tropical Sunrise',
    price: 2000,
    category: 'Mocktails',
    tag: 'Sweet',
    description: 'Vibrant tropical blend with a refreshing citrus kick.',
    image: njoy
  },
  {
    id: 21,
    name: 'Orange Juice',
    price: 2500,
    category: 'Mocktails',
    tag: 'Citrus',
    description: 'Fresh orange juice - naturally sweet.',
    image: orangeJuice
  },
  {
    id: 22,
    name: 'Strawberry Blend',
    price: 3000,
    category: 'Mocktails',
    tag: 'Fruity',
    description: 'Delicious strawberry juice blend.',
    image: strawberry
  },
  {
    id: 23,
    name: 'Tail Drink',
    price: 2500,
    category: 'Mocktails',
    tag: 'Tropical',
    description: 'Exotic tail drink with tropical flavors.',
    image: tail
  },
]

// Fetch menu data (now just returns local data)
export const fetchNigerianFoods = async () => {
  return MENU_DATA
}

// Organize foods by category
export const organizeFoodsByCategory = (foods) => {
  return {
    smallChops: foods.filter((f) => f.category === 'Small Chops').slice(0, 7),
    mainDishes: foods.filter((f) => f.category === 'Main Dishes').slice(0, 9),
    soupsSwallows: foods.filter((f) => f.category === 'Soups & Swallows').slice(0, 7),
    mocktails: foods.filter((f) => f.category === 'Mocktails').slice(0, 6),
  }
}
