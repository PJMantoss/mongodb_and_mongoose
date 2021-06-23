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

  //Challenge 7 - Use model.findById() to Search Your Database By _id
  const findPersonById = (personId, done) => {
    Person.findById({_id: personId}, (err, data) => {
      if(err) console.error(err);
      done(null,data);
    })
  };

  //Challenge 8 - Perform Classic Updates by Running Find, Edit, then Save
  const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    //Use .findById() method to find the perosn by _id using parameter personId as key
    Person.findById(personId, (err, data) => {
      if(err) console.error(err);
      //use Array.push() to update list of the person's favoriteFoods
      data.favoriteFoods.push(foodToAdd);
      //Inside the find callback, save() the updated person
      data.save((err, updatedData) => {
        if(err) console.error(err);
        done(null, updatedData)
      })
    })
  };

  //Challenge 9 - Perform New Updates on a Document Using model.findOneAndUpdate()
  const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, { new: true }, (err, updatedData) => {
      if(err) console.error(err);

      done(null, updatedData);
    })
  }

  //Challenge 9 - Perform New Updates on a Document Using model.findOneAndUpdate()
  const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, { new: true }, (err, updatedData) => {
      if(err) console.error(err);
  
      done(null, updatedData);
    });
  }