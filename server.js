const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method)

    // setHeader content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("hello world");

    // res with html
    // res.setHeader('Content-Type', 'text/html')
    // res.write("<p style='color:red';>hello world</p>");
    // res.end()
    
    
    // res with html file
    res.setHeader('Content-Type', 'text/html')

    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err)
        }else{
            // res.write(data);
            // res.end
            // //or
            res.end(data);
        }
    })
})

// //   127.0.0.1
server.listen(3000, "localhost", () =>{
    console.log("listing for event from server 3000")
})