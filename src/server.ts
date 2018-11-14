import * as express from "express";
import * as morgan from "morgan";

const app = express();
const port = 3001;

app.use(express.json());
app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Express running on port ${port}.`);
});
