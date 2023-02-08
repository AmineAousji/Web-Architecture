let express = require('express');
let router = express.Router();

router.get('/', (request, response) => response.send('Hello World'));

module.exports = router;