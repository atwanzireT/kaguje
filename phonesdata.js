const products = [
  {
    id: 1,
    name: 'iPhone Leather Cases',
    category: 'cases',
    brand: 'Apple',
    price: 49900,
    rating: 4.5,
    image: 'https://i.pinimg.com/1200x/fe/e2/1f/fee21f400582176394ac032aaa9c3174.jpg',
    compatibleWith: ['iPhone premium cases']
  },
  {
    id: 2,
    name: 'Samsung Galaxy Clear Cover Cases',
    category: 'cases',
    brand: 'Spigen',
    price: 35000,
    rating: 4.2,
    image: 'https://i.pinimg.com/1200x/41/87/a6/4187a6f896edb258ab029cb43d1548b1.jpg',
    compatibleWith: ['Galaxy S23 Ultra']
  },
  {
    id: 3,
    name: 'Wireless Charging Pad 15W',
    category: 'chargers',
    brand: 'Anker',
    price: 45000,
    rating: 4.7,
    image: 'https://i.pinimg.com/736x/0f/59/56/0f59564620fd8ab76d0b923b9ef09787.jpg',
    compatibleWith: ['All Qi-enabled']
  },
  {
    id: 4,
    name: 'AirPods Pro Generation',
    category: 'earphones',
    brand: 'Apple',
    price: 89900,
    rating: 4.8,
    image: 'https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg',
    compatibleWith: ['All Bluetooth']
  },
  {
    id: 5,
    name: 'Tempered Glass Screen Protector',
    category: 'screen-protectors',
    brand: 'ESR',
    price: 15000,
    rating: 4.3,
    image: 'https://i.pinimg.com/736x/80/c6/30/80c6301f0807bbedf0cb150aea570847.jpg',
    compatibleWith: ['iPhone All Series']
  },
  {
    id: 6,
    name: 'Magnetic Car Mount Holder',
    category: 'holders',
    brand: 'iOttie',
    price: 32000,
    rating: 4.1,
    image: 'https://i.pinimg.com/736x/24/c6/1d/24c61d173b4616f973fc4f7ad395e452.jpg',
    compatibleWith: ['All Phones']
  },
  {
    id: 7,
    name: 'USB-C to Lightning Cable',
    category: 'cables',
    brand: 'Belkin',
    price: 12000,
    rating: 4.0,
    image: 'https://i.pinimg.com/736x/e1/5c/78/e15c78f37ee0eca048782abaeef7fc74.jpg',
    compatibleWith: ['iPhone All Series']
  },
  {
    id: 8,
    name: 'Portable Power Bank 10000mAh',
    category: 'power-banks',
    brand: 'RAVPower',
    price: 55000,
    rating: 4.6,
    image: 'https://i.pinimg.com/736x/b5/4e/a4/b54ea430f059df49115c11035d25346d.jpg',
    compatibleWith: ['All Devices']
  },
  {
    id: 9,
    name: 'Tecno Silicone Cases',
    category: 'cases',
    brand: 'Tecno',
    price: 15000,
    rating: 4.0,
    image: 'https://i.pinimg.com/736x/f4/f1/7b/f4f17bc6812b376ce78166897c0098d7.jpg',
    compatibleWith: ['Tecno Spark Series']
  },
  {
    id: 10,
    name: 'Infinix Note Series Wallet Cases',
    category: 'cases',
    brand: 'Infinix',
    price: 22000,
    rating: 4.2,
    image: 'https://i.pinimg.com/736x/95/e3/ba/95e3ba51000cfed4c2a608c4f67ef5f0.jpg',
    compatibleWith: ['Infinix Note Series']
  },
  {
    id: 11,
    name: 'Solar Power Bank 20000mAh',
    category: 'power-banks',
    brand: 'SunKing',
    price: 85000,
    rating: 4.4,
    image: 'https://i.pinimg.com/736x/7f/f2/57/7ff257cca19d11cf978094c8d575ceb3.jpg',
    compatibleWith: ['All Devices']
  },
  {
    id: 12,
    name: 'Multi-Device Charging Station',
    category: 'chargers',
    brand: 'UGTech',
    price: 65000,
    rating: 4.3,
    image: 'https://i.pinimg.com/736x/d3/f0/9d/d3f09d3558262fddeb8c10f3f7955ccb.jpg',
    compatibleWith: ['All USB Devices']
  },
  {
    id: 13,
    name: 'Wireless Earbuds with ANC',
    category: 'earphones',
    brand: 'Samsung',
    price: 120000,
    rating: 4.6,
    image: 'https://i.pinimg.com/736x/5f/6a/aa/5f6aaa02f08d373c9a2f0a90f60cebc3.jpg',
    compatibleWith: ['All Bluetooth Devices']
  },
  {
    id: 14,
    name: 'Universal Phone Grip Stand',
    category: 'holders',
    brand: 'PopSocket',
    price: 18000,
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/73/df/66/73df66782584f44b1dd10baba171cb5b.jpg',
    compatibleWith: ['All Phones']
  },
  {
    id: 15,
    name: 'Braided Nylon Cable 3-Pack',
    category: 'cables',
    brand: 'UGTech',
    price: 25000,
    rating: 4.2,
    image: 'https://i.pinimg.com/736x/bf/63/9b/bf639b0d2926ca59309df44d32ca20d5.jpg',
    compatibleWith: ['All USB Devices']
  },
  {
    id: 16,
    name: 'Privacy Screen Protector',
    category: 'screen-protectors',
    brand: 'ESR',
    price: 20000,
    rating: 4.4,
    image: 'https://i.pinimg.com/736x/99/e9/0a/99e90aef7773f17adf5345d5a2ff6777.jpg',
    compatibleWith: ['iPhone All Series', 'Samsung Galaxy Series']
  },
  {
    id: 17,
    name: 'Car Phone Charger Adapter',
    category: 'chargers',
    brand: 'Anker',
    price: 28000,
    rating: 4.3,
    image: 'https://i.pinimg.com/736x/46/2f/56/462f56c09631a140b8ea3a7ec1af83f8.jpg',
    compatibleWith: ['All USB Devices']
  },
  {
    id: 18,
    name: 'Waterproof Bluetooth Speaker',
    category: 'speakers',
    brand: 'JBL',
    price: 150000,
    rating: 4.7,
    image: 'https://i.pinimg.com/736x/71/0e/b5/710eb571a2fc0ee868a083de47f80358.jpg',
    compatibleWith: ['All Bluetooth Devices']
  },
  {
    id: 19,
    name: 'Phone Cleaning Kit',
    category: 'accessories',
    brand: 'TechCare',
    price: 8000,
    rating: 4.1,
    image: 'https://i.pinimg.com/736x/01/c6/dd/01c6dd57a973bbdd428e48fdb8e0e554.jpg',
    compatibleWith: ['All Devices']
  },
  {
    id: 20,
    name: 'Universal Waterproof Pouch',
    category: 'accessories',
    brand: 'DryCase',
    price: 12000,
    rating: 4.0,
    image: 'https://i.pinimg.com/736x/a4/e6/5d/a4e65d258264d411a5db237aee7c04d2.jpg',
    compatibleWith: ['All Phones up to 7"']
  },
  {
    id: 21,
    name: 'Itel Phone Stand Cover',
    category: 'cases',
    brand: 'Itel',
    price: 13000,
    rating: 3.9,
    image: 'https://i.pinimg.com/736x/6c/dd/ed/6cdded9a716d54cc0ddec2b4b19804e7.jpg',
    compatibleWith: ['Itel Vision Series']
  },
  {
    id: 22,
    name: 'Multi-Port USB Hub',
    category: 'accessories',
    brand: 'UGTech',
    price: 35000,
    rating: 4.2,
    image: 'https://i.pinimg.com/736x/94/52/68/9452689f07b39335e99c7f236b600ee9.jpg',
    compatibleWith: ['All USB-C Devices']
  },
  {
    id: 23,
    name: 'Fast Charging Cable Pack',
    category: 'cables',
    brand: 'Anker',
    price: 30000,
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/ab/15/c1/ab15c1a3b6e6451a70d0082d27c7361b.jpg',
    compatibleWith: ['All Fast Charge Devices']
  },
  {
    id: 24,
    name: 'Phone Ring Light',
    category: 'accessories',
    brand: 'SelfiePro',
    price: 25000,
    rating: 4.3,
    image: 'https://i.pinimg.com/736x/19/51/a1/1951a121f52c68f6fd6c4f851d7bc7b2.jpg',
    compatibleWith: ['All Phones']
  }
];

export default products;