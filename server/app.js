const mongoose = require("mongoose");

//connect to mongodb
const dbUri =
  "mongodb+srv://testuser:test123@cluster0.2pdswhe.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
 .then((result)=>console.log("connected to db"))
 .catch((error))
