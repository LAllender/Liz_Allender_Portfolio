const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

