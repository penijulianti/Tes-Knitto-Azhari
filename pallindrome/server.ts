import express from 'express';
import { isPalindrome } from './controller';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/check-palindrome', (req, res) => {
  const { text } = req.body;
  const result = isPalindrome(text);
  res.json({ isPalindrome: result });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
