// RegExp - test(), exec();
// String - match(), replace(), split(), search()
// ''.split()

// let regExp = new RegExp(pattern, flags);
// let regExp = /pattern/flags;

// let regExp = /hello/;

// console.log(regExp.test("hello"));
// console.log(regExp.test("bla bla hello"));
// console.log(regExp.test("hello bla bla"));
// console.log(regExp.test("bla bla hello bla bla"));
// console.log(regExp.test("bla bla hell bla bla"));

// ^ - починається стрічка з даного виразу
// let regExp = /^hello/;
// console.log(regExp.test("hello"));
// console.log(regExp.test("bla bla hello"));
// console.log(regExp.test("hello bla bla"));
// console.log(regExp.test("bla bla hello bla bla"));
// console.log(regExp.test("bla bla hell bla bla"));

// $ - стрічка закінчується на даний вираз
// let regExp = /hello$/;
// console.log(regExp.test("hello"));
// console.log(regExp.test("bla bla hello"));
// console.log(regExp.test("hello bla bla"));
// console.log(regExp.test("bla bla hello bla bla"));
// console.log(regExp.test("bla bla hell bla bla"));

// ^...$ регулярний вираз співпадає з цілою стрічкою
// let regExp = /^hello$/;
// console.log(regExp.test("hello"));
// console.log(regExp.test("bla bla hello"));
// console.log(regExp.test("hello bla bla"));
// console.log(regExp.test("bla bla hello bla bla"));
// console.log(regExp.test("bla bla hell bla bla"));

// [] - діапазон, або набір символів
// /[a-z]/ - всі малі букви
// /[A-Z]/ - всі вкликі букви
// /[0-9]/ - всі числа
// /[Kl9]/ - K, l, 9

// console.log(/[a-z]/.test("a"));
// console.log(/[a-z]/.test("1"));
// console.log(/[a-z]/.test("A"));
// console.log(/[a-z]/.test("@"));

// console.log(/[a-zA-Z0-9]/.test("a"));
// console.log(/[a-zA-Z0-9]/.test("1"));
// console.log(/[a-zA-Z0-9]/.test("A"));
// console.log(/[a-zA-Z0-9]/.test("@"));

//  [^] -шнверсія шаблону (заперечення шаблону)
// console.log(/[^a-zA-Z0-9]/.test("a"));
// console.log(/[^a-zA-Z0-9]/.test("1"));
// console.log(/[^a-zA-Z0-9]/.test("A"));
// console.log(/[^a-zA-Z0-9]/.test("@"));

// метасимволи
// \d - збігається з будь-яким числом, то саме що і [0-9]
// \D - збігається з будь-яким не числом, то саме що і [^0-9]
// \w - збігається з будь-яким буквенно-числовим значенням, то саме що і [a-zA-Z0-9]
// \W - збігається з будь-яким не буквенно-числовим значенням, то саме що і [^a-zA-Z0-9]
// \s - збігається з будь-яким пробільним символом: пробіл, табуляція, символ нового рядка
// \S - збігається з будь-яким не пробільним символом
// \n - збігається з символом нового рядка
// \t - збігається з символом табуляції
// \uXXXX - збігається з символом в Unacode, працює тільки з прапорцем 'u'
// \. - збігається з будь-яким символом крім символу нового рядка

// console.log(/\w/.test("a"));
// console.log(/\w/.test("1"));
// console.log(/\w/.test("A"));
// console.log(/\w/.test("@"));

// console.log(/\W/.test("a"));
// console.log(/\W/.test("1"));
// console.log(/\W/.test("A"));
// console.log(/\W/.test("@"));

// console.log(/\d/.test("a"));
// console.log(/\d/.test("1"));
// console.log(/\d/.test("A"));
// console.log(/\d/.test("@"));

// console.log(/\D/.test("a"));
// console.log(/\D/.test("1"));
// console.log(/\D/.test("A"));
// console.log(/\D/.test("@"));

// | - оператор 'або'
// console.log(/Arsenal|Barselona/.test("Arsenal"));
// console.log(/Arsenal|Barselona/.test("Barselona"));

// квантифікатор
// + - повтор попереднього символу 1 чи більше разів
// console.log(/^\d$/.test("1"));
// console.log(/^\d$/.test("1545"));
// console.log(/^\d+$/.test("1"));
// console.log(/^\d+$/.test("123456"));
// console.log(/^Q\d+Z$/.test("Q1215454546Z"));
// console.log(/^Q\d+Z$/.test("QZ"));

// * - повтор попереднього символу 0 чи більше разів
// console.log(/^Q\d*Z$/.test("Q1Z"));
// console.log(/^Q\d*Z$/.test("Q1545Z"));
// console.log(/^Q\d*Z$/.test("QZ"));

// ? - повтор попереднього символу 0 чи 1 pаз
// console.log(/^Q\d?Z$/.test("Q1Z"));
// console.log(/^Q\d?Z$/.test("Q1545Z"));
// console.log(/^Q\d?Z$/.test("QZ"));

// {n} - повтор попереднього символу n pаз
// console.log(/^Q\d{3}Z$/.test("Q1Z"));
// console.log(/^Q\d{3}Z$/.test("Q154Z"));
// console.log(/^Q\d{3}Z$/.test("Q15445Z"));
// console.log(/^Q\d{3}Z$/.test("QZ"));

