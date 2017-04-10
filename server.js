const express = require ('express'); // es6 supported in newer node, req node_module
const app = express(); // server object
// nodemon - restarts server for you when you make a change (eg. > nodemon server.js)
//import React from 'react';

app.get('/', (req, res) => { // first route
  res.send('Hello World!')
});

app.get('/name', (req, res) => { 
  res.send('Jeanine')
});

app.get('/friends', (req, res) => { 
    const friends = [
        'Sarah', 'Silvy', 'Tanja', 'Mieke'
    ];
  res.send(friends)
});

app.get('/favorite-film', (req, res) => { 
    const film = {
        name: 'V for Vendetta',
        year_released: '2004',
        characters: [
            'V', 'Evee', 'Chairman'
        ]
    }
  res.send(film)
});

app.listen(5000, () =>  {
  console.log('Example app listening on port 5000!')
});