//Import express
let express = require('express');

//Initialize the app
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
let routes = require('./routes/route')
app.use('/',routes);




let PORT = 3000;
//Launch the app and listen to port 3000
app.listen(PORT, () => console.log('Server is now listening on port' + PORT));