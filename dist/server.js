// @ts-ignore
import * as express from 'express';
// @ts-ignore
import * as morgan from 'morgan';
const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan('combined'));
app.listen(port, () => {
    console.log(`Express running on port ${port}.`);
});
