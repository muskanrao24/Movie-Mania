const mongoose = require('mongoose');

module.exports = () => {
   // mongdb cloud connection is here
  mongoose
    .connect("mongodb+srv://kool1234:kooljool1234@cluster0.bqb4q.mongodb.net/dbbase?authSource=admin&replicaSet=atlas-nbfem0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to mongodb cloud! :)");
    })
    .catch((err) => {
      console.log(err);
    }); 
};


