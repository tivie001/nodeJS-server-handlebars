const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
fakeAPI = () => {
    return [
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
            "image": "https://www.pngitem.com/pimgs/m/13-135859_harry-potter-hd-png-download.png"
        },
        {
            "_id": "5a122c200f5ae10021650d88",
            "name": "Tom Riddle",
            "house": "Slytherin",
            "school": "Hogwarts School of Witchcraft and Wizardry",
            "alias": "Lord Voldemort",
            "wand": "Yew, 13 1/2\", phoenix feather core",
            "boggart": "his own corpse",
            "image": "https://media.harrypotterfanzone.com/teenage-tom-riddle-half-blood-prince-portrait.jpg"
        },
        {
            "_id": "5a12327c0f5ae10021650d94",
            "name": "Salazar Slytherin",
            "role": "Founder, Hogwarts",
            "house": "Slytherin",
            "school": "Hogwarts School of Witchcraft and Wizardry",
            "image": "https://vignette.wikia.nocookie.net/harrypotter/images/6/60/PM_SalazarSlytherin_Founders.jpg/revision/latest/top-crop/width/360/height/450?cb=20180611201037"
        }
    ];
}


app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.render('main', { layout: 'index', characters: fakeAPI()});
})
app.listen(process.env.PORT || 3002, () => {
    console.log("Server running on port 3002");
});
