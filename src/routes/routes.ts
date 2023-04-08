import express  from 'express';
import {Response, Request, Nextfunction} from 'express';

const app = express();

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
});

export default app;