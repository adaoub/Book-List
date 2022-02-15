const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

app.use(express.json())
app.use(router);
// app.get('/', (req,res) => {
//     res.send('Starting Books-api project!');

// })

app.listen(port, () => {
    console.log(`Book-List app listening on http://localhost:${port}`)
})