const express = require('express');
const app = express();
const useRoutes = require('./fucao')
 
const { neon } = require('@neondatabase/serverless');


app.use(express.json())

app.use('/api/times', useRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})