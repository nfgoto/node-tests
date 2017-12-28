const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        message: 'Please contact your network administrastor.'
    });
});


app.get('/users', (req, res) => {
    res.send([{
            name: 'toto',
            age: '34'
        },
        {
            name: 'tito',
            age: '55'
        },
        {
            name: 'tuto',
            age: '323'
        }
    ]);
});


app.listen(3000, () => {
    console.log('Server running on port 3000.');
})

module.exports.app = app; // to access the server outside