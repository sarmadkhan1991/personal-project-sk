require('dotenv').config()
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const ac = require('./Controller/authCtrl');
const pc = require('./Controller/productCtrl');
const cc = require('./Controller/cartCtrl');
const app = express();
app.use(express.json());

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db);
}); 

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

app.use(express.static(`${__dirname}/../build`))

app.post('/api/register', ac.register);

app.post('/api/login', ac.login);

app.get('/api/logout', ac.logout);

app.get('/api/user', ac.userData);

app.get('/api/products', pc.getAll);

app.post('/api/cart/:id', cc.add);




app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`));