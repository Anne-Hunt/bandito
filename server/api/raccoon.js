export default defineEventHandler(() => {

    const { data } = await $fetch('connectionString')
    return data
})