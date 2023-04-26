const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const connection = mongoose.connect('mongodb+srv://saisumanthreddy76:ecommerce@cluster0.cqtyekp.mongodb.net/test');
        console.log("Connected successfullt to database!")
    }
    catch(error){
        console.log("Database Error", error);
    }
   
}

module.exports = dbConnect;