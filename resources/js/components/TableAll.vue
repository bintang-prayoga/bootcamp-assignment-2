<template>
    <div>
        <h1>Cart</h1>
        <table-cart :cartProduct="cartProduct" />
        <table-cart :listProduct="listProduct" />
    </div>
</template>
<script>
export default {
        props: {
        listProduct: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
}
</script>