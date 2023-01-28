const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const path = require('path')

const PORT = 5000

app.use(expressLayouts);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.use(express.static('public'));


app.use('/',require('./routes/home'))






app.listen(PORT,()=>{
    console.log("Server Connected...!");
})
