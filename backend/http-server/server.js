const http = require("http");

const myIp = "10.24.48.85";

const server = http.createServer=((req,res) => {

    console.log("Got here");
    console.log({req,res});
    res.write("hej ifrån " + myIp );
    res.end()

});
server.listen(3000);