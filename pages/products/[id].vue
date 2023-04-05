<template>
    <div>
        <product-details :product="product"></product-details>
    </div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})

const uri = 'https://fakestoreapi.com/products/'+id
const { data: product } = await useFetch(uri, {key: id})
if(!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Product Not Found',
        fatal: true
    })
}
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>