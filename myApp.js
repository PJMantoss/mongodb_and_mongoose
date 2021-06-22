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

//Challenge 3 - Create and Save a Record of a Model
const createAndSavePerson = (done) => {
    papaJoe = new Person({
      name: "Papa Joe",
      age: 62,
      favoriteFoods: ["Corn Food","Porridge","Potato"]
    });

    papaJoe.save((err, data) => {
        if(err) console.error(err);
        done(null, data)
      })
}

//Challenge 4 - Create Many Records with model.create()
let arrayOfPeople = [
    {
      name: "Papa Joe",
      age: 62,
      favoriteFoods: ["Corn Food","Porridge","Potato"]
  },
    {
      name: "Mama Papis",
      age: 61,
      favoriteFoods: ["Rice","Salad","Fish"]
    },
    {
      name: "Mummy Shyne",
      age: 65,
      favoriteFoods: ["Yam","Porridge","Zobo"]
    }
  ]

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
      if(err) console.error(err)
      done(null, data);
    })
  };

  const findPeopleByName = (personName, done) => {
    Person.find({name: personName}, (err, data) => {
        if(err) console.error(err);
        done(null, data);
    })
  }

  //Challenge 5 - Use model.find() to Search Your Database
  const findPeopleByName = (personName, done) => {
    Person.find({name: personName}, (err, data) => {
      if(err) console.error(err);
      done(null, data);
    })
  };

//Challenge 6 - Use model.findOne() to Return a Single Matching Document from Your Database
  const findOneByFood = (food, done) => {
    Person.findOne({favoriteFoods: food}, (err, data) => {
      if(err) console.error(err);
      done(null, data);
    })
  };