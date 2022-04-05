const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
        id: 0,
        name: "Igor",
        phone: "(111)1233445"
    },
    {
        id: 1,
        name: "José",
        phone: "(111)1233445"
    },
    {
        id: 2,
        name: "Marcos",
        phone: "(111)1233445"
    }

]


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render('user', { users });

})


app.listen(3000, () => {
    console.log('Server Running on 3000')
})