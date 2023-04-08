import express  from 'express';
import {Response, Request, Nextfunction} from 'express';
import router from './src/routes/routes.ts';

const app = express();
const port = 7000;

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

