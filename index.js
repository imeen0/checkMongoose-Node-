const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const connection=require("./dbconnection")
const taskRoutes= require("./routes3/taskRoutes")

dotenv.config()
const app=express()
connection()

app.use(express.json())
const port =process.env.PORT
app.listen(port, () => console.log(`server runnig on:${port}`))
const person = new Person({
    name: "Alice",
    age: 25,
    favoriteFoods: ["Pizza", "Salade"],
  });
  
  person.save((err, data) => {
    if (err) return console.error(err);
    console.log("Personne sauvegardée :", data);
  })

  const arrayOfPeople = [
    { name: "John", age: 30, favoriteFoods: ["Burger"] },
    { name: "Mary", age: 35, favoriteFoods: ["Pasta"] },
    { name: "Paul", age: 40, favoriteFoods: ["Sushi"] },
  ]
  
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err)
    console.log("Personnes créées :", data)
  })

  Person.find({ name: "John" }, (err, data) => {
    if (err) return console.error(err);
    console.log("Personnes trouvées :", data)
  })

  
  Person.findOne({ favoriteFoods: "Pizza" }, (err, data) => {
    if (err) return console.error(err)
    console.log("Personne trouvée :", data)
  })

  const personId = "id_de_la_personne"
Person.findById(personId, (err, data) => {
  if (err) return console.error(err)
  console.log("Personne trouvée par ID :", data)
})

Person.findById(personId, (err, person) => {
    if (err) return console.error(err)
  
    person.favoriteFoods.push("Hamburger")
    person.save((err, updatedPerson) => {
      if (err) return console.error(err)
      console.log("Personne mise à jour :", updatedPerson)
    })
  })

  Person.findOneAndUpdate(
    { name: "John" },
    { age: 20 },
    { new: true },
    (err, updatedPerson) => {
      if (err) return console.error(err)
      console.log("Personne mise à jour :", updatedPerson)
    }
  )

  Person.findByIdAndRemove(personId, (err, data) => {
    if (err) return console.error(err)
    console.log("Personne supprimée :", data)
  })

  Person.remove({ name: "Mary" }, (err, result) => {
    if (err) return console.error(err)
    console.log("Documents supprimés :", result)
  })

  Person.find({ favoriteFoods: "Burritos" })
  .sort({ name: 1 }) // Tri par ordre alphabétique
  .limit(2) // Limite à 2 résultats
  .select("-age") // Exclure le champ 'age'
  .exec((err, data) => {
    if (err) return console.error(err)
    console.log("Résultats de la recherche :", data)
  })

  
