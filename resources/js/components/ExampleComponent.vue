<template>
    <div class="wrap">
        <all-product :listProduct="product" @emitSubtract="subtract" />
        <cart :cartProduct="cartProduct" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: [
                    {
                        id: 1,
                        album: "Colon", 
                        artist: "Eri Sasaki", 
                        qty: 20,
                        price: 300000,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055424373469254/Colon.jpg"
                    },
                    {
                        id: 2,
                        album: "BOYCOTT", 
                        artist:"Amazarashi", 
                        qty: 10,
                        price: 350000,
                        img_url:"https://st.cdjapan.co.jp/pictures/l/07/30/AICL-3858.jpg?v=2"
                    },
                    {
                        id: 3,
                        album: "HappyEND", 
                        artist:"HoneyComeBear", 
                        qty: 40,
                        price: 550000,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055953749155851/unknown.png"
                    },
                    {
                        id: 4,
                        album: "unknown (Limited Edition)", 
                        artist:"ReoNa", 
                        qty: 5,
                        price: 450000,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021059069429174352/unknown.png"
                    },
                    {
                        id: 5,
                        album: "Mikazuki no Koukai", 
                        artist:"Sayuri", 
                        qty: 25,
                        price: 250000,
                        img_url:"https://i.scdn.co/image/ab67616d0000b273adf9638bf67f85f2679dadbb"
                    }
                ],
                cartProduct: [
                    {
                        id: 1,
                        album: "Colon", 
                        artist: "Eri Sasaki", 
                        qty: 0,
                        price: 300000,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055424373469254/Colon.jpg"
                    },
                    {
                        id: 2,
                        album: "BOYCOTT", 
                        artist:"Amazarashi", 
                        qty: 0,
                        price: 350000,
                        img_url:"https://st.cdjapan.co.jp/pictures/l/07/30/AICL-3858.jpg?v=2"
                    },
                    {
                        id: 3,
                        album: "HappyEND", 
                        artist:"HoneyComeBear", 
                        qty: 0,
                        price: 550000,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055953749155851/unknown.png"
                    },
                    {
                        id: 4,
                        album: "unknown (Limited Edition)", 
                        artist:"ReoNa", 
                        qty: 0,
                        price: 450000,
                        img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021059069429174352/unknown.png"
                    },
                    {
                        id: 5,
                        album: "Mikazuki no Koukai", 
                        artist:"Sayuri", 
                        qty: 0,
                        price: 250000,
                        img_url:"https://i.scdn.co/image/ab67616d0000b273adf9638bf67f85f2679dadbb"
                    }
                ]
            }
        },
        methods: {
            subtract(index) {
                this.product.stock - 1
            }
        }
    }
</script>
