<template>
    <div style="text-align: center; width: 20em;">
        <h1>Cart</h1>
        <div>
            <table-cart :carts="carts" />
        </div>
    </div>
</template>
<script>
export default {
    props: ['carts'],
}
</script>