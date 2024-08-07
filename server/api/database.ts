import mongoose from 'mongoose'

export default async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(useRuntimeConfig().apiSecret.MONGO_URI)
        console.log('MongoDB is in the house.')
    } catch (error) {
        return createError({ statusCode: 500, statusMessage: 'Unable to connect to MongoDB or get response.' })
    }
}