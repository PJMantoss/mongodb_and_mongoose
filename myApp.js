require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Joel2:<kingofglory>@cluster0.sffs5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });