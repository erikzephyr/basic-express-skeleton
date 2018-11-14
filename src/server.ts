import * as express from 'express';

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Express running on port ${port}.`);
});
