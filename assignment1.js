function printFirstNPrimes(n) {
    let primes = [2]; 
    let num = 3; 
    while (primes.length < n) {
      let isPrime = true;
      for (let i = 0; i < primes.length; i++) {
        if (num % primes[i] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
      num++;
    }
    console.log(primes);
  }
  
  printFirstNPrimes(10); 