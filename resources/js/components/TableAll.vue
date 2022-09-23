
<template>
<div>
    <table style="border-spacing: 10px; text-align: center;">
            <tr>
                <td>Cover</td>
                <td>Album</td>
                <td>Artist</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Action</td>
            </tr>
            <tr v-for="(item) in allProduct" :key="item.id" >
                    <td>
                        <a :href="item.img_url" target="_blank" rel="noreferrer noopener">
                            <img width="100" height="100" :src="item.img_url" />
                        </a>
                    </td>
                    <td>{{item.album}}</td>
                    <td> {{ item.artist }} </td>
                    <td>{{item.qty}}</td>
                    <td>Rp. {{item.price}}</td>
                    <td v-if="item.qty > 0">
                        <button @click="addToCart(item.id)">Add</button>
                    </td>
                    <td v-else>
                        <button style="background: #C3C3C3;">Habis</button>
                    </td>
            </tr>
        </table>
</div>
</template>
<script>
export default {
    props: ['allProduct'],
    methods: {
        addToCart(id){
            this.$emit("emitAddToCart", id);
        },
    }
}
</script>