const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/garage", { useNewUrlParser: true, useUnifiedTopology: true })
const db= mongoose.connection
db.on("error",console.error)
db.once("open",()=>console.log("dbok"))

 const carsSchema = new mongoose.Schema({
        brand:String,
        model:String,
        year:Number,
        created:{ type: Date, default: Date.now }
    })

    const carAdd = mongoose.model("carAdd", carsSchema)

    const renault = new carAdd({
        brand:"Renault",
        model:"Espace",
        year:1999,
    })
    try{
      renault.save()
        console.log('New car')
    }catch(err){
        console.log(err)
    }

    
    const renault2 = new carAdd({
        brand:"Renault",
        model:"Scenic",
        year:2004,
    })
    try{
      renault2.save()
        console.log('New car')
    }catch(err){}

   
    const peugeot = new carAdd({
        brand:"Peugeot",
        model:308,
        year:3000,
    })
    try{
      peugeot.save()
        console.log('New car')
    }catch(err){}

    const updateCars= async ()=>{ 
        await carAdd.updateOne({ modele: '308' }, { year: 3000 })
 
    }
     updateCars()

     const deleteCars=async()=>{
         await carAdd.deleteMany({brand:"Renault" })
     }
     deleteCars()

    

