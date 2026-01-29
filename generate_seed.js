const fs = require('fs');

const brands = ['Nike', 'Jordan', 'Adidas', 'New Balance', 'Yeezy', 'Asics', 'Puma', 'Reebok'];
const descriptors = ['Retro', 'OG', 'Classic', 'Special Edition', 'Premium', 'Utility', 'Sport', 'Heritage', 'Midnight', 'Crimson', 'Azure', 'Shadow', 'Ghost', 'Phantom', 'Volt', 'Hyper', 'Stealth', 'Noble', 'University', 'Olympic'];
const models = {
    'Nike': ['Air Max', 'Dunk Low', 'Dunk High', 'Blazer Mid', 'Air Force 1', 'Zoom Freak', 'Metcon', 'SB Dunk'],
    'Jordan': ['Retro High', 'Retro Low', 'AJ4', 'AJ11', 'AJ3', 'AJ5', 'AJ6', 'AJ1 Mid'],
    'Adidas': ['Ultraboost', 'Forum Low', 'Forum Mid', 'Superstar', 'Gazelle', 'Samba', 'NMD_R1', 'Stan Smith'],
    'New Balance': ['550', '2002R', '990v5', '1906R', '574', '327', '9060'],
    'Yeezy': ['Boost 350 V2', 'Boost 700', 'Slide', 'Foam RNNR', '500', '380'],
    'Asics': ['Gel-Lyte III', 'Gel-Kayano', 'Gel-NYC', 'GT-2160'],
    'Puma': ['Suede', 'RS-X', 'Clyde', 'Palermo'],
    'Reebok': ['Club C 85', 'Classic Leather', 'Instapump Fury']
};

const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400',
    'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=400',
    'https://images.unsplash.com/photo-1552346154-21d328109827?q=80&w=400',
    'https://images.unsplash.com/photo-1584735175315-9d58238a06ca?q=80&w=400',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400'
];

const seedData = [];

for (let i = 1; i <= 215; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const modelList = models[brand];
    const model = modelList[Math.floor(Math.random() * modelList.length)];
    const desc1 = descriptors[Math.floor(Math.random() * descriptors.length)];
    const desc2 = descriptors[Math.floor(Math.random() * descriptors.length)];

    const name = `${brand} ${model} ${desc1} ${desc2}`;
    const price = Math.floor(Math.random() * (60000 - 8000) + 8000);
    const isLimited = Math.random() > 0.85;
    const stock = Math.floor(Math.random() * 20) + 1;
    const image = images[Math.floor(Math.random() * images.length)];

    seedData.push({
        name: name,
        brand: brand,
        price: price,
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 11],
        ukSizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 10], // Matching UK sizes
        image: image,
        condition: Math.random() > 0.9 ? 'Gently Used' : 'Brand New',
        isLimited: isLimited,
        stock: stock,
        deliveryTime: '7–10 days',
        description: `The ${name} represents the pinnacle of ${brand}'s design philosophy. This ${isLimited ? 'highly exclusive' : 'sought-after'} sneaker features premium construction and iconic styling that makes a bold statement in any rotation. Specially curated for sneaker enthusiasts in Nepal.`
    });
}

fs.writeFileSync('sneakers_seed.json', JSON.stringify(seedData, null, 2));
console.log('Successfully generated sneakers_seed.json with 215 items.');
