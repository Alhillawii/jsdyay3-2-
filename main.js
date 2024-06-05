
//task1//

function calculateArea(radius){
     let i = Math.PI
    area = i * (radius**2)
    return area   
}

console.log(calculateArea(5))
console.log(calculateArea(10))


//task2//


function  reverseString(str){
   return str.split("").reverse().join("");

}
console.log( reverseString('hello'))
console.log( reverseString('world'))

//task3//

const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 == 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(filterEvenNumbers([11, 22, 33, 44, 55])); 

//task4//

let x = 1;
let library = {
  books: [book = { title: "1984", author: "George Orwell" }],
    addBook: function (title) {
        x++;
        this.books.push(title )
        return this.books;
    }
   
};
console.log(library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee" }));


//task5//

let numbers = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
function sumArray(numbers) {
    let sum = 0;
    for (let i in numbers) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray(numbers));


//task6//

// function countVowels(str) {
//     counter = 0;
//     for (let i in str) {
//         if (str[i] == 'a' || str[i] == 'o' || str[i] == 'u' || str[i] == 'e' || str[i] == 'i') {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVowels('hello'));
// console.log(countVowels("javascript"));



//task7//

// function capitalizeWords(st) {
//     let strResult = "";
//     let ar = st.split(" ");
//     for (let i = 0; i < ar.length;i++) {
//         for (let charIndex = 0; charIndex < ar[i].length; charIndex++) {
//             if (charIndex == 0) {
//               strResult += ar[i][charIndex].toUpperCase();
//             } else {
//                 strResult += ar[i][charIndex];
//           }
//         }
//         strResult += " ";
//     }
    
//     return strResult;
// }
// console.log(capitalizeWords('hello world'));

function capitalizeWords(str) {
    const words = str.split(" ");
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
}
console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('javascript is fun')); 



//task8//

function reverseWords(str) {
    let ar = str.split(" ");
    let ar2 = [];
    for (let i = ar.length - 1; i >= 0; i--){
        ar2.push(ar[i]);
    }
    
    return ar2;
}
console.log(reverseWords('Hello World'));
console.log(reverseWords('JavaScript is fun'));