const helpers = require('../helpers/calculation')

class TaskController {
  /*
    @number type number
  */
  async index(req, res) {
    try {
      let { number } = req.body
      if (!number) {
        throw "Número de entrada é obrigatório"
      }

      // calcular todos os divisores que compõem o número de entrada.
      const returnDividorNumber = await helpers.dividerNumber(number)

      // calcular todos os divisores primos que compõem o número.
      const returnPrimeNumber = await helpers.primeNumbers(number)

      res.status(200).json({
        "dividerNumbers": returnDividorNumber,
        "primeNumbers": returnPrimeNumber
      })
    } catch (err) {
      res.status(400).json({ message: err })
    }
  }
}

module.exports = new TaskController()