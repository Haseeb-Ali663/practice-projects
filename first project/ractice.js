// const course = {
//   name: "JavaScript for Beginners",
//   duration: 30,
//   instructor: "John Doe",
//   topics: ["Variables", "Functions", "Loops", "Objects"],
// };
// // console.log(course.instructor);
// //  course.instructor()
// const { topics:t } = course;
// console.log(t);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   myNum.filter((num) => {
//     return num > 5;
//   })
// );

// myNum.filter()

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = []
// myNum.forEach((num) => {
//   if (num > 0) {
//     newNum.push(num);
//   }
// });
// console.log(newNum);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((book) => {
//   return book.genre === "Fiction";
// });
// console.log(userBooks);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums =[]
// myNum.forEach((num) => {
//     // if (num > 5) {
//         newNums.push(num / 2);
//     // }
// })
// console.log(newNums);

const totalNum = myNum.reduce((acc, num) => acc + num, 0);
// console.log(totalNum);

const staff = {
  name: "Strengthened",
  age: 43,
  Hobbies: ["reading", "Swimming"],
};

const staff2 = { ...staff };

staff2.age = 53;

console.log(staff);

console.log(staff2);
