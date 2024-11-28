const productdetails = [
  {
    id: 1,
    Title: "Samsung Galaxy Tab S7 11-inch, 128GB",
    Cat: "Tablet",
    Price: "Rs 55000",
    image:
      "https://www.supremeindia.com/uploads/products/2022100316469043286229c408d3193.jpg",
  },
  {
    id: 2,
    Title: "Sony WH-1000XM5, Wireless Noise Cancelling Headphones",
    Cat: "Headphones",
    Price: "Rs 29999",
    image:
      "https://www.theaudiostore.in/cdn/shop/products/SonyWH-1000XM5ActiveNoise-CancelingWirelessHeadphonesInIndia08_1024x.jpg?v=1676747568",
  },
  {
    id: 3,
    Title: "Apple MacBook Air M2 Chip, 256GB SSD",
    Cat: "Laptop",
    Price: "Rs 99999",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
  },
  {
    id: 4,
    Title: "Bose QuietComfort 45, Wireless Noise Cancelling Headphones",
    Cat: "Headphones",
    Price: "Rs 35000",
    image:
      "https://m.media-amazon.com/images/I/51qfLURUtpL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    Title: "Apple iPhone 15 Pro Max, 128GB",
    Cat: "Smartphone",
    Price: "Rs 159999",
    image:
      "https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    Title: "Samsung Galaxy Watch 6, 40mm",
    Cat: "Smartwatch",
    Price: "Rs 24999",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/h/j/o/-original-imahfa7xyykcgahx.jpeg?q=90&crop=false",
  },
  {
    id: 7,
    Title: "LG OLED TV 65-inch, 4K UHD",
    Cat: "Television",
    Price: "Rs 139999",
    image: "https://m.media-amazon.com/images/I/71tU03UNI1L.jpg",
  },
  {
    id: 8,
    Title: "Canon EOS 90D, Digital SLR Camera Kit",
    Cat: "Camera",
    Price: "Rs 92000",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/384053707/ME/KN/ZF/1323800/canon-eos-90d-dslr-camera-with-full-kits.jpg",
  },
  {
    id: 9,
    Title: "Microsoft Surface Pro 9, 128GB SSD",
    Cat: "Laptop",
    Price: "Rs 112000",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/v/o/z/-original-imagu2dszyysgh6y.jpeg?q=90&crop=false",
  },
  {
    id: 10,
    Title: "JBL Flip 5, Waterproof Bluetooth Speaker",
    Cat: "Speaker",
    Price: "Rs 8999",
    image: "https://m.media-amazon.com/images/I/71Xyg9SwRwL.jpg",
  },
  {
    id: 11,
    Title: "Fujifilm Instax Mini 11, Instant Camera",
    Cat: "Camera",
    Price: "Rs 6999",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/kfc-digital-cameras-17-07-2020-inafsrzatzysq5cm-184551847-61mlsrug.jpg",
  },
  {
    id: 12,
    Title: "Fujifilm Instax Mini 11, Instant Camera",
    Cat: "Camera",
    Price: "Rs 6999",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/kfc-digital-cameras-17-07-2020-inafsrzatzysq5cm-184551847-61mlsrug.jpg",
  },
  {
    id: 13,
    Title: "Samsung Galaxy Tab S7 11-inch, 128GB",
    Cat: "Tablet",
    Price: "Rs 55000",
    image:
      "https://www.supremeindia.com/uploads/products/2022100316469043286229c408d3193.jpg",
  },
  {
    id: 14,
    Title: "Sony WH-1000XM5, Wireless Noise Cancelling Headphones",
    Cat: "Headphones",
    Price: "Rs 29999",
    image:
      "https://www.theaudiostore.in/cdn/shop/products/SonyWH-1000XM5ActiveNoise-CancelingWirelessHeadphonesInIndia08_1024x.jpg?v=1676747568",
  },
  {
    id: 15,
    Title: "Apple MacBook Air M2 Chip, 256GB SSD",
    Cat: "Laptop",
    Price: "Rs 99999",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
  },
  {
    id: 16,
    Title: "Bose QuietComfort 45, Wireless Noise Cancelling Headphones",
    Cat: "Headphones",
    Price: "Rs 35000",
    image:
      "https://m.media-amazon.com/images/I/51qfLURUtpL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 17,
    Title: "Apple iPhone 15 Pro Max, 128GB",
    Cat: "Smartphone",
    Price: "Rs 159999",
    image:
      "https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 18,
    Title: "Samsung Galaxy Watch 6, 40mm",
    Cat: "Smartwatch",
    Price: "Rs 24999",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/h/j/o/-original-imahfa7xyykcgahx.jpeg?q=90&crop=false",
  },
  {
    id: 19,
    Title: "LG OLED TV 65-inch, 4K UHD",
    Cat: "Television",
    Price: "Rs 139999",
    image: "https://m.media-amazon.com/images/I/71tU03UNI1L.jpg",
  },
  {
    id: 20,
    Title: "Canon EOS 90D, Digital SLR Camera Kit",
    Cat: "Camera",
    Price: "Rs 92000",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/384053707/ME/KN/ZF/1323800/canon-eos-90d-dslr-camera-with-full-kits.jpg",
  },
  {
    id: 19,
    Title: "LG OLED TV 65-inch, 4K UHD",
    Cat: "Television",
    Price: "Rs 139999",
    image: "https://m.media-amazon.com/images/I/71tU03UNI1L.jpg",
  },
];
export default productdetails;
