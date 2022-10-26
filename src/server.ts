import express from 'express';
import { createCourse } from './routes';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('API Ativa!');
});

app.get('/courses', createCourse );

app.listen(3333, () => console.log('Server is running!'));