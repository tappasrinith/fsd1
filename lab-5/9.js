const http=require('http')

const server=http.createServer((req,res)=>{
    res.write("Hello,World!!")
    res.end()
})

server.listen(8080,()=>{
    console.log("Server is running on port 8080")
});

