const express = require('express');
const app = express();

const characters = [
    {
        "_id": "5a12292a0f5ae10021650d7e",
        "name": "Harry Potter",
        "role": "student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "The Boy Who Lived",
        "wand": "Holly, 11\", phoenix feather",
        "boggart": "dementor",
        "patronus": "stag",
    },
    {
        "_id": "5a122c200f5ae10021650d88",
        "name": "Tom Riddle",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Lord Voldemort",
        "wand": "Yew, 13 1/2\", phoenix feather core",
        "boggart": "his own corpse",
    },
    {
        "_id": "5a12327c0f5ae10021650d94",
        "name": "Salazar Slytherin",
        "role": "Founder, Hogwarts",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
    }
]
app.get("/api/characters", (req, res, next) => {
    res.send(characters)
    next()
})
app.post('/api/characters/new', (req, res) => {
    characters.push({
        "_id": "5a0fa7dcae5bc100213c2338",
        "name": "Sirius Black",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Padfoot",
        "animagus": "black dog"
    })
    res.send("Character Added!");
});
app.put('/api/characters/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedIndex = characters.findIndex(element => element._id === id);
    characters[updatedIndex] = {...characters[updatedIndex], name: "Tyler Ivie"}
    res.send("Character Updated!");
});
app.delete('/api/characters/delete/:id', (req, res) => {
    const id = req.params.id;
    const updatedIndex = characters.findIndex(element => element._id === id);
    characters[updatedIndex] = {}
    res.send("Character Deleted!");
})
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});