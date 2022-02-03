const express = require('express')
const app = express()
const expressStatusMonitor = require('express-status-monitor')

const PORT = process.env.PORT || 5000
const basicRoutes = require('./routers/basicRouter') 

app.use('/basic',basicRoutes)
app.use(expressStatusMonitor())

app.listen(PORT,()=> {
  console.log(`Server running on ${PORT}`)
})

app.get('/',(req,res)=> {
    res.send('Welcome from basic template of node')
})



