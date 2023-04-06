export default defineEventHandler(async (event)=>{
    
    // const { name } = getQuery(event)

    // const { age } =  await readBody(event)
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=4eYWqZKiArYUgOr0OnNIz9iQmpOC2jIvvoUtZVOE')
    return {
        data    
    }
})