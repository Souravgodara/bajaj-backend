const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.write("<h1>Server is running</h1>");
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (/^\d+$/.test(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
    }
  });

  let highestAlphabet = [];
  if (alphabets.length > 0) {
    highestAlphabet[0] = alphabets.reduce((highest, current) => {
      return current.toUpperCase() > highest.toUpperCase() ? current : highest;
    }, "A");
  }

  return res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  });
});

app.get("/bfhl", (req, res) => {
  return res.status(200).json({
    operation_code: 1,
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
