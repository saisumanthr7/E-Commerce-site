const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const connection = mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected successfullt to database!")
    }
    catch(error){
        console.log("Database Error", error);
    }
   
}

module.exports = dbConnect;