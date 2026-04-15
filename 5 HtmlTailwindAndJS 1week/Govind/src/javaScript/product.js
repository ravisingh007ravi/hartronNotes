const product = () => {

    const data = [
        {
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
            title: "Men's Classic Cotton T-Shirt",
            dec: "Soft, breathable 100% cotton fabric. Perfect for everyday casual wear. Available in multiple colors.",
            price: 799,
            dis: 15
        },
        {
            img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=200&fit=crop",
            title: "Slim Fit Denim Jeans",
            dec: "Stretchable denim with a modern slim fit. Durable and stylish for any occasion.",
            price: 1999,
            dis: 20
        },
       
    ];

    let cart = data.map((v,i)=>{
        return `
         <div class="bg-white text-black">
            <img class="h-50 w-50" src=${v.img} alt="">
            <h1 class="max-w-50">${v.title}</h1>
            <h1 class="max-w-50">${v.dec}</h1>
            <h1>Rs - ${v.price} Value</h1>
            <h1>Dis-${v.dis}%</h1>
        </div>

        `
    })

    return cart.join('')
}

document.getElementById('cart').innerHTML = product()