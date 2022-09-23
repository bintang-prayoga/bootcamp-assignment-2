<style>
button {
    background: lightskyblue;
    width: 3rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    height: 2rem;
}
</style>
<template>
    <div class="wrap" style="display: flex; justify-content: space-evenly;">
        <all-product :allProduct="allProduct" @emitAddToCart="addToCart" />
        <cart :carts="carts" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                allProduct: [
                    {
                        id: 1,
                        album: "Colon", 
                        artist: "Eri Sasaki", 
                        qty: 20,
                        carts_qty: 0,
                        price: 300000,
                        carts_price: 0,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055424373469254/Colon.jpg"
                    },
                    {
                        id: 2,
                        album: "BOYCOTT", 
                        artist:"Amazarashi", 
                        qty: 10,
                        carts_qty: 0,
                        price: 350000,
                        carts_price: 0,
                        img_url:"https://st.cdjapan.co.jp/pictures/l/07/30/AICL-3858.jpg?v=2"
                    },
                    {
                        id: 3, 
                        album: "HappyEND", 
                        artist:"HoneyComeBear", 
                        qty: 40,
                        carts_qty: 0,
                        price: 550000,
                        carts_price: 0,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055953749155851/unknown.png"
                    },
                    {
                        id: 4,
                        album: "unknown (Limited Edition)", 
                        artist:"ReoNa", 
                        qty: 5,
                        carts_qty: 0,
                        price: 450000,
                        carts_price: 0,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021059069429174352/unknown.png"
                    },
                    {
                        id: 5,
                        album: "Mikazuki no Koukai", 
                        artist:"Sayuri", 
                        qty: 25,
                        carts_qty: 0,
                        price: 250000,
                        carts_price: 0,
                        img_url:"https://i.scdn.co/image/ab67616d0000b273adf9638bf67f85f2679dadbb"
                    }
                ],
                carts: []
            }
        },
        methods: {
            addToCart(id) {
                let produk = this.allProduct.find((item) => item.id == id);
                let cart = this.carts.find((item) => item.idProduk == id);
                let idProduk = produk.id;
                let album = produk.album;
                let price = produk.price;
                if (!cart) {
                    let cartTotal = {
                        idProduk: idProduk,
                        album: album,
                        price: price,
                        qty: 1,
                        subTotal: price,
                    };
                    this.carts.push(cartTotal);
                    console.log(cartTotal.imgUrl)
                } else {
                    cart.qty++;
                    cart.subTotal = cart.qty * cart.price;
                } 
            },
        }
    }
</script>
