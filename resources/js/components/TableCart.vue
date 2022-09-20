<template>
    <table style="border-spacing: 30px; text-align: center;">
            <tr>
                <td>Cover</td>
                <td>Album</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Action</td>
            </tr>
            
            <tr v-for="(item, index) in cartProduct.filter(item => item.qty > 0)" :key="index" >
                <div v-if="item.qty > 0">
                    <td>
                        <a :href="item.img_url" target="_blank" rel="noreferrer noopener">
                            <img width="100" height="100" :src="item.img_url" />
                        </a>
                    </td>
                    <td>{{item.album}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.qty}}</td>
                    <td></td>
                </div>
                <div v-else>
                    <h1>Cart Kamu Masih Kosong</h1>
                </div>
            </tr>
        </table>
</template>
<script>
export default {
    props: {
        cartProduct: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
}
</script>