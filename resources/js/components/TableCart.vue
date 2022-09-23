<template>
    <table style="border-spacing: 10px; text-align: center;" v-if="carts.length !== 0">
        <tr>
            <td>Album</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in carts" :key="item.idProduk">
            <td>{{item.album}}</td>
            <td>{{item.qty}}</td>
            <td>Rp. {{item.subTotal}}</td>
            <td>
                <button @click="subtractCarts(item.idProduk)" style="width: 5rem;">Remove</button>
            </td>
        </tr>
        <tr>
            <td>
                <button @click="checkout" style="width: 5rem;">Checkout</button>
            </td>
            <td>
                <button @click="totalPrice">Total</button>
            </td>
            <td>Rp.{{ total }}</td>
        </tr>
    </table>
</template>
<script>
export default {
    props: ['carts'],
    data() {
        return {
            total: 0
        }
    },
    methods: {
        subtractCarts(id) {
            this.carts.forEach((cart) => {
                if (cart.idProduk == id) {
                    if (cart.qty === 0) {
                        this.carts.splice(this.carts.indexOf(cart), 1);
                        console.log(cart.subTotal)
                    } else {
                        cart.qty -= 1;
                        cart.subTotal = cart.qty * cart.price;
                    }
                }
            });
        },
        totalPrice() {
            this.carts.forEach((cart) => {
                this.total += cart.subTotal;
            });
        },
        checkout() {
            if (this.carts.length !== 0) {
                alert("Total Anda Adalah Rp." + this.total);
                location.reload();
            } else {
                alert("Isi keranjang terlebih dahulu!");
            }
        },
    }
}
</script>