import express from 'express';

const app = express();

app.use('/', (req, res) => {
    return res.json('Hello form Backend!');
});

app.listen(8000, () => {
    console.log('App listening to the port 8000');
});