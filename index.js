const express  = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world from the server")
});

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT} `)
})