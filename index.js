const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let user = {
    name: "Igor",
    phone: "(111)1233445"
}


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render('user', user);

})


app.listen(3000, () => {
    console.log('Server Running on 3000')
})