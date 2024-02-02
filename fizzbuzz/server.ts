import express from 'express';
import fizzBuzz from './controller';

const app = express();
const port = 3000;

app.get('/fizzbuzz', (req, res) => {
  res.send(`<html><body>${fizzBuzz(100)}</body></html>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
