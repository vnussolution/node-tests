const express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(404).send({ error: 'page not found', name: 'ttesting' });
});

app.get('/users', (req, res) => {
    res.status(200).send([{ name: 'test1', age: '2' }, { name: 'test2', age: '4' }, { name: 'test3', age: '12' }]);
});

app.listen(3000, () => console.log(`Server is listening on port ${port}`));

module.exports.app = app;