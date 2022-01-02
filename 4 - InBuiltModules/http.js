//HTTP -> HYPER TEXT TRANSFER PROTOCOL
//HERE ONWARDS THE COURSE REVOLVES AROUND SERVER SIDE THAT IS HTTP SO MORE FOCUS IS ON HTTP
//ALLOWS US TO SET UP A WEB SERVER
//LARGE PART CREATING OWN SERVER AND SETTING UP API
//WEB SERVERS KEEP ON LSTENING TO WHAT YOU DO

const http = require('http');

//createserver -> TAKES 2 ARGUMENTS(CALLBACKS) REQUEST,RESPONSE

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.statusCode = 200;  //OK
        res.end('Welcome To Our Homepage');
    }
    if(req.url === '/about')
    {
        res.end('Here is our short history');
    }
    res.end(`<h1> Oops! </h1> <p> We cant seem to find a page </p> <a href ="/"> Back-Home</a>`); //DEFAULT CASE
    //res.write('Welcome to our homepage');
    //res.end();  //RESPONSE END LIKH NAHI LIKH YE LINE ZYADA FARAK NAHI PADTA
});

server.listen(5000); //GO TO LOCALHOST:5000

