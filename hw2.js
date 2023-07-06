// autochecking 2/1

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// autochecking 2/2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   // let message;

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// autochecking 2/3

// function checkStorage(available, ordered) {
//   // Change code below this line
  
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
  
//   // if (ordered === 0) {
//   //   message = "Your order is empty!";
//   // } else if (ordered > available) {
//   //   message = "Your order is too large, not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   // return message;
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// autochecking 2/4

// // Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".
// const fruits = ["apple", "plum", "pear", "orange"];

// autochecking 2/5

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits.length - 1;

// console.log(firstElement);
// console.log(secondElement);
// console.log(fruits[lastElement]);

// autochecking 2/6

// // Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// autochecking 2/7

// const fruits = ["apple", "peach", "pear", "banana"];

// // Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// const fruitsArrayLength = fruits.length;

// autochecking 2/8

// // Оголоси дві зміні: lastElementIndex = Індекс останнього елемента масиву fruits, lastElement = Значення останнього елемента масиву
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
//   const lastElement = fruits[lastElementIndex];

// autochecking 2/9

// function getExtremeElements(array) {
//   // Change code below this line
//     const firstExtremeElement = array[0];
//     const lastExtremeElement = array[array.length - 1];
//     return[firstExtremeElement, lastExtremeElement];
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// autochecking 2/10

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// autochecking 2/11

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const words = message.split(" ");
//   // Change code below this line
//     const wordsPrice = words.length * pricePerWord;
//   return wordsPrice;
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// autochecking 2/12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//  string = array.join(delimiter);


//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// autochecking 2/13

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

// function slugify(title) {
//   // Change code below this line
// return title.toLowerCase().split(" ").join("-");
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// autochecking 2/14

// // Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

// // Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
// // Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
// // Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// autochecking 2/15

// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// autochecking 2/16

// // Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// // Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// return firstArray.concat(secondArray).slice(0, maxLength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
 
// autochecking 2/17

// // for (Ініціалізація; Умова; Пост - вираз) {
// //   // Тіло циклу
// // }
// // Ініціалізація - виконується один раз перед початком циклу. Використовується для створення змінної-лічильника і встановлення її початкового значення.
// // Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
// // Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови. Використовується для оновлення змінної-лічильника.
// // Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// autochecking 2/18

// // Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) { sum += i; }
//   return sum;

//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// autochecking 2/19

// // Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

// // const planets = ["Earth", "Mars", "Venus"];

// // for (let i = 0; i < planets.length; i += 1) {
// //   console.log(planets[i]);
// // }
// // Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// autochecking 2/20

// // Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
   
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// autochecking 2/21

// // Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   // Change code below this line
//   let word = string.split(" ");
//   let longerWord = "";
  
// for (let i = 0; i < word.length; i += 1) {
//   if (longerWord.length < word[i].length) {
//     longerWord = word[i];
//   }
  
// }

// return longerWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// autochecking 2/22

// // Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// autochecking 2/23

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число). В циклі for використовувався метод push

// // варіант 1 цей код занадо довго виконується

// function filterArray(numbers, value) {
//     let newNumbers = [];
//     for (let i = 0; i <= numbers.length; i +=1) {
// if (numbers[i] > value) {
//     numbers.push(numbers[i]);
//         }
//     }
// return newNumbers;
// }

// // варіант 2 працює

// function filterArray(numbers, value) {
//   const valueNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       valueNumbers.push(numbers[i]);
//     }
//   }
//   return valueNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// autochecking 2/24

// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
// if (fruits.includes(fruit)) {
//   return true;
// }
//   return false;
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// autochecking 2/25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let array = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             array.push(array1[i]);
//         }
//     }
//     return array;

//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// autochecking 2/26

// Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.
// for (const variable of iterable) {
//   // тіло цикла
// }
// variable - змінна, яка буде зберігати значення елемента на кожній ітерації
// iterable - колекція, яка містить ітерабельні елементи, наприклад масив
// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
// // було
// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }
// // стало
//     for (const i of order) {
//     total += i;
// }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// autochecking 2/27

// замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
// // було
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     const number = numbers[i];
// // стало
//     for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
// }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// autochecking 2/28

// Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.
// 5 % 1 = 0;
// // 5, поділене на 1, дорівнює 5, а остача - 0
// 5 % 2 = 1;
// //  5, поділене на 2, дорівнює 2, а остача - 1
// 5 % 3 = 2;
// //  5, поділене на 3, дорівнює 1, а остача - 2
// 5 % 4 = 1;
// //  5, поділене на 4, дорівнює 1, а остача - 1
// 5 % 5 = 0;
// //  5, поділене на 5, дорівнює 1, а остача - 0

// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// autochecking 2/29

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line
// let number = [];

//   for (let i = start; i <= end; i += 1) {
//    if (i % 2 === 0) {
//       number.push(i);
//   }
// }
//     return number;
//     // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
//   console.log(getEvenNumbers(7, 7));

// autochecking 2/30

// Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок за його тілом.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// autochecking 2/31 не зрозуміла(((

// Якщо цикл знаходиться в тілі функції, то оператор break не припиняє виконання функції, а тільки перерве цикл. Для того щоб переривати виконання відразу циклу і функції, є оператор return.
// У прикладі шукаємо число 3. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
//     if (i === 3) {
//       console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
//       return i;
//     }
//   }
//   // Цей console.log не виконається
//   console.log("Лог після циклу в тілі функції");
// }
// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції ${result}`);

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// autochecking 2/32

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line
// for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value)
//         return true;
// }
//     return false;// Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

