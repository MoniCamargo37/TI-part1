//3- Escribe una función que tome dos números y devuelva true si el primer número es divisible por el segundo número, de lo contrario devuelve false.

function divisible(num1, num2) {
    if (num1 % num2 === 0) {
      return true;
    } else {
      return false;
    }
  }

//4- Escribe una función que tome un array de cadenas de texto y devuelva un nuevo array con la primera letra de cada cadena en mayúscula.
function FirstLetterCapitalize(arr) {
    return arr.map(word => word[0].toUpperCase() + word.slice(1));
  }
//5- Escribe una función que tome un array de números y devuelva la mediana de los números en el array.
  function mediana(arr) {
    const sortedArray = arr.sort();
    const midIndex = Math.floor(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
      return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    } else {
      return sortedArray[midIndex];
    }
  }
//7-Escribe una función que tome un array de números y devuelva un nuevo array con los números ordenados de forma ascendente sin usar el método sort.
  function numberArray(arr) {
    let sortedArray = [];
    arr.forEach(num => {
      let index = 0;
      while (index < sortedArray.length && num > sortedArray[index]) {
        index++;
      }
      sortedArray.splice(index, 0, num);
    });
    return sortedArray;
  }
  

//9- Escribe una función que tome una frase y devuelva cuantas veces aparece la letra a
  function counterLetterA(phrase) {
    let count = 0;
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === 'a' || phrase[i] === 'A') {
        count++;
      }
    }
    return count;
  }

//10- Escribe una función que tome una frase y devuelva las vocales que aparecen
  function getVowels(phrase) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = phrase
      .split('')
      .reduce((acc, curr) => {
        if (vowels.includes(curr.toLowerCase())) {
          if (!acc.includes(curr.toLowerCase())) {
            acc.push(curr.toLowerCase());
          }
        }
        return acc;
      }, []);
    return foundVowels;
  }
  