import mongo, { Schema } from 'mongoose'
import _conf from '../config'

const { site: { db: conf } } = _conf

let db = mongo.connection

db.on('error', (err) => {
    throw new Error(`Mongoose connection error: ${err}`)
})

db.on('connnected', () => {
    console.log('Mongoose connected')
})

db.on('disconnnected', () => {
    console.log('Mongoose disconnected')
})


process.on('SIGINT', () => {
    mongo.connection.close(() => {
        console.log('Mongoose disconnected through app termination')
        process.exit(0)
    })
})

mongo.connect(conf.url)


