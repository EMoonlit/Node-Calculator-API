const evalCalculator = async (expression) => {
  console.log(`Valores recebidos: ${expression} \n
    Aplicado eval: ${eval(expression)}
  `)
  return eval(expression)
}

module.exports = evalCalculator;