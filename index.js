const express = require('express');
const redis = require('redis');

const process = require('process');
const app = express();

const client = redis.createClient({
    host: 'redis-server',    //this is the name of the service in the docker-compose.yaml file
                             // express will treat this as a url and will try to connect to it, when docker compose notices this --> it will redirect it to the container with the same name
    port: 6379      // this is the default port that redis image will listen to 
});

client.set('visits', 0);


app.get('/',(req,res)=>{
    
    
    //This will be executed with every request to the node server 
    
    process.exit(0);  //This line is for trial, it makes the nodejs server crashes ( exits with code 0)

    client.get('visits', (err, visits)=>{
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits)+1);
        //Increase the number of visitors by 1
    })
});

app.listen(8080,()=>{
    console.log("Listening on port 8080");
});