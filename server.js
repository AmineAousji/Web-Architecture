//Import express
let express = require('express');

//Initialize the app
let app = express();

let routes = require('./routes/route')
app.use('/',routes);

let PORT = 3000;
//Launch the app and listen to port 3000
app.listen(PORT, () => console.log('Server is now listening on port' + PORT));