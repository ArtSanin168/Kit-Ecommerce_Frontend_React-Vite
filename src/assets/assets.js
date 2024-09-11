import p_img1 from './p_img1.jpg'
import p_img2_1 from './p_img2_1.jpg'
import p_img2_2 from './p_img2_2.jpg'
import p_img2_3 from './p_img2_3.jpg'
import p_img2_4 from './p_img2_4.jpg'
import p_img3 from './p_img3.jpg'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpg'
import p_img9 from './p_img9.jpg'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.jpg'
import p_img12 from './p_img12.jpg'
import p_img13 from './p_img13.jpg'
import p_img14 from './p_img14.jpg'
import p_img15 from './p_img15.jpg'
import p_img16 from './p_img16.jpg'
import p_img17 from './p_img17.jpg'
import p_img18 from './p_img18.jpg'
import p_img19 from './p_img19.jpg'
import p_img20 from './p_img20.jpg'

import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_img from './support_img.png'
import dropdown_icon from './dropdown_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import bin_icon from './bin_icon.png'

export const assets = {
    exchange_icon,
    quality_icon,
    support_img,
    star_dull_icon,
    star_icon,
    bin_icon,
    dropdown_icon

}

export const products = [
    {
        _id: "aaaaa",
        name: "Arsenal Shirt - Black ",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 5,
        image: [p_img1],
        category: "adidas",
        subCategory: "fan",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Carlsberg Shirt - Red",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 5,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "nike",
        subCategory: "fan",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Emirates Shirt - Red and White",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 17,
        image: [p_img3],
        category: "puma",
        subCategory: "player",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "AIA Shirt - Light Blue",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 7,
        image: [p_img4],
        category: "nike",
        subCategory: "fan",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Etihad Airways Shirt - Blue",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 6,
        image: [p_img5],
        category: "puma",
        subCategory: "fan",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Emirates Shirt - White and Green",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 10,
        image: [p_img6],
        category: "adidas",
        subCategory: "outlet",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Barmenia Shirt - Blue",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 11,
        image: [p_img7],
        category: "puma",
        subCategory: "outlet",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Paris Saint-Germain Shirt - White and Gray",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 11,
        image: [p_img8],
        category: "adidas",
        subCategory: "outlet",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Qatar Airways Shirt - White and Blue",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 7,
        image: [p_img9],
        category: "nike",
        subCategory: "fan",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Tottenham Hotspur Shirt - White and Blue",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 10,
        image: [p_img10],
        category: "nike",
        subCategory: "outlet",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Chelsea - Away Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 15,
        image: [p_img11],
        category: "nike",
        subCategory: "player",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Arsenal - Home Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 15,
        image: [p_img12],
        category: "adidas",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Ajax - Away Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 13,
        image: [p_img13],
        category: "adidas",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Manchester United - Home Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 16,
        image: [p_img14],
        category: "adidas",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Manchester United - Away2 Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 14,
        image: [p_img15],
        category: "adidas",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Italy - Away Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 19,
        image: [p_img16],
        category: "adidas",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Brazil - Away Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 15,
        image: [p_img17],
        category: "nike",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "PSG - Home Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 18,
        image: [p_img18],
        category: "nike",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Belguine - Home Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 16,
        image: [p_img19],
        category: "adidas",
        subCategory: "player",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Germany - Away Kit",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 12,
        image: [p_img20],
        category: "adidas",
        subCategory: "outlet",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    },

]