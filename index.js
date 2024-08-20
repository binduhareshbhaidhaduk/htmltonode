const express=require('express');
const path=require('path');

const app=express()
const PORT =5001;

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname,'/views')))

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/feature',(req,res)=>{
    res.render('feature')
})

app.listen(PORT,(err)=>{
    if(!err) console.log(`server running ${PORT}`)
})