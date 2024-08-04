export default defineEventHandler(() => {

    async function getProducts() {
        try {
            const { data } = await api.get('api/products')
            return data
        } catch (error) {
            return setResponse(event, { statusCode, statusMessage: 'Unable to get products.' })
        }
    }
})