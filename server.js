// set server and routes
const app = require('./app')
const db = require('./db')
const router = require('./routes/index')

const PORT = process.env.PORT || 3000

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(router)

app.listen(PORT, () => `Server running on PORT ${PORT} 🔥`);