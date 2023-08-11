"use strict";

// Friday: Fibonacci Sequence
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

function fibonacci(num) {
  let result = [0n, 1n];

  for (let i = 2; i <= num; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result.join();
}

// console.log(fibonacci(43n)); // 267914296n
// console.log(fibonacci(101n)); // 354224848179261915075n
// console.log(fibonacci(227n)); // 76159080909572301618801306271765994056795952743n
// console.log(fibonacci(491n)); // 1133597084613134447271848482284309025629966048359864130560049384871348807054284272752352079971127752695n
// console.log(fibonacci(881n)); // 362775891315529307313854445604079804026165243298890571460172146624950618253496832928674934214552747819636468557982433331707298094414346999937693522762753421633733208978816115814107035 n
