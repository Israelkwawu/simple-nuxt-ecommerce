<template>
    <div>

        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto quasi saepe vitae incidunt provident tenetur quod, impedit recusandae explicabo. Mollitia quae ipsum soluta maxime laudantium quam alias quos placeat.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui amet exercitationem in at. Omnis nemo amet mollitia soluta nostrum minus laborum fugiat reiciendis quibusdam quis? Tempore dolores porro qui!</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja') //GET request
    const { data } = await useFetch('/api/ninja?name=mario', {
        method: 'post',
        body: {
            age: 30
        }
    }) 

    // const { data } = await useFetch('/api/currency/GBP')

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