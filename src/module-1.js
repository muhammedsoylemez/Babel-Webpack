// Modulller
// bir js dosyası olarak düşünebiliriz.
// bu js dosyası içinden belli claslarımızı belli objelerimizi veya belli 
// fonksiyonlarımızı export etmek istiyor olabiliriz.


// Adım-1
// module.exports = function test1(){
//     console.log("Test 1");
// }

// module.exports = function test2() {
//     console.log("Test 2");
// }
// bu yöntemle sadece tek bir fonksiyon export edilir.

// Adım-2
// module.exports.test1 = function test1() {
//     console.log("Test 1");
// }

// module.exports.test2 = function test2() {
//     console.log("Test 2");
// }
// bu yöntemle obje gönderir.

// Adım-3
// obje ile gönderme işlemini aşağıdaki gibi de yapabiliriz.
// module.exports = {
//     name :"Muhammed",
//     test1 : function () {
//         console.log("Test 1");
//     },
//     person : {
//         name:"İbrahim",
//         salary:13850
//     }

// }


// ES6 Modülleri;
// tek bir değişken export etmek istediğim zaman aşağıdaki örneklerdeki gibi başına export yazarak export edeilbirim
export const name = "Muhammed";
export function test() {
    console.log("test function");
}
export class Person {
    static test(){
        console.log("Person Test");
    }
}

export const myObje = {
    "name" : "Muhammed",
    "speciality" : "Javascript"
}

// Default 
// export default class Deneme {
//     static deneme(){
//         console.log("Default Deneme");
//     }
// }


const myValforDefault = "myvalfordefault";

export default myValforDefault;


