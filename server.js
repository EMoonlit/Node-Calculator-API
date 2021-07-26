const express = require('express');
const route = require('./routes');
const evalCalculatorService = require('./services/evalCalculatorService');
const middlewares = require('./middlewares');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app
  .use('/user', route.userRoute)
  .use('/login', route.loginRoute)
  .use(middlewares.errorMiddleware);

app.post('/', async (req, res) => {
  const {value} = req.body;
  console.log("Value = " + value)
  result = await evalCalculatorService(value)
  res.status(200).json(result)
})

app.listen(PORT, () => console.log(`Project Calculator online in PORT: ${PORT}`))