const express = require("express");

const port = 3000;

const server= express();

/*
/localhost300/
    /events
    /attendes
    /user
    /creator
    /StartTime
    /EndTime
*/

server.get("/events", (req,res)=> {

    console.log("requist to",req.url)
    res.send(events);


});


server.post("/events", (req,res)=> {

    console.log("requist to",req.url)
    events.push
    ({
     "name":"birthday",
     "private":"false",
     "descriptions":"birthday party"


    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send(events);
    }
    catch (err)
    {
      res.status(500);
      res.send(events);
    }

});

server.delete("/event/:id", (req ,res) =>  {

});

server.listen((port)  => {
    console.log('server is running')
});