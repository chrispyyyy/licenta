const express = require('express');

const app = express();

app.get('/', (request, response) => {   //creating a route handler
    response.send({hi: 'world'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);