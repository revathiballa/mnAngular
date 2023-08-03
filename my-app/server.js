const express= require('express')
const app=express()
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
const products=[
    {
        id:1,
        name:'iphone'
    },
    {
        id:2,
        name:'samsung'
    },
    {
        id:3,
        name:'mi'
    }
]
app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const paramdata=products.filter(data => data.id.toString( )=== req.params.id)
    res.json(paramdata)
})
app.post('/addproducts',(req,res)=>{
    const {id,name} =req.body
    res.send("data stored");
})
app.listen(9000,()=>console.log("server is running....."))
