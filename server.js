const express = require('express');
const evalCalculator = require('./services/evalCalculator')

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.status(200).send("Xabalau")
})

app.post('/', async (req, res) => {
  const {value} = req.body;
  console.log("Value = " + value)
  result = await evalCalculator(value)
  res.status(200).json(result)
})

app.listen(PORT, () => console.log(`Project Calculator online in PORT: ${PORT}`))