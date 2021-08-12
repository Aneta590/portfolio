const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const heroesdb=require('./model.js')
const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/heroes',
 { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(8000)

 app.use(function(req,res,next){
    console.log('user')
    next()
})

const superHeroes=[
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]
//the async method; await in it allows you to connect to the database for that route
app.get('/heroes',async(req,res)=>{
    const superHeroes = await heroesdb.find()
    res.json(superHeroes);
});
//metoda async;await w srodku pozwala polaczyc sie z baza danych dla tego routa
app.get('/heroes/:name',async(req,res )=> {
    const name=req.params.name;
    const superHeroes = await heroesdb.findOne({name:name});
     res.json(superHeroes);
    

});
//metoda async;await w srodku pozwala polaczyc sie z baza danych dla tego routa
app.get('/heroes/:name/powers',async(req,res)=>{
    const name = req.params.name;
    const superHeroes = await heroesdb.findOne({name:name});
    console.log(superHeroes)
    res.json(superHeroes.power);    
});

// method async; await -can be replaced with then (with some performance consequences) 
app.post('/heroes',async(req,res) =>{
    // const superHeroes=await heroesdb.find()
    const details = req.body;
    const hero = new heroesdb (details)
    hero
    .save()
    .then(savedHero=>res.json(savedHero))
    .catch(()=>res.send("Not here"))
    // superHeroes.push(details);
    // res.send('It is here');
})

// heroesdb.insertMany(superHeroes)
// if it is active it will add the same data to db with each refresh

