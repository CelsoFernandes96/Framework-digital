const assert = require('assert')
const {
  sendNumberEmpty,
  sendNumber
} = require('./service')

// instalamos o pacote nock, para simular requisicoes
const nock = require('nock')


describe('FrameWork Digital Tests', function () {
  describe('Retornar mensagem obrigatório', function () {
    this.beforeAll(() => {
      const response = {
        "message": "Número de entrada é obrigatório"
      }

      nock('http://localhost:3003')
        .post('/task/index', { number: "" })
        .reply(200, response)
    })

    it('deve retornar mensagem que o parametro de entrada é obrigatorio', async () => {
      const expected = {
        "message": "Número de entrada é obrigatório"
      }

      const resultado = await sendNumberEmpty()
      if (resultado) {
        assert.deepStrictEqual(resultado, expected)
      }
    })
  })

  describe('Retornar divisores e numeros primos do numero 45', function () {
    this.beforeAll(() => {
      const response = {
        "dividerNumbers": [
          45,
          15,
          9,
          5,
          3,
          1
        ],
        "primeNumbers": [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43
        ]
      }

      nock('http://localhost:3003', { allowUnmocked: true })
        .post('/task/index', { number: "45" })
        .reply(200, response)
    })

    it('deve retornar numeros primos e divisores de 45', async () => {
      const expected = {
        "dividerNumbers": [
          45,
          15,
          9,
          5,
          3,
          1
        ],
        "primeNumbers": [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43
        ]
      }

      const resultado = await sendNumber("45")
      if (resultado) {
        assert.deepStrictEqual(resultado, expected)
      }
    })
  })
})