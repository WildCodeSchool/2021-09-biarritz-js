const express = require('express');
const serverPort = 8000;
const app = express();

const things = [
    { id: 1, name: 'Socks' },
    { id: 2, name: 'Computer' },
    { id: 3, name: 'Passion' },
   ];

const icecreams = [
    { id:1, name: 'Vanilla', color:'jaune'},
    { id:2, name: 'Chocolat', color:'noir'},
    { id:3, name: 'Pistache', color:'jaune'},
    { id:4, name: 'Cassis', color:'gris'},
    { id:5, name: 'Framboise', color:'jaune'},
    { id:6, name: 'Fraise', color:'gris'},
    { id:7, name: 'Nutella', color:'noir'},
    { id:8, name: 'Rhum Raisin', color:'jaune'},
    { id:9, name: 'Coco', color:'gris'},
    { id:10, name: 'Straciatella', color:'noir'},
    { id:11, name: 'Menthe', color:'gris'},
]
   
// define the things route
app.get('/things', (req, res) => {
    res.send(things);
});


app.get('/things/:id', (req, res) => {
const parsedThingId = parseInt(req.params.id)
const thing = things.find((thing) => thing.id === parsedThingId);
if (thing) {
    res.send(thing);
} else {
    res.sendStatus(404);
}
});
   
// define the icecreams route
app.get('/icecreams', (req,res) => {
    let limit = req.query.limit;
    let color = req.query.color;
    let icecreamsColor = [];
    if (!limit){
        limit=10;
    }

    if (color){
        icecreamsColor = icecreams.filter((icecream)=> icecream.color === color);
    }

    const icecreamsLimit = icecreamsColor.slice(0,limit);
    if (icecreamsLimit.length===0){
        res.send(icecreamsLimit);
    }
    else{
        res.sendStatus(404);
    }
    
});

app.get('/icecreams/:id', (req, res) => {
    const parsedThingId = parseInt(req.params.id)
    const icecream = icecreams.find((icecream) => icecream.id === parsedThingId);
    if (icecream) {
        res.send(icecream);
    } else {
        res.sendStatus(404);
    }
    });

app.listen(serverPort, () => console.log('Express server is running'));
