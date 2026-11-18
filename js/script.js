function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

function calculateEngravingPrice(message, pricePerWord) {
  const oneWord = message.split(' ');
  const totalPrice = oneWord.length * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice('We will be together for a long time', 13));

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord('People who like pop and hip-hop will like the band Lngshot'));

function formatString(string) {
if (string.length <= 40) {
    return string;
  }else {
    return string.slice(0, 40) + '...';
  }
}
console.log(formatString('People who like pop and hip-hop will like the band Lngshot'));

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}
console.log(checkForSpam('HAHAHAHHAHSHSH SPAM message'))

let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введіть число');

  if (input !== null) {
    numbers.push(Number(input));
  }
}
if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
