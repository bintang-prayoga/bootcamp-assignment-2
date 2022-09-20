<template>
    <div>
        <h1>All Product</h1>
        <table-all :listProduct="listProduct" />
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
    methods: {
        subtract(index) {
            this.$emit("emitSubtract", index);
        }
    }
}
</script>