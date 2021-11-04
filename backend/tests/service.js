const {
  post
} = require('axios')

const URL = `http://localhost:3003/task/index`

async function sendNumberEmpty() {
  const result = await post(URL, { "number": "" })
  return result.data
}

async function sendNumber(number) {
  const result = await post(URL, JSON.stringify({ "number": number }))
  return result.data
}

module.exports = {
  sendNumberEmpty,
  sendNumber
}