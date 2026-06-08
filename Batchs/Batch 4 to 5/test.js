// let str = 'hello' // '' "" ``
// let arr = [['ravi', 28], ['ram', 18]]
// let obj = {
//     ravi:{
//         name:'ravi',
//         age:28
//     },
//     ram:{
//         name:'ram',
//         age:18
//     }
// }

// obj.ravi.name = 'Ravi Singh'
// delete obj.ravi.name 
// console.log(arr[0][0])
// console.log(obj.ravi.name)




function showData() {
    let result = ``

    let clothData = [
        {
            name: "Marks & Spencer Slim Fit Shirt",
            price: "1999.00",
            img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
        },
        {
            name: "Levi's Regular Fit Jeans",
            price: "2499.00",
            img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
        },
        {
            name: "H&M Cotton T-Shirt",
            price: "799.00",
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
        },
        {
            name: "Zara Casual Shirt",
            price: "1799.00",
            img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500"
        },
        {
            name: "Allen Solly Polo T-Shirt",
            price: "999.00",
            img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500"
        },
        {
            name: "Van Heusen Formal Shirt",
            price: "1499.00",
            img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
        },
        {
            name: "U.S. Polo Assn Sweatshirt",
            price: "1899.00",
            img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
        },
        {
            name: "Roadster Denim Jacket",
            price: "2299.00",
            img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=500"
        },
        {
            name: "Nike Sports T-Shirt",
            price: "1299.00",
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500"
        },
        {
            name: "Adidas Track Pants",
            price: "1599.00",
            img: "https://images.unsplash.com/photo-1506629905607-d9f1f57c4b57?w=500"
        },
        {
            name: "Puma Hoodie",
            price: "2199.00",
            img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500"
        },
        {
            name: "Jack & Jones Checked Shirt",
            price: "1699.00",
            img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"
        },
        {
            name: "Tommy Hilfiger Polo",
            price: "2999.00",
            img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
        },
        {
            name: "Peter England Formal Trouser",
            price: "1399.00",
            img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500"
        },
        {
            name: "Louis Philippe Blazer",
            price: "4999.00",
            img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500"
        },
        {
            name: "Wrangler Denim Jeans",
            price: "1899.00",
            img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500"
        },
        {
            name: "HRX Training Shorts",
            price: "899.00",
            img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500"
        },
        {
            name: "Bewakoof Graphic T-Shirt",
            price: "699.00",
            img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"
        },
        {
            name: "Campus Sutra Jacket",
            price: "2499.00",
            img: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500"
        },
        {
            name: "Mufti Casual Shirt",
            price: "1599.00",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500"
        }
    ];

    for (let product of clothData) {
        result += `
         name = ${product.name} 
         price = ${product.price} 
         img = ${product.img} 
        `
    }

    return result

}

console.log(showData())