// {n, m} - повтор попереднього символу від n до m pаз
// console.log(/^Q\d{3,5}Z$/.test("Q1Z"));
// console.log(/^Q\d{3,5}Z$/.test("Q154Z"));
// console.log(/^Q\d{3,5}Z$/.test("Q15445Z"));
// console.log(/^Q\d{3,5}Z$/.test("QZ"));

// {n, } - повтор попереднього символу від n pаз
// console.log(/^Q\d{3,}Z$/.test("Q1Z"));
// console.log(/^Q\d{3,}Z$/.test("Q154Z"));
// console.log(/^Q\d{3,}Z$/.test("Q15445Z"));
// console.log(/^Q\d{3,}Z$/.test("Q154454541565Z"));
// console.log(/^Q\d{3,}Z$/.test("QZ"));

// екранування - \
/*
    \
    /
    []
    {}
    ()
    ?
    +
    *
    .
    ^
    $
*/

//  2020/06/01

// let regExp = /^\d{4}\/\d{2}\/\d{2}$/;
// console.log(regExp.test("2020/06/02"));
// console.log(regExp.test("202000/06/02"));

// let regExp = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
// console.log(regExp.test("2020/06/02"));
// console.log(regExp.test("2020/6/02"));
// console.log(regExp.test("2020/6/2"));

// 093-xxxx-xx-xx

// let regExp = /^093-\d{4}-\d{2}-\d{2}$/;
// console.log(regExp.test("093-1111-22-33"));
// console.log(regExp.test("097-1111-22-33"));

// 093-xxxx-xx-xx
// 073
// 063
// let regExp = /^0[967]3-\d{4}-\d{2}-\d{2}$/;
// console.log(regExp.test("093-1111-22-33"));
// console.log(regExp.test("097-1111-22-33"));
// console.log(regExp.test("073-1111-22-33"));
// console.log(regExp.test("063-1111-22-33"));

// +38(0xx)-xxxx-xx-xx
// let regExp = /^\+38\(0\d{2}\)-\d{4}-\d{2}-\d{2}$/;
// console.log(regExp.test("+38(093)-1111-22-33"));
// console.log(regExp.test("+38(097)-1111-22-33"));
// console.log(regExp.test("+38(073)-1111-22-33"));
// console.log(regExp.test("+38(063)-1111-22-33"));
// console.log(regExp.test("+39(063)-1111-22-33"));

// let loginRegExp = /^\w{4,10}$/;
// let passwordRegExp = /^[a-zA-Z0-9_@#&]{6,16}$/;

// let getId = id => document.getElementById(id);
// getId("signIn").onclick = function () {
//     let testLogin = loginRegExp.test(getId('login').value);
//     let testPassword = passwordRegExp.test(getId("password").value);
//     console.log(testLogin, testPassword);
//     if (testLogin && testPassword) {
//        console.log('welcome');
//     } else {
//        console.log("wrong logil or password");
        
//    }
// };

// getId("login").onchange = function () {
//     let testLogin = loginRegExp.test(getId("login").value);
//     if (testLogin) {
//         this.style.border = '10px solid green'
//     } else {
//         this.style.border = "1px solid red";
//     }
// };

// getId("password").oninput = function () {
//   let testPassword = passwordRegExp.test(this.value);
//   if (testPassword) {
//     this.style.border = "10px solid green";
//   } else {
//     this.style.border = "1px solid red";
//     }
//     console.log(this.validity.valid);
// };
// let loginRegExp = /^\w{4,10}$/;

let firstNameRegExp = /^[a-zA-Z]{2,20}$/;
let lastNameRegExp = /^[a-zA-Z]{2,20}$/;
let emailRegExp = /\w*\d*\.*@\w*.\w*/;
let passwordRegExp = /^[a-zA-Z0-9]{8,15}$/;

let getId = (id) => document.getElementById(id);

// input firstName

getId("firstName").oninput = function () {
    let firstName = firstNameRegExp.test(getId("firstName").value);
    if (firstName) {
        getId("pFirstName").style.display = "none";
        getId("greenFirst").style.display = "block";
        this.style.border = "2px solid green";
    } else {
        getId("pFirstName").style.display = "block";
        getId("greenFirst").style.display = "none";
        getId("redFirst").style.display = "block";
        this.style.border = "2px solid red";
    }
};

// input lastName

getId("lastName").oninput = function () {
    let lastName = lastNameRegExp.test(getId("lastName").value);
    if (lastName) {
        getId("pLastName").style.display = "none";
        getId("greenLast").style.display = "block";
        this.style.border = "2px solid green";
    } else {
        getId("pLastName").style.display = "block";
        getId("greenLast").style.display = "none";
        getId("redLast").style.display = "block";
        this.style.border = "2px solid red";
    }
};

// input Email adress

getId("email").oninput = function () {
  let email = emailRegExp.test(getId("email").value);
  if (email) {
    getId("pEmailAdress").style.display = "none";
    getId("greenEmail").style.display = "block";
    this.style.border = "2px solid green";
  } else {
    getId("pEmailAdress").style.display = "block";
    getId("greenEmail").style.display = "none";
    getId("redEmail").style.display = "block";
    this.style.border = "2px solid red";
  }
};

// input password

getId("password").oninput = function () {
  let password = passwordRegExp.test(getId("password").value);
  if (password) {
    getId("pPassword").style.display = "none";
    getId("greenPassword").style.display = "block";
    this.style.border = "2px solid green";
  } else {
    getId("pPassword").style.display = "block";
    getId("greenPassword").style.display = "none";
    getId("redPassword").style.display = "block";
    this.style.border = "2px solid red";
  }
};