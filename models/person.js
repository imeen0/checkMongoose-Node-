const { default: mongoose } = require("mongoose")

const { Schema, model } = mongoose

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = model('Person', personSchema)
model.exports=Person
