//! Условный оператор

// let index = 1;

// if (index < 5) {
//   console.log("hello");
// }

//! while Loop

// let i = 5;

// while (i < 5) {
//   console.log("i " + i);
//   i++;
// }

//? i = 1
//? i = 2
//? i = 3
//? i = 4

//! increment

// let a = 1;

// console.log(a); // 0
// a = a + 1; // 1

// console.log(a); // 1

//! decrement

// let b = 1;

// console.log(b); // 1
// b = b - 1;

// console.log(b);

//! task 1

// let index = 0;

// while (index <= 100) {
//   console.log(index);
//   index++;
// }

//! task 2

// let counter = 4;

// while (counter <= 100) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

// //! task 3

// let nooruz = 0; //
// let result = 0; //

// while (nooruz <= 10) {
//   result = result + nooruz;
//   nooruz = nooruz + 1;
// }
`
// console.log(result);

//? счетчик = 7
//? результат = 21

// 0 + 0 = 0
// 1 + 0 = 1
// 2 + 1 = 3
// 3 + 3 = 6
// 4 + 6 = 10
// 5 + 10 = 15
// 6 + 15 = 21
// 7 + 21 = 28
// 8 + 28 = 36
// 9 + 36 = 45
// 10 + 45 = 55

//! length  текстин узундугун эсептеп берет
// console.log(text.length); //6

//! charAt()

// console.log(text.charAt());

// let text = "Nooruzbekk";

// let counter = text.length; // 0

// while (0 <= counter) {
//   console.log(text.charAt(counter)); // 3
//   counter--;
// }

// let counter = 0;

// while (counter <= 100) {
//   console.log(counter);
//   counter++;
// }

// for (let counter = 0; counter < 10; counter++) {
//   if (counter === 5) {
//     break;
//   }
//   console.log(counter);
// }

//! Nested loop

// let string = `
// ********
// ********
// ********
// ********
// ********
// ********
// `;

// for (let i = 0; i < 6; i++) {
//   // 6 iteration

//   for (let k = 0; k < 10; k++) {
//     //10 iteration
//     string = string + "*";
//   }

//   string = string + "\n";
// }

// console.log(string);

// let number = "nooruz";

// switch (number) {
//   case "nooruz":
//     case 'Nooruz':
//     case 'Nooruzbek':
//     console.log("ооба туурa");
//     break;

//   case 'NOORUZ': {
//     console.log("жок туур эмес");
//   }
// }

// let text = "Понедельник";

// switch (text) {
//   case "Понедельник":
//   case "Вторник":
//   case "Среда":
//   case "Четверг":
//   case "Пятница":
//     {
//       console.log("Жумуш кун");
//     }
//     break;

//   case "Суботта":
//   case "Воскресенье":
//     {
//       console.log("Выходной бро эс ал");
//     }
//     break;

//   default: {
//     console.log("Мындай жумуш куну жок");
//   }
// }