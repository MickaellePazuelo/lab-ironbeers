const express = require('express');
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:
 app.use("/", indexRouter);
 app.use("/users", usersRouter);
 app.use("/beers", require("./routes/beers"));
 



app.listen(3000, () => console.log('🏃‍ on port 3000'));
