const foodMenu = [
  {
    id: 1,
    catagoryName: "Starters",
    items: [
      {
        id: 1,
        name: "Tandoori Chicken",
        discription:
          " Boneless chicken cooked with exotic spices Tandoori Chicken",
        price: "4.75",
        imgUrl: "/images/foodImages/Tandoori Chicken.webp",
      },
      {
        id: 2,
        name: "Chicken Tikka",
        discription: "Boneless chicken cooked with exotic spices",
        price: "4.75",
        imgUrl: "/images/foodImages/Chicken Tikka.webp",
      },
      {
        id: 3,
        name: "Murg Malai Tikka",
        discription:
          "Boneless chicken, marinated with ginger, garlic, cheddar cheese and fresh cream",
        price: "4.75",
        imgUrl: "/images/foodImages/Murg Malai Tikka.jpg",
      },
      {
        id: 4,
        name: "Chicken Chat Puree",
        discription:
          "Boneless chicken cooked with exotic spices, served with deep fried bread",
        price: "4.95",
        imgUrl: "/images/foodImages/Chicken Chat Puree.jpg",
      },
      {
        id: 5,
        name: "Chicken Tikka Pakora",
        discription: "Boneless chicken coated with batter and fried",
        price: "4.75",
        imgUrl: "/images/foodImages/Chicken Tikka Pakora.jpg",
      },
      {
        id: 6,
        name: "Sweet Chilli Chicken",
        discription:
          "Old Delhi street stall style chicken in a sauce of chilli & garlic, served with peppers and spring onions",
        price: "4.95",
        imgUrl: "/images/foodImages/Sweet Chilli Chicken.jpg",
      },
      {
        id: 7,
        name: "Lamb Samosa",
        discription: "Mincemeat wrapped in a triangular pastry",
        price: "4.50",
        imgUrl: "/images/foodImages/Lamb Samosa.webp",
      },
      {
        id: 8,
        name: "Lamb Seekh Kebab",
        discription: "Minced lamb cooked on a skewer",
        price: "4.95",
        imgUrl: "/images/foodImages/Lamb Seekh Kebab.jpg",
      },
      {
        id: 9,
        name: "Minted Lamb Tikka",
        discription: "",
        price: "5.00",
        imgUrl: "/images/foodImages/Minted Lamb Tikka.jpg",
      },
      {
        id: 10,
        name: "Tandoori Lamb Chop",
        discription: "",
        price: "6.50",
        imgUrl: "/images/foodImages/Tandoori Lamb Chop.png",
      },
      {
        id: 11,
        name: "Crab Cake",
        discription:
          "Crab meat marinated with onion peppers and coriander, coated in breadcrumbs and sesame seed",
        price: "6.50",
        imgUrl: "/images/foodImages/Crab Cake.jpg",
      },
      {
        id: 12,
        name: "Scallop's",
        discription:
          "Toasted in butter served with chefs special sauce and salad",
        price: "7.50",
        imgUrl: "/images/foodImages/Scallop's.webp",
      },
      {
        id: 13,
        name: "Prawn Puree",
        discription: "Prawns served with deep fried bread",
        price: "5.95",
        imgUrl: "/images/foodImages/Prawn Puree.jpg",
      },
      {
        id: 14,
        name: "King Prawn Puree",
        discription: "",
        price: "7.00",
        imgUrl: "/images/foodImages/King Prawn Puree.jpg",
      },
      {
        id: 15,
        name: "Sweet Chilli King Prawns (NEW)",
        discription:
          "Old Delhi street stall style prawns in a sauce of chilli and garlic, served with peppers and spring onions",
        price: "6.95",
        imgUrl: "/images/foodImages/Sweet Chilli King Prawns (NEW).jpg",
      },
      {
        id: 16,
        name: "Buffalo King Prawns",
        discription:
          "Deep fried king prawns dipped in bread crumbs and sesame seeds",
        price: "5.50",
        imgUrl: "/images/foodImages/Buffalo King Prawns.jpg",
      },
      {
        id: 17,
        name: "Soft Shell Crab (NEW)",
        discription: "Cooked with exotic spices, and served crispy",
        price: "6.50",
        imgUrl: "/images/foodImages/Soft Shell Crab (NEW).jfif",
      },
      {
        id: 18,
        name: "Fish Masala Fry",
        discription: "Catch of the day fish, coated with batter and deep fried",
        price: "5.50",
        imgUrl: "/images/foodImages/Fish Masala Fry.jpg",
      },
      {
        id: 19,
        name: "Salmon Tikka",
        discription: "Marinated with exotic spices and cooked in a clay oven",
        price: "7.00",
        imgUrl: "/images/foodImages/Salmon Tikka.jpg",
      },

      {
        id: 20,
        name: "Mussels {New Zealand)",
        discription: "",
        price: "6.50",
        imgUrl: "/images/foodImages/Mussels {New Zealand).jpg",
      },
      {
        id: 21,
        name: "Achari Paneer Tikka",
        discription:
          "Indian cheese cooked in a clay oven, served with onions and green pepper",
        price: "5.95",
        imgUrl: "/images/foodImages/Achari Paneer Tikka.jpg",
      },
      {
        id: 22,
        name: "Vegetable Samosa (v)",
        discription: "Vegetables wrapped in a triangular pastry",
        price: "4.00",
        imgUrl: "/images/foodImages/Vegetable Samosa (v).jpg",
      },
      {
        id: 23,
        name: "Onion Bahjji (v)",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Onion Bahjji (v).jpg",
      },
      {
        id: 24,
        name: "Gol Guppa (v)",
        discription:
          "Stuffed puff pastries served with creamy yogurt, chickpeas, potatoes & coriander and mint chutney - Served cold",
        price: "5.95",
        imgUrl: "/images/foodImages/Gol Guppa (v).png",
      },
      {
        id: 25,
        name: "Bhalla Papari Chaat (v)",
        discription:
          "Crispy wheat and lentil dumplings dipped in yoghurt and tamarind chutney. A famous roadside snack of Old Dehli Bazaar - Served cold",
        price: "5.50",
        imgUrl: "/images/foodImages/Bhalla Papari Chaat (v).jfif",
      },
      {
        id: 26,
        name: "Mixed Platter",
        discription:
          "Sharing for two, chicken tikka, malai tikka, seekh kebab and fish pakora.",
        price: "10.95",
        imgUrl: "/images/foodImages/Mixed Platter.jfif",
      },
      {
        id: 27,
        name: "Masha Bhara",
        discription:
          "Mackerel fish, hint of green chilli, lemon grass, onions and spinach ",
        price: "5.95",
        imgUrl: "/images/foodImages/Masha Bhara.jpg",
      },
      {
        id: 28,
        name: "Hariyali Chicken Tikka",
        discription:
          "Made with boneless chicken blended and cooked in fresh green herbs and spices made of fresh mint leaves, coriander leaves and green chillies",
        price: "4.75",
        imgUrl: "/images/foodImages/Hariyali Chicken Tikka.jpg",
      },
    ],
  },
  {
    id: 2,
    catagoryName: "Tandoori Dishes",
    items: [
      {
        id: 1,
        name: "Chicken Tikka",
        discription: "",
        price: "8.95",
        imgUrl: "/images/foodImages/Chicken Tikka.jpg",
      },
      {
        id: 2,
        name: "Lamb Tikka",
        discription: "",
        price: "9.95",
        imgUrl: "/images/foodImages/Lamb Tikka.webp",
      },
      {
        id: 3,
        name: "Tandoori Chicken (Half)",
        discription:
          "Spring chicken on the bone, marinated and grilled in the tandoori oven. Served with salad",
        price: "9.95",
        imgUrl: "/images/foodImages/Tandoori Chicken (Half).jpg",
      },
      {
        id: 4,
        name: "Tandoori Mixed Grill",
        discription:
          "Chicken tikka, seekh kebab, lamb tikka, tandoori chicken, tandoori king prawn. Served with salad",
        price: "13.75",
        imgUrl: "/images/foodImages/Tandoori Mixed Grill.jpg",
      },
      {
        id: 5,
        name: "Chicken Shashlick",
        discription:
          "Chicken with tomatoes, green pepper and onion cooked in the clay oven. Served with salad",
        price: "11.75",
        imgUrl: "/images/foodImages/Chicken Shashlick.jpg",
      },
      {
        id: 6,
        name: "Lamb Shashlick",
        discription:
          "Lamb with tomatoes, green pepper and onion cooked in the clay oven. Served with salad",
        price: "12.80",
        imgUrl: "/images/foodImages/Lamb Shashlick.jfif",
      },
      {
        id: 7,
        name: "King Prawn Shashlick",
        discription:
          "King prawns with tomatoes, green pepper and onion cooked in the clay oven. Served with salad",
        price: "13.75",
        imgUrl: "/images/foodImages/King Prawn Shashlick.jpg",
      },
      {
        id: 8,
        name: "Salmon Tikka",
        discription:
          "Pieces of salmon cooked in the clay oven with exotic spices. Served with salad",
        price: "13.95",
        imgUrl: "/images/foodImages/Salmon Tikka.jpg",
      },
      {
        id: 9,
        name: "Murg Malai Tikka",
        discription:
          "Boneless chicken, marintated with ginger, garlic, cheddar cheese and fresh cream ",
        price: "8.95",
        imgUrl: "/images/foodImages/Murg Malai Tikka.jpg",
      },
      {
        id: 10,
        name: "Tandoori Delight",
        discription:
          "Boneless Lamb and chicken cooked with pepper and onion in the clay oven, fried in butter, served as a sizzling dish.",
        price: "11.75",
        imgUrl: "/images/foodImages/Tandoori Delight.jfif",
      },
    ],
  },
  {
    id: 3,
    catagoryName: "Traditional Main Courses",
    items: [
      {
        id: 1,
        name: "Chicken",
        discription: "(Tikka extra £1)",
        price: "8.50",
        imgUrl: "/images/foodImages/Chicken.jpg",
      },
      {
        id: 2,
        name: "Lamb",
        discription: "(Tikka extra £1)",
        price: "9.50",
        imgUrl: "/images/foodImages/Lamb.jpg",
      },
      {
        id: 3,
        name: "Prawns",
        discription: "",
        price: "10.50",
        imgUrl: "/images/foodImages/Prawns.webp",
      },
      {
        id: 4,
        name: "King Prawns",
        discription: "",
        price: "11.50",
        imgUrl: "/images/foodImages/King Prawns.jpg",
      },
      {
        id: 5,
        name: "Vegetable",
        discription: "",
        price: "7.50",
        imgUrl: "/images/foodImages/Vegetable.jpeg",
      },
    ],
  },
  {
    id: 4,
    catagoryName: "House Specials",
    items: [
      {
        id: 1,
        name: "Chicken Tikka Masala (Lamb & Prawns)",
        discription:
          "Cooked in delicate flavoured, lightly spiced, rich creamy Tandoori sauce",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Chicken Tikka Masala (Lamb & Prawns).jpeg",
      },
      {
        id: 2,
        name: "Chicken Tikka Butter Masala (Lamb & Prawns)",
        discription:
          "Boneless chicken with fresh spices and butter, cooked in creamy curry sauce",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl:
          "/images/foodImages/Chicken Tikka Butter Masala (Lamb & Prawns).jpg",
      },
      {
        id: 3,
        name: "Chicken Chettinad (Lamb & King Prawns)",
        discription:
          "Boneless chicken cooked in a Goan style with a spicy coconut curry sauce",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Chicken Chettinad (Lamb & King Prawns).jpg",
      },
      {
        id: 4,
        name: "Garlic Chilli Chicken (Lamb & King Prawns)",
        discription:
          "Boneless chicken cooked with fresh garlic, green chillies, coriander, green peppers and exotic spices. Very hot",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl:
          "/images/foodImages/Garlic Chilli Chicken (Lamb & King Prawns).jpg",
      },
      {
        id: 5,
        name: "South Indian Chicken (Lamb & King Prawns)",
        discription:
          "Boneless chicken cooked with onions, peppers, blended chillies, garlic and fresh coriander. fairly hot",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl:
          "/images/foodImages/South Indian Chicken (Lamb & King Prawns).jpg",
      },
      {
        id: 6,
        name: "Naga Chicken (Lamb & King Prawns)",
        discription: "Boneless chicken cooked with Naga pickle",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Naga Chicken (Lamb & King Prawns).jfif",
      },
      {
        id: 7,
        name: "Cheddar Chicken  (Lamb & King Prawns)",
        discription:
          "Boneless chicken cooked with onion, peppers and cheddar cheese",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Cheddar Chicken.jpg",
      },
      {
        id: 8,
        name: "Chicken Pasanda (Lamb & King Prawns)",
        discription:
          "Tossed with pure butter ghee, cooked in very rich creamy sauce, flavoured with red wine",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Chicken-Pasanda-Square-FS-38.jpg",
      },
      {
        id: 9,
        name: "Jaipur Chicken (Lamb & King Prawns)",
        discription:
          "Boneless chicken with onions, mushrooms, black peppers, flavoured with soya sauce",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Jaipur Chicken.webp",
      },
      {
        id: 10,
        name: "Sweet Chilli Chicken (Lamb & King Prawns)",
        discription:
          "Old Delhi street stall style chicken in a sauce of chilli and garlic served with peppers and spring onions",
        price: "9.55",
        lamb: "",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Sweet Chilli Chicken.jpg",
      },
      {
        id: 11,
        name: "Khatti Meethi Chicken (Lamb & King Prawns)",
        discription: "Sweet and sour sauce cooked with exotic herbs",
        price: "9.55",
        lamb: "10.65",
        kingPrawns: "12.80",
        imgUrl: "/images/foodImages/Khatti Meethi Chicken.jpg",
      },
    ],
  },
  {
    id: 5,
    catagoryName: "Biryani Dishes",
    discrip:
      "All the Biryani dishes are cooked with Basmati rice to add tot he aroma of Saffron. Topped with fresh cucumber, tomato and served with vegetable curry sauce to add to the taste of the dish",
    items: [
      {
        id: 1,
        name: "Vegetable Biryani",
        discription: "",
        price: "9.50",
        imgUrl: "/images/foodImages/Vegetable Biryani.jpg",
      },
      {
        id: 2,
        name: "Chicken Biryani",
        discription: "Extra £1 for Tikka",
        price: "10.50",
        imgUrl: "/images/foodImages/Chicken Biryani.jpg",
      },
      {
        id: 3,
        name: "Lamb Biryani",
        discription: "Extra £1 for Tikka",
        price: "11.95",
        imgUrl: "/images/foodImages/Lamb Biryani.webp",
      },
      {
        id: 4,
        name: "Prawn Biryani",
        discription: "",
        price: "11.95",
        imgUrl: "/images/foodImages/Prawn Biryani.jpg",
      },
      {
        id: 5,
        name: "King Prawn Biryani",
        discription: "",
        price: "12.95",
        imgUrl: "/images/foodImages/King Prawn Biryani.jpg",
      },
      {
        id: 6,
        name: "Special Mix Biryani",
        discription: "",
        price: "13.50",
        imgUrl: "/images/foodImages/Special Mix Biryani.jpg",
      },
    ],
  },
  {
    id: 6,
    catagoryName: "Rice Dishes",
    items: [
      {
        id: 1,
        name: "Steamed Basmati Rice (v)",
        price: "2.95",
        imgUrl: "/images/foodImages/Steamed Basmati Rice (v).webp",
      },
      {
        id: 2,
        name: "Pilau Rice (v)",
        price: "3.20",
        imgUrl: "/images/foodImages/Pilau Rice (v).jpg",
      },
      {
        id: 3,
        name: "Mushroom Rice (v)",
        price: "3.50",
        imgUrl: "/images/foodImages/Mushroom Rice (v).jpg",
      },
      {
        id: 4,
        name: "Coconut Rice (v)",
        price: "3.50",
        imgUrl: "/images/foodImages/Coconut Rice (v).jpg",
      },
      {
        id: 5,
        name: "Garlic & Onion Rice (v)",
        price: "3.50",
        imgUrl: "/images/foodImages/Garlic & Onion Rice (v).webp",
      },
      {
        id: 6,
        name: "Vegetable Rice (v)",
        price: "3.50",
        imgUrl: "/images/foodImages/Vegetable Rice (v).jpg",
      },
      {
        id: 7,
        name: "Egg Rice",
        price: "3.50",
        imgUrl: "/images/foodImages/Egg Rice.jpg",
      },
      {
        id: 8,
        name: "Special Fried Rice",
        price: "3.50",
        imgUrl: "/images/foodImages/Special Fried Rice.jpg",
      },
      {
        id: 9,
        name: "Chicken Tikka Rice",
        price: "4.50",
        imgUrl: "/images/foodImages/Chicken Tikka Rice.jpg",
      },
      {
        id: 10,
        name: "Lentil Rice (v)",
        price: "3.50",
        imgUrl: "/images/foodImages/Lentil Rice (v).jfif",
      },
    ],
  },
  {
    id: 7,
    catagoryName: "Tandoori Bread",
    items: [
      {
        id: 1,
        name: "Plain Naan",
        price: "2.75",
        imgUrl: "/images/foodImages/Plain Naan.jpeg",
      },
      {
        id: 2,
        name: "Butter Naan",
        price: "2.95",
        imgUrl: "/images/foodImages/Butter Naan.jpg",
      },
      {
        id: 3,
        name: "Peshwari Naan",
        price: "3.50",
        imgUrl: "/images/foodImages/Peshwari Naan.jfif",
      },
      {
        id: 4,
        name: "Garlic Naan",
        price: "3.50",
        imgUrl: "/images/foodImages/Garlic Naan.jpg",
      },
      {
        id: 5,
        name: "Cheese Naan",
        price: "3.50",
        imgUrl: "/images/foodImages/Cheese Naan.jpg",
      },
      {
        id: 6,
        name: "Keema Naan",
        price: "3.50",
        imgUrl: "/images/foodImages/Keema Naan.jpg",
      },
      {
        id: 7,
        name: "Chicken Tikka Naan",
        price: "3.50",
        imgUrl: "/images/foodImages/Chicken Tikka Naan.jpg",
      },
      {
        id: 8,
        name: "Rocket Naan",
        discription: "Very spicy, made with cheese and chilli flakes",
        price: "3.50",
        imgUrl: "/images/foodImages/Rocket Naan.jpg",
      },
      {
        id: 9,
        name: "Tandoori Roti",
        price: "2.95",
        imgUrl: "/images/foodImages/Tandoori Roti.jpeg",
      },
      {
        id: 10,
        name: "Tandoori Lachha Paratha",
        price: "3.50",
        imgUrl: "/images/foodImages/Tandoori Lachha Paratha.jfif",
      },
      {
        id: 11,
        name: "Stuffed Paratha (mix veg)",
        price: "3.50",
        imgUrl: "/images/foodImages/Stuffed Paratha (mix veg).webp",
      },
      {
        id: 12,
        name: "Chapatis",
        price: "2.25",
        imgUrl: "/images/foodImages/Chapatis.jfif",
      },
      {
        id: 13,
        name: "Papadums (plain)",
        discription: "Served with chef's special dips",
        price: "1.75",
        imgUrl: "/images/foodImages/Papadums (plain).jfif",
      },
      {
        id: 14,
        name: "Papadums (spicy)",
        discription: "Served with chef's special dips",
        price: "1.75",
        imgUrl: "/images/foodImages/Papadums (spicy).jpg",
      },
    ],
  },
  {
    id: 8,
    catagoryName: "Vegetable Side Dishes",
    items: [
      {
        id: 1,
        name: "Bombay Aloo",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Bombay Aloo.jpg",
      },
      {
        id: 2,
        name: "Saag Aloo",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Saag Aloo.jpg",
      },
      {
        id: 3,
        name: "Aloo Ghobhi",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Aloo Ghobhi.jpg",
      },
      {
        id: 4,
        name: "Cauliflower Bhajji",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Cauliflower Bhajji.jpg",
      },
      {
        id: 5,
        name: "Mushroom Bhajji",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Mushroom Bhajji.jpg",
      },
      {
        id: 6,
        name: "Mixed Vegetable",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Mixed Vegetable.webp",
      },
      {
        id: 7,
        name: "Garlic Mushrooms",
        discription: "",
        price: "3.95",
        imgUrl: "/images/foodImages/Garlic Mushrooms.jpg",
      },
      {
        id: 8,
        name: "Palak Paneer",
        discription: "Spinach and Indian cheese mixed with a creamy sauce",
        price: "4.50",
        imgUrl: "/images/foodImages/Palak Paneer.jpg",
      },
      {
        id: 9,
        name: "Matar Paneer",
        discription: "garden peas and Indian cheese mixed with a creamy sauce",
        price: "4.50",
        imgUrl: "/images/foodImages/Matar Paneer.webp",
      },
      {
        id: 10,
        name: "Matar Mushroom Curry",
        discription: "",
        price: "4.50",
        imgUrl: "/images/foodImages/Matar Mushroom Curry.jpg",
      },
      {
        id: 11,
        name: "Chickpea Curry",
        discription: "",
        price: "4.50",
        imgUrl: "/images/foodImages/Chickpea Curry.jpg",
      },
      {
        id: 12,
        name: "Karahi Paneer",
        discription:
          "Indian cheese cooked with peppers, onions and exotic spices",
        price: "5.50",
        imgUrl: "/images/foodImages/Karahi Paneer.jpg",
      },
      {
        id: 13,
        name: "Creamy Mushroom & Spinach",
        discription: "",
        price: "4.50",
        imgUrl: "/images/foodImages/Creamy Mushroom & Spinach.jpg",
      },
      {
        id: 14,
        name: "Paneer Butter Masala",
        discription: "",
        price: "5.50",
        imgUrl: "/images/foodImages/Paneer Butter Masala.jpg",
      },
      {
        id: 15,
        name: "Tadka Dal",
        discription: "",
        price: "4.50",
        imgUrl: "/images/foodImages/Tadka Dal.jpg",
      },
    ],
  },
  {
    id: 9,
    catagoryName: "English Dishes",
    items: [
      {
        id: 1,
        name: "Chicken Nuggets & Chips",
        discription: "",
        price: "7.45",
        imgUrl: "/images/foodImages/Chicken Nuggets & Chips.jpg",
      },
      {
        id: 2,
        name: "10oz Steak & Chips",
        discription: "",
        price: "13.95",
        imgUrl: "/images/foodImages/10oz Steak & Chips.webp",
      },
      {
        id: 3,
        name: "Omelette",
        discription: "Chicken/Plain/Cheese/Mushroom",
        price: "8.55",
        imgUrl: "/images/foodImages/Omelette.jpg",
      },
      {
        id: 4,
        name: "Mushroom Omelette & Chips",
        discription: "",
        price: "8.55",
        imgUrl: "/images/foodImages/Mushroom Omelette & Chips.jpg",
      },
      {
        id: 5,
        name: "Chips",
        discription: "",
        price: "2.70",
        imgUrl: "/images/foodImages/Chips.webp",
      },
    ],
  },
];

export default foodMenu;
