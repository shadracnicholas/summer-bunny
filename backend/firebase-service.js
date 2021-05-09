require('dotenv-safe').config()
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

// Init Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL
})

module.exports = admin