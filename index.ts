import express, {Express, Request, Response} from 'express';
const port = 8800;

const app = express()

app.get("/", (req,res)=>{
    res.send("HELLO FROM EXPRESS AND TYPESCRIPT!!")
})

app.listen(port,()=>{
    console.log(`Now listening on port ${port}`)
})