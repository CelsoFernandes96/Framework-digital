const primeNumbers = (num) => {
  let numbers = new Array();
  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) {
      numbers.push(i);
    }
  }

  return numbers
}

const isPrime = (n) => {
  if (n < 2) return false;

  /**
   * Um número inteiro é primo se não for divisível por nenhum primo menor ou igual à sua raiz quadrada
   **/

  var q = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

const dividerNumber = (num) => {
  let numbers = new Array();
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      numbers.push(num / i)
    }
  }

  return numbers
}

module.exports = {
  primeNumbers,
  dividerNumber
}