const rawProducts = [
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/k/k1s154100429s0024-v0029-0_1104x1104.webp",
        price: "77 890 ₽",
        brand: "Stone Island",
        description: "Мужской пуховик",
        category: "jackets",
        sizes: ['S', 'M', 'L', 'XL'],
        type: "clothing",
        color: "black",
        fullDescription: "Мужской пуховик Loom Woven Chambers Down-TC Lightweight"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/k/k1s154100429s0024-v0061-4_1104x1104.webp",
        price: "77 890 ₽",
        brand: "Stone Island",
        category: "jackets",
        sizes: ['M', 'L', 'XL'],
        type: "clothing",
        color: "white",
        description: "Мужской пуховик",
        fullDescription: "Мужской пуховик Loom Woven Chambers Down-TC Lightweight"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/k/k1s154100429s0024-v0054-4_1104x1104.webp",
        price: "77 890 ₽",
        brand: "Stone Island",
        category: "jackets",
        sizes: ['M', 'L', 'XL'],
        type: "clothing",
        color: "khaki",
        description: "Мужской пуховик",
        fullDescription: "Мужской пуховик Loom Woven Chambers Down-TC Lightweight"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/k/k2s15q100008s0163-v0062-0_1104x1104.webp",
        price: "91 290 ₽",
        brand: "Stone Island",
        category: "windbreaker",
        sizes: ['S', 'M', 'L', 'XL'],
        type: "clothing",
        color: "black",
        description: "Мужская ветровка",
        fullDescription: "Мужская куртка ветровка Ripstop Light HT"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/k/k1s151200015s0003-v0095-0_1104x1104.webp",
        price: "57 690 ₽",
        brand: "Stone Island",
        category: "shirt",
        sizes: ['S', 'M', 'L',],
        type: "clothing",
        color: "beige",
        description: "Мужская рубашка",
        fullDescription: "Мужская рубашка Stretch Cotton Tela Paracadute"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/8/801542020-v0031-0_1104x1104.webp",
        price: "101 990 ₽",
        brand: "Stone Island",
        category: "windbreaker",
        sizes: ['M', 'L',],
        type: "clothing",
        color: "light-green",
        description: "Мужская ветровка ",
        fullDescription: "Мужская куртка ветровка Nylon Metal Watro-TC Hooded"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/k/k1s154100403s0024-v0024-4_1104x1104.webp",
        price: "86 490  ₽",
        brand: "Stone Island",
        category: "jackets",
        sizes: ['S', 'M', 'L', 'XL'],
        type: "clothing",
        color: "grey",
        description: "Мужской пуховик",
        fullDescription: "Мужской пуховик Loom Woven Chambers Down-TC Lightweight"

    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/8/80152ns83-v0001-0_1104x1104.webp",
        price: "23 490  ₽",
        brand: "Stone Island",
        category: "tee-shirt",
        sizes: ['M', 'L', 'XL'],
        description: "Мужская футболка",
        type: "clothing",
        color: "white",
        fullDescription: "Мужская футболка Institutional One Print"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/n/nf0a88xujk3-0_1104x1104.webp",
        price: "18 270 ₽",
        brand: "The North Face",
        category: "down jacket",
        sizes: ['M', 'L'],
        description: "Мужской пуховик",
        type: "clothing",
        color: "black",
        fullDescription: "Мужской пуховик The North Face Hydrenalite Down"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/n/nf0a8d16dji-0_1104x1104.webp",
        price: "27 440 ₽",
        brand: "The North Face",
        category: "down jacket",
        sizes: ['L', 'XL'],
        description: "Мужской пуховик",
        type: "clothing",
        color: "white",
        fullDescription: "Мужской пуховик 1996 Retro Nuptse Printed"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/n/nf0a3c8dgo8-11_1104x1104.webp",
        price: "18 900 ₽",
        brand: "The North Face",
        category: "down jacket",
        sizes: ['S', 'M', 'L', 'XL'],
        type: "clothing",
        color: "yellow",
        description: "Мужской пуховик",
        fullDescription: "Мужской пуховик 1996 Retro Nuptse Printed"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/t/ts2201v-w403-0_1104x1104.webp",
        price: "3 990 ₽",
        brand: "Lyle & Scott",
        category: "tee-shirt",
        sizes: ['S', 'M', 'L', 'XL'],
        type: "clothing",
        color: "black",
        description: "Мужская футболка",
        fullDescription: "Мужская футболка Ringer Embroidered Eagle"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/t/ts2201v-x187-0_1104x1104.webp",
        price: "3 990 ₽",
        brand: "Lyle & Scott",
        category: "tee-shirt",
        sizes: ['S', 'M', 'L',],
        type: "clothing",
        color: "white",
        description: "Мужская футболка",
        fullDescription: "Мужская футболка Ringer Embroidered Eagle"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/r/rccmss715a005086w-103-0_1104x1104.webp",
        price: "26 490 ₽",
        brand: "C.P. Company",
        category: "hoody",
        sizes: ['S', 'M', 'XL',],
        type: "clothing",
        color: "white",
        description: "Мужская толстовка",
        fullDescription: "Мужская толстовка Adjustable Hoodie Kangaroo Pocket Lens"
    },

    {
        link: "#",
        imgSrc: " https://img.brandshop.ru/cache/products/2/20cmos017a005991g-889-0_1104x1104.webp",
        price: "46 490 ₽",
        brand: "C.P. Company",
        category: "hoody",
        sizes: ['S', 'XL',],
        type: "clothing",
        color: "blue",
        description: "Мужская рубашка",
        fullDescription: "Мужская рубашка Flatt Nylon Mixed Goggle Overshirt"
    },
    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/m/m3574-64a-0_1104x1104.webp",
        price: "17 690 ₽",
        brand: "Fred Perry",
        category: "hoody",
        sizes: ['XS', 'S', 'XL',],
        type: "clothing",
        color: "burgundy",
        description: "Мужская толстовка",
        fullDescription: "Мужская толстовка Half Zip"
    },




    // Аксессуары 

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/0/001sgm301006m-black-0_1104x1104.webp",
        price: "15 990 ₽",
        brand: "A Bathing Ape",
        category: "Bag",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Сумка",
        fullDescription: "Сумка Big Ape Head Shoulder"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/r/rccmac737a005269g-999-0_1104x1104.webp",
        price: "20 990 ₽",
        brand: "C.P. Company",
        category: "Backpack",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Сумка",
        fullDescription: "Рюкзак Nylon B Lens Detail Garment Dyed"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/n/np0a8atx941-0_1104x1104.webp",
        price: "13 090 ₽",
        brand: "Napapijri",
        category: "Backpack",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Рюкзак",
        fullDescription: "Рюкзак Napapijri Olina"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/n/np0a8ahwwt3-0_1104x1104.webp",
        price: "11 590 ₽",
        brand: "Napapijri",
        category: "Bag",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Сумка",
        fullDescription: "Дорожная сумка Voyage Duffle"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/r/rccmac734a005269g-999-0_1104x1104.webp",
        price: "18 290 ₽",
        brand: "C.P. Company",
        category: "Bag",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Сумка на пояс",
        fullDescription: "Сумка на пояс Nylon B Lens Crossbody"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/r/rfcmac740a005509a-999-0_1104x1104.webp",
        price: "18 290 ₽",
        brand: "C.P. Company",
        category: "Balaclava",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Балаклава",
        fullDescription: "Балаклава Extrafine Merino Wool Goggle Ribbed"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/0/001bam301007m-black-0_1104x1104.webp",
        price: "13 990 ₽",
        brand: "A Bathing Ape",
        category: "Bag",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Сумка",
        fullDescription: "Сумка Ape Head Clear"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/0/001bam301009m-green-0_1104x1104.webp",
        price: "13 990 ₽",
        brand: "A Bathing Ape",
        category: "Bag",
        sizes: ['ONE SIZE'],
        type: "accessories",
        description: "Сумка",
        fullDescription: "Сумка Ape Head Clear"
    },


    // Обувь

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/i/ib6399-004-0_1104x1104.webp",
        price: "14 990 ₽",
        brand: "Nike",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Мужские кроссовки Dunk Low Retro SE"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/f/fd0884-025-4_1104x1104.webp",
        price: "19 990 ₽",
        brand: "Nike",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Кроссовки Wmns Zoom Vomero 5"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/i/iq0602-400-0_1104x1104.webp",
        price: "14 990 ₽",
        brand: "Nike",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Мужские кроссовки Dunk Low Retro SE"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/u/urc564ky-0_1104x1104.webp",
        price: "19 590 ₽",
        brand: "New Balance",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Мужские кроссовки URC564KY"
    },

    {
        link: "#",
        imgSrc: " https://img.brandshop.ru/cache/products/1/1203b040-003-0_1104x1104.webp",
        price: "12 190 ₽",
        brand: "ASICS",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Кроссовки Gel-Ventx"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/4/406203-17-0_1104x1104.webp",
        price: "13 990 ₽",
        brand: "Puma",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Кроссовки Fade Nitro LS"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/7/752sma0044-031-0_1104x1104.webp",
        price: "12 190 ₽",
        brand: "Lacoste",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Мужские кроссовки Baseshot"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/7/752sma0032-ar0-0_1104x1104.webp",
        price: "14 990 ₽",
        brand: "Lacoste",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Мужские кроссовки Slam Break Leather"
    },

    {
        link: "#",
        imgSrc: " https://img.brandshop.ru/cache/products/u/u19069br-0_1104x1104.webp",
        price: "24 190 ₽",
        brand: "New Balance",
        category: "sneakers",
        sizes: ['41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кроссовки",
        fullDescription: "Мужские кроссовки U19069BR"
    },

    // Кеды

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/v/vn000d7zfrj-0_1104x1104.webp",
        price: "9 090 ₽",
        brand: "Vans",
        category: "сanvas shoes",
        sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кеды",
        fullDescription: "Мужские кеды Old Skool"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/7/748cma0001-18c-0_1104x1104.webp",
        price: "13 490 ₽",
        brand: "Lacoste",
        category: "сanvas shoes",
        sizes: ['37', '38', '39', '40', '41', '42', '43', '44'],
        type: "shoes",
        description: "Мужские кеды",
        fullDescription: "Мужские кеды Backcourt Leather"
    },

    {
        link: "#",
        imgSrc: "https://img.brandshop.ru/cache/products/v/vn000d7ztud-0_1104x1104.webp",
        price: "9 090 ₽",
        brand: "Vans",
        category: "сanvas shoes",
        sizes: ['37', '38', '39', '44', '45'],
        type: "shoes",
        description: "Мужские кеды",
        fullDescription: "Мужские кеды Old Skool"
    },

];
//
// Автоматически добавляем id (индекс + 1) для каждого товара перед экспортом
export const productsData = rawProducts.map((product, index) => ({
    id: index + 1,
    ...product
}));