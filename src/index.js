
// Burada yapacağımız her değişiklik webpack tekrar çalıştıracak ve bundle güncellenecek


// Require ve ES6 Modülleri
// CommonJs Modülleri; (adımlar için "module-1.js" dosyasına bakınız)
// const module1 = require("./module-1"); // eğer ./ koymazsak modülü node_modules içerisinde arar.
// Adım1
// console.log(module1);

// Adım2
// obje gönderdiği için bu şekilde içindeki fonksiyonları kullanabiliriz
// module1.test1();
// module1.test2();


// Adım3
// module1.test1();
// console.log(module1.name);
// console.log(module1.person.name);



// ES6 Modülleri;
// Destructuring ile {} içerisinde yalnızca istediğimiz değişkenleri çağırabiliriz
import { Person,test,myObje } from "./module-1";
Person.test();
test();
console.log(myObje.name + " " + myObje.speciality); ;

// Artık burada doğrudan çağırdığımız değişkenleri kullanabiliriz
// eğer bütün değişkenleri almak istiyorsak
import * as module1 from "./module-1";
console.log(module1.myObje.name);

// Default export çağırımı; // her dosyada yalnızca bir default tanımlanabilir.
// import Deneme from "./module-1"; // Deneme default olarak tanımlandığı için doğrudan kendi adıyla çağırabiliyoruz
import myValforDefault from "./module-1";
console.log(myValforDefault);