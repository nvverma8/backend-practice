require('dotenv').config()
const express =require('express')

const app=express();


app.get('/',(req,res)=>{
    res.send("hello world")

})

app.get('/twitter',(req,res)=>{
    res.send("twitter is running");
});
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port`)
})