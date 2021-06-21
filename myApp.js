require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Joel2:kingofglory@cluster0.sffs5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

//Challenge 2 - Create a Model
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {type: String, required: true},
    age: Number,
    favoriteFoods: [String]
  });

let Person = mongoose.model("Person", personSchema);