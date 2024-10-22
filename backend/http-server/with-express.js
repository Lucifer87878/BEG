const express = require("express");

const port = 3000;

const server= express();

/*
/localhost300/
    /events
    /attendes
    /user

server.get("/", (req,res)=> {

    console.log("requist to",req.url)
    res.send();


});


server.post("/", (req,res)=> {

    console.log("requist to",req.url)
    .push
    ({
     

    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send();
    }
    catch (err)
    {
      res.status(500);
      res.send();
    }

});

server.delete("//:id", (req ,res) =>  {

});





server.get("/", (req,res)=> {

    console.log("requist to",req.url)
    res.send();


});
    /creator
    /StartTime
    /EndTime
*/


//attendes

server.get("/attendes", (req,res)=> {

    console.log("requist to",req.url)
    res.send(attendes);


});


server.post("/attendes", (req,res)=> {

    console.log("requist to",req.url)
    attendes.push
    ({
     

    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send(attendes);
    }
    catch (err)
    {
      res.status(500);
      res.send(attendes);
    }

});

server.delete("/attendes/:id", (req ,res) =>  {

});



//user

server.get("/user", (req,res)=> {

    console.log("requist to",req.url)
    res.send(user);


});

server.get("/user", (req,res)=> {

    console.log("requist to",req.url)
    res.send(user);


});


server.post("/user", (req,res)=> {

    console.log("requist to",req.url)
    user.push
    ({
     

    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send(user);
    }
    catch (err)
    {
      res.status(500);
      res.send(user);
    }

});

server.delete("/user/:id", (req ,res) =>  {

});

//creator

server.get("/creator", (req,res)=> {

    console.log("requist to",req.url)
    res.send(creator);


});


server.post("/creator", (req,res)=> {

    console.log("requist to",req.url)
    creator.push
    ({
     

    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send(creator);
    }
    catch (err)
    {
      res.status(500);
      res.send(creator);
    }

});

server.delete("/creator/:id", (req ,res) =>  {

});

//StartTime

server.get("/StartTime", (req,res)=> {

    console.log("requist to",req.url)
    res.send(StartTime);


});


server.post("/StartTime", (req,res)=> {

    console.log("requist to",req.url)
    StartTime.push
    ({
     

    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send(StartTime);
    }
    catch (err)
    {
      res.status(500);
      res.send(StartTime);
    }

});

server.delete("/StartTime/:id", (req ,res) =>  {

});
//EndTimes

server.get("/EndTimes", (req,res)=> {

    console.log("requist to",req.url)
    res.send(EndTimes);


});


server.post("/EndTimes", (req,res)=> {

    console.log("requist to",req.url)
    EndTimes.push
    ({
     

    });
    try
    {
    events.push(req,body)
    res.status(202);
    res.send(EndTimes);
    }
    catch (err)
    {
      res.status(500);
      res.send(EndTimes);
    }

});

server.delete("/EndTimes/:id", (req ,res) =>  {

});

//events
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