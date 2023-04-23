require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Point and Shoot', sortOrder: 10},
    {name: 'SLR', sortOrder: 20},
    {name: 'Rangefinder', sortOrder: 30},
    {name: 'Medium Format', sortOrder: 40},
    {name: 'Lenses', sortOrder: 50},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([ 
    {brand: 'Canon', model: 'Sure Shot 80u', description: 'A compact point and shoot film camera with a 38-80mm lens and built-in flash.', category: categories[0], price: 50, quantity: 5,imgUrls: ["https://i.imgur.com/RcDO1pW.jpg"]},
    {brand: 'Olympus', model: 'Stylus Epic Zoom 80', description: 'A sleek point and shoot film camera with a 38-80mm zoom lens and built-in flash.', category: categories[0], price: 80, quantity: 3, imgUrls: ["https://i.imgur.com/b6WYlXh.jpg"]},
    {brand: 'Nikon', model: 'FM2', description: 'A classic manual focus SLR film camera with a durable metal body and interchangeable lenses.', category: categories[1], price: 300, quantity: 2, imgUrls: ["https://i.imgur.com/L9v0Jiq.jpg"]},
    {brand: 'Canon', model: 'AE-1', description: 'A popular 35mm film SLR camera with a range of Canon FD mount lenses.', category: categories[1], price: 200, quantity: 4, imgUrls: ["https://i.imgur.com/eNTABKE.jpg"]},
    {brand: 'Leica', model: 'M6', description: 'A high-end 35mm film rangefinder camera with a bright viewfinder and compatible with Leica M mount lenses.', category: categories[2], price: 1500, quantity: 1, imgUrls: ["https://i.imgur.com/zf9QloI.jpg"]},
    {brand: 'Minolta', model: 'Hi-Matic 7SII', description: 'A reliable rangefinder film camera with a 45mm f/1.8 lens and built-in light meter.', category: categories[2], price: 150, quantity: 3, imgUrls: ["https://i.imgur.com/e4Pl40g.jpg"]},
    {brand: 'Mamiya', model: 'RB67', description: 'A medium format film camera with a rotating back and interchangeable lenses.', category: categories[3], price: 500, quantity: 2, imgUrls: ["https://i.imgur.com/Crw9Vuv.jpg"]},
    {brand: 'Hasselblad', model: '500C/M', description: 'A high-end medium format film camera with a waist-level viewfinder and compatible with Carl Zeiss lenses.', category: categories[3], price: 3000, quantity: 1, imgUrls: ["https://i.imgur.com/Fc6QdCU.jpg"]},
    {brand: 'Nikon', model: 'Nikkor 50mm f/1.4', description: 'A fast prime lens for Nikon manual focus SLR cameras.', category: categories[4], price: 150, quantity: 3, imgUrls: []},
    {brand: "Nikon",model: "F4",description: "Professional 35mm SLR camera with advanced autofocus and metering systems",category: categories[1],price: 900,quantity: 3, imgUrls: []},
    {brand: "Contax",model: "T2",description: "Premium compact camera with a high-quality Zeiss lens and advanced autofocus system",category: categories[0],price: 800,quantity: 5, imgUrls: []},
    {brand: "Mamiya",model: "7",description: "Medium format rangefinder camera with interchangeable lenses and a compact design",category: categories[3],price: 2000,quantity: 1, imgUrls: []}
    ])

    console.log(items)

    process.exit();
  
  })();