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
    {brand: 'Contax', model: 'Tvs III', description: 'A high-end compact point and shoot film camera with a Carl Zeiss lens and built-in flash.', category: categories[0], price: 700, quantity: 1,imgUrls: ["https://i.etsystatic.com/30916540/r/il/f4b8ac/4131493114/il_1140xN.4131493114_brrh.jpg","https://i.etsystatic.com/30916540/r/il/57bdcd/4179150319/il_1140xN.4179150319_5dr6.jpg","https://i.etsystatic.com/30916540/r/il/13203e/4131493130/il_1140xN.4131493130_47wt.jpg","https://i.etsystatic.com/30916540/r/il/f6d8c9/4179150505/il_1140xN.4179150505_b2sv.jpg"]},
    {brand: 'Zeiss Ikon', model: 'SL706', description: 'A compact and durable SLR film camera with a Zeiss Planar 50mm f/1.8 lens.', category: categories[1], price: 600, quantity: 1,imgUrls: ["https://i.etsystatic.com/30916540/r/il/cfb714/3744779532/il_1140xN.3744779532_t82y.jpg","https://i.etsystatic.com/30916540/r/il/2484f6/3792375487/il_1140xN.3792375487_roap.jpg","https://i.etsystatic.com/30916540/r/il/a240ac/3792375587/il_1140xN.3792375587_1lhm.jpg"]},
    {brand: 'Nishika', model: 'N8000', description: 'A unique four-lens film camera that creates 3D lenticular prints.', category: categories[0], price: 200, quantity: 2,imgUrls: ["https://i.etsystatic.com/30916540/r/il/6fea42/4454104021/il_1140xN.4454104021_7ta9.jpg","https://i.etsystatic.com/30916540/r/il/6c295f/4406718342/il_1140xN.4406718342_1i2k.jpg","https://i.etsystatic.com/30916540/r/il/e61814/4454104035/il_1140xN.4454104035_sysn.jpg"]},
    {brand: 'Pentax', model: 'MX', description: 'A compact and rugged SLR film camera with a bright viewfinder and a wide range of lenses.', category: categories[1], price: 400, quantity: 2,imgUrls: ["https://i.etsystatic.com/30916540/r/il/07ab0b/4581267095/il_1140xN.4581267095_k6qy.jpg","https://i.etsystatic.com/30916540/r/il/88ff79/4533885368/il_1140xN.4533885368_6bx9.jpg","https://i.etsystatic.com/30916540/r/il/f1afbd/4533885622/il_1140xN.4533885622_aihd.jpg"]},
    {brand: 'Contax', model: '137 MD', description: 'A high-quality SLR film camera with a Carl Zeiss Planar 50mm f/1.7 lens and a metal body.', category: categories[1], price: 500, quantity: 1,imgUrls: ["https://i.etsystatic.com/30916540/r/il/9c91cd/4581224815/il_1140xN.4581224815_g1gj.jpg","https://i.etsystatic.com/30916540/r/il/aa6882/4533844108/il_1140xN.4533844108_rhfb.jpg"]},
    {brand: 'Canon', model: 'AE-1', description: 'A classic SLR film camera with a wide range of compatible lenses and a reliable electronic shutter.', category: categories[1], price: 250, quantity: 3,imgUrls: ["https://i.etsystatic.com/30916540/r/il/9167bb/3770206081/il_1140xN.3770206081_agkq.jpg","https://i.etsystatic.com/30916540/r/il/bb5a38/3722622640/il_1140xN.3722622640_qsbw.jpg"]},
    {brand: 'Mamiya', model: '645AF', description: 'A versatile medium format film camera with autofocus and a variety of compatible lenses.', category: categories[3], price: 1200, quantity: 1,imgUrls: ["https://i.etsystatic.com/30916540/r/il/4095f1/4178506631/il_1140xN.4178506631_1yrp.jpg","https://i.etsystatic.com/30916540/r/il/fa1058/4130847936/il_1140xN.4130847936_9gfl.jpg","https://i.etsystatic.com/30916540/r/il/6c5220/4178506681/il_1140xN.4178506681_8uze.jpg"]},
    {brand: 'Canon', model: 'A1', description: 'A popular SLR film camera with a wide range of compatible lenses and a versatile shutter.', category: categories[1], price: 300, quantity: 4,imgUrls: ["https://i.etsystatic.com/30916540/r/il/d2cf57/4520701866/il_1140xN.4520701866_149h.jpg","https://i.etsystatic.com/30916540/r/il/ebbb4b/4568090905/il_1140xN.4568090905_qdaq.jpg"]},
    {brand: 'Canon', model: 'SureShot WP-1', description: 'A rugged and waterproof point and shoot film camera with a 32mm lens and built-in flash.', category: categories[0], price: 100, quantity: 2,imgUrls: ["https://i.etsystatic.com/30916540/r/il/65dc56/3481173529/il_1140xN.3481173529_yyse.jpg","https://i.etsystatic.com/30916540/r/il/957308/3433499758/il_1140xN.3433499758_hz35.jpg"]},
    {brand: 'Canon', model: 'Sure Shot 80u', description: 'A compact point and shoot film camera with a 38-80mm lens and built-in flash.', category: categories[0], price: 50, quantity: 5,imgUrls: ["https://i.etsystatic.com/30916540/r/il/0efb79/4187251757/il_1140xN.4187251757_s5u0.jpg","https://i.etsystatic.com/30916540/r/il/8d51ac/4187251761/il_1140xN.4187251761_8pq6.jpg"]},
    {brand: 'Contax', model: 'T2', description: 'A high-end compact point and shoot film camera with a Carl Zeiss lens.', category: categories[0], price: 800, quantity: 1, imgUrls: ["https://i.etsystatic.com/30916540/r/il/686ff2/4783910153/il_1140xN.4783910153_oj8t.jpg","https://i.etsystatic.com/30916540/r/il/4e2bf2/4783910149/il_1140xN.4783910149_l9y4.jpg","https://i.etsystatic.com/30916540/r/il/bf4d6d/4783910155/il_1140xN.4783910155_4zns.jpg"]},
    {brand: 'Canon', model: 'FD 17mm f/4 SSC', description: 'A wide-angle lens for Canon FD mount cameras.', category: categories[4], price: 500, quantity: 1, imgUrls: ["https://i.etsystatic.com/30916540/r/il/d4aa60/4454289175/il_1140xN.4454289175_16h6.jpg","https://i.etsystatic.com/30916540/r/il/9064bc/4406903984/il_1140xN.4406903984_uzn5.jpg"]},
    {brand: 'Polaroid', model: 'SX-70', description: 'A folding instant camera that takes SX-70 film.', category: categories[0], price: 400, quantity: 1, imgUrls: ["https://i.etsystatic.com/30916540/r/il/4cda45/4534513556/il_1140xN.4534513556_8o73.jpg","https://i.etsystatic.com/30916540/r/il/ed2c19/4581896777/il_1140xN.4581896777_jybv.jpg","https://i.etsystatic.com/30916540/r/il/408b60/4534513552/il_1140xN.4534513552_72hp.jpg"]},
    {brand: 'Pentax', model: 'K1000', description: 'A classic 35mm SLR camera with a Pentax K mount.', category: categories[1], price: 200, quantity: 3, imgUrls: ["https://i.etsystatic.com/30916540/r/il/00ffec/4521167932/il_1140xN.4521167932_fe3a.jpg","https://i.etsystatic.com/30916540/r/il/9d1657/4521167928/il_1140xN.4521167928_fp8z.jpg"]},
    {brand: 'Minolta', model: 'X-700', description: 'A popular 35mm SLR camera with a Minolta MD mount.', category: categories[1], price: 150, quantity: 2, imgUrls: ["https://i.etsystatic.com/30916540/r/il/100690/4521139650/il_1140xN.4521139650_3cyv.jpg","https://i.etsystatic.com/30916540/r/il/9edfa9/4521139656/il_1140xN.4521139656_g1hv.jpg"]},
    {brand: 'Yashica', model: 'D', description: 'A medium format twin lens reflex camera with a Yashinon lens.', category: categories[3], price: 350, quantity: 1, imgUrls: ["https://i.etsystatic.com/30916540/r/il/5b8689/4131107346/il_1140xN.4131107346_fcb8.jpg","https://i.etsystatic.com/30916540/r/il/dea71e/4178765461/il_1140xN.4178765461_hgi0.jpg"]},
    {brand: 'Canon', model: 'Sure Shot Tele 80', description: 'A compact point and shoot film camera with a 38-80mm zoom lens.', category: categories[0], price: 70, quantity: 4, imgUrls: ["https://i.etsystatic.com/30916540/r/il/22a1d3/3413580951/il_1140xN.3413580951_4r21.jpg","https://i.etsystatic.com/30916540/r/il/ffd090/3362901270/il_1140xN.3362901270_6eg9.jpg"]},
    {brand: 'Mamiya', model: 'RB67', description: 'A modular medium format SLR camera with a Mamiya K/L mount.', category: categories[3], price: 800, quantity: 1, imgUrls: ["https://i.etsystatic.com/30916540/r/il/1e6b32/4131278214/il_1140xN.4131278214_92h6.jpg","https://i.etsystatic.com/30916540/r/il/900b0c/4178936085/il_1140xN.4178936085_kviu.jpg","https://i.etsystatic.com/30916540/r/il/69e919/4131278204/il_1140xN.4131278204_q23l.jpg"]},
    ])

    console.log(items)

    process.exit();
  
  })();