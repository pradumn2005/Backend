const http = require("http");

const myServer = http.createServer((req,res) => {

    switch(req.url){
        case '/' : 
        res.end("welcome Home Page");
        break;

        case '/aboutus':
            res.end("This is about us page");
            break;

        default:
        res.end("404");

    }

})
    myServer.listen(3000,()=> console.log("server started on http://localhost:3000"));
