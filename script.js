// Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b9 и создайте массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решите с помощью filter. Действия должны запускаться при вызове функции t9. 

// b9 = [3, "hello", 4, "world", 5, "hi"]

// function t9() {

//   const b9_num = b9.filter(item => +item)
//   const b9_string = b9.filter(item => toString)
//   document.querySelector('#out1').innerHTML = `${b9_num}   и ${b9_string}`;
// }
// document.querySelector('.b-1').onclick = t9();





// if (mounth == 12 && day >= 22) alert ('kozerog');
// if (mounth == 1 && day >= 19) alert('kozerog')
// function zodiacWhat() {

//   if (mounth == 1) {
//     if (day <= 19) alert('kozerog');
//     else alert('vodolei');
//   }
// }

// function addCount(arr) {
//   return
// }

// function t1() {
//   a1_res = a1.map(elem => {
//     return elem;
//   });

//   return a1_res;
// }
// let out = document.querySelector('#out1')
// document.querySelector('.b-1').onclick = () => {

//   out.innerHTML = (t1(Number));
// }




// let arr1 = [1, 2, 3, 4, 5, 6, 7, ];
// let arr2 = ['d', '3', 'fd', '84'];
// console.log(arr1.length);

// console.log(arr1.splice(3, 4, 'ok'))
// console.log(arr1)

// d1 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];




// function f8() {
//   let out = document.querySelector('#out1')
//   let input = document.querySelector(".input1");
//   let t8 = [];
//   t8[0] = input.value;
//   for (let key of d1) {
//     t8[i + 1] = d1[String(i)];
//   }
//   d1 = t8
//   console.log(d1)

//   out.innerHTML = d1;
// }
// document.querySelector('.b1').onclick = f8



// --------------------------------------------------

// let a1 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// function t1() {
//   a1_res = a1.map(elem => {
//     return elem;
//   });

//   return a1_res;
// }
// let out = document.querySelector('#out1')
// document.querySelector('.b-1').onclick = () => {

//   out.innerHTML = (t1(Number));
// }



// function f8() {
//   let input = document.querySelector(".input1");
//   let t8 = [];
//   t8[0] = input.value;
//   for (let i = 0; i < d8.length; i++) {
//     t8[i + 1] = d8[i];
//   }
//   d8 = t8;
//   console.log(d8)

//   showArr('#out1', d8);
// }


// function showArr(domElem, arr) {
//   let out = '';
//   for (let i = 0; i < arr.length; i++) {
//     out += arr[i] + '';
//   }
//   document.querySelector(domElem).innerHTML = out;
// }


// const promice = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const mark = Math.floor(Math.random() * 4) + 2;
//     if (mark > 3) {
//       resolve(mark);
//     }
//     reject(mark);

//   }, 3000)
// });
// promice.then(result => {
//   console.log(`uhuuu ${result}`);
// }).catch(result => {
//   console.log(`nooooo ${result}`);
// })

// let arr = ["t", "e", "s", "t"];
// arr.forEach(function (item, index, array) {

// });

// Вызов alert для каждого элемента
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${arr}`);
// });



// function showmodal() {
//   document.body.style.overflow = 'hidden';
//   document.querySelector('.modal-wrapper').style.display = 'block';
// }

// let styles = ['jazz', 'blues', ];
// styles.push('Rock-N-Roll');
// styles[1] = 'Classic';
// alert(styles.shift());
// styles.unshift('rap', )





// let a = [1, 2, 3];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];

// }
// console.log(sum);

// function square_sum(numbers) {
//   return numbers.reduce(function (sum, x) {
//     return (x * x) + sum;
//   }, 0)
// }
// console.log
// function closemodal() {

// }
// document.querySelector('.b1').onclick = () => {
//   let out = '';
//   for (let i = 0; i <= 122; i += 2) {
//     out += i + ' ';

//   }
//   document.querySelector('#out1').innerHTML = out;
// }

// ..............................................................

// lrt in = document.querySelector
// let d8 = [9, 7, 6];

// function f8(i8) {
//   let k = [i8];
//   let arr = k.concat(d8);
//   console.log(arr)
//   return i8;
// }
// f8(i8);

// ..............................................................

//ask1(array)
// function showArr(domElem, arr) {
//   console.log(domElem);
//   let out = '';
//   for (let i = 0; i < arr.length; i++) {
//     out += arr[i] + ' ';
//   }
//   document.querySelector(domElem).innerHTML = out;
// }
// let signIn = document.forms[0]


// alert(login.value);
// alert(password.value);


// let zodiak = ['kozerog', 1, 1, 19];
// console.log(zodiak);




// function f1() {
//   d1.push(i1.value);
//   out1.innerHTML = d1.join('<br/>');
//   i1.value = '';
//   showArr('.out1', d1);

// }

// document.querySelector('.b1').onclick = f1;

// function f2() {
//   d1.pop();
//   out1.innerHTML = d1;
//   out1.innerHTML = showArr('.out2', d1);

// }

// document.querySelector('.b1').onclick = f2;

// function f3() {
//   const firstElement = d1.shift();
//   out1.innerHTML = d1;
//   out2.innerHTML = firstElement;
//   showArr('.out-3', d1);
// }

// document.querySelector('.b1').onclick = f3;
// let d1 = [33, 'best', 66, 'best'];
// let i1 = document.querySelector('.input1');
// let out1 = document.querySelector('#out1');
// let out2 = document.querySelector('#out2');

// function f4() {
//   d1.push(i1.value);
//   out1.innerHTML = d1;

// }

// document.querySelector('.b1').onclick = f4;
// function f5() {
//   out2.innerHTML = d1;
//   d1.unshift(9 * 4, 58483943, 61, 6111111111111111);

//   out1.innerHTML = d1
//   showArr('#out1', d1);
// }

// document.querySelector('.b1').onclick = f5;
// let d6 = ['test', 5, 12];

// function f6() {
//   d6[d6.length] = i1.value;

//   out1.innerHTML = d6;
// }



// document.querySelector('.b1').onclick = f6;

// let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

// let arr7 = ['alex', 'nika', 'natali', 'jane', 'anne'];



// d7.addEventListener('click', e => {
//   d7.removeItem(e.target);
// })

// let d8 = [2, '4', 12, 67, 'hello'];

// function f8() {
//   let input = document.querySelector(".input1");
//   let t8 = [];
//   t8[0] = input.value;
//   for (let i = 0; i < d8.length; i++) {
//     t8[i + 1] = d8[i];
//   }
//   d8 = t8;
//   console.log(d8)

//   showArr('#out1', d8);
// }

// document.querySelector('.b1').onclick = f8;

// function showArr(domElem, arr) {
//   let out = '';
//   for (let i = 0; i < arr.length; i++) {
//     out += arr[i] + '';
//   }
//   document.querySelector(domElem).innerHTML = out;
// }

// let user = new Object();
// let user = {};
// user = {
//   name: 'John'
// };
// user.suname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// function pop(arr) {
//   if (!arr.length) return undefined;

//   const el = arr[arr.length - 1];
//   arr.length = arr.length - 1;
//   console.log(arr);
//   return el;
// }



// document.querySelector('.b1').onclick = pop(d7);
// document.querySelector('.b1').onclick = d7.innerHTML;


// ==================vkladka=======================
// document.addEventListener('DOMContentLoaded', tab);
// собераем все эллементы, для того чтобы открыть соответствующий таб
// function tab() {
//   let tabsNav = document.querySelectorAll('.tabs_nav-item');
//   let tabs = document.querySelectorAll('.tab');
//   let tabName;

//   tabsNav.forEach(item => {
//     item.addEventListener('click', selectTab)
//   })
//   // перебирает всю коллекцию вкладок----все остальные эллементы перавстают быть активнны при нажатии
//   function selectTab() {
//     tabsNav.forEach(elem => {
//       elem.classList.remove('active');
//     })
//     this.classList.add('active');
//     tabName = this.dataset.tab;
//     selectTabContent(tabName)
//   }

//   function selectTabContent(name) {
//     tabs.forEach(elem => {
//       elem.classList.contains(name) ? elem.classList.add('active') : elem.classList.remove('active')
//     })
//   }
// }

// =================================================
// (function () {
//   let selectHeader = document.querySelector('.select__header');
//   let selectItems = document.querySelectorAll('.select__item');
//   selectHeader.addEventListener('click', selectToggle)
//   selectItems.forEach(item => {
//     item.addEventListener('click', selectChoosen)
//   })

//   function selectToggle() {
//     this.parentElement.classList.toggle('active');
//   }

//   function selectChoosen() {
//     let text = this.textContent
//     let select = this.closest('.select');
//     let currentText = select.querySelector('.select__current')
//     currentText.textContent = text;
//     select.classList.remove('active');
//   }
// })()


// ==============================
// task1(function)
// let a1 = 8;
// let out = document.querySelector('#out');

// function t1() {
//   out.innerHTML = a1;
// }
// document.querySelector('.b1').onclick = t1;
// task2(function)
// let a2 = 8;
// let but = document.querySelector('.b1');
// let out = document.querySelector('#out');

// function t2() {
//   return a2;
// }
// but.onclick = function () {
//   out.textContent = t2();
// }
// task3(function)
// function t3(a, b) {
//   return a + b;
// }
// document.querySelector('.b1').onclick = function () {
//   document.querySelector('#out1').textContent = t3(3, 4);
// }
// document.querySelector('.b2').onclick = function () {
//   document.querySelector('#out2').textContent = t3(5, 6);
// }
// task4(function)
// let out = document.querySelector('#out1');
// let button = document.querySelector('.b1');
// let input = document.querySelector('.input1');

// function t4() {

//   out.innerHTML = 2022 - input.value;

// }
// button.onclick = t4;
// tack5(function)
// let out = document.querySelector('#out1');
// let button = document.querySelector('.b1');
// let input = document.querySelector('.input1');

// function t5() {
//   out.innerHTML = `hello ${input.value}`
// }
// button.onclick = t5;
// task6(cicle in cicle)


// function t6(a, b) {
//   return Math.floor(Math.random() * (a - b + 1)) + b
// }

// function t7() {
//   return `rgb(${t6(0, 255)}, ${t6(0, 255)}, ${t6(0, 255)})`
// }
// document.querySelector('.button').onclick = function () {
//   document.querySelector('#out').style.background = t7();
// };​
// expected output: 0, 1 or 2

// task1(while)
// let out = document.querySelector('#out1');
// p = 0;
// let outStr = '';


// while (p < 4) {

//   while (p < 4) {

//     outStr += '*';

//     p++;
//   }


// }
// out.innerHTML = outStr;
// task1 (massive)
//------------------------------------------------------
// let a = [4, 5, 6];
// let b = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let out = '';
// let out1 = document.querySelector('#out1');
// for (let i = 0; i < b.length; i++) {
//   for (let k = 0; k < b[i].length; k++) {
//     //console.log(b[i][k]);
//     out += b[i][k] + ' ';
//   }
//   out += '<br>';
// }

// out1.innerHTML = out;
//-------------------------------------------------------

// task2(massive)
// let out1 = document.querySelector('#out1');
// let out2 = document.querySelector('#out2');


// let d = [1, 0, 0, 0, 0];
// document.querySelector('#out2').innerHTML = d;
// let k = 0;
// document.querySelector('.b1').onclick = () => {
//   if (k + 1 < 5) {
//     d[k] = 0;
//     d[k + 1] = 1;
//     k++;
//   }
//   out2.innerHTML = d;
// }
// task3(massive)


// task1(cicle in cicle)
// let out1 = document.querySelector('.out1');
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     out1.innerHTML += '*';

//   }
//   out1.innerHTML += '_';
// }

// task2(cicle in cicle)
// let out1 = document.querySelector('.out1');
// for (let i = 1; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     out1.innerHTML += `*` + `_`;

//   }
//   out1.innerHTML += `${i}<br>`;
// }
// task3(cicle in cicle)
// let out = document.querySelector('#out');
// let but = document.querySelector('.b1')

// function f1() {
//   let a = '';
//   for (let i = 1; i <= 3; i++) {
//     a += i + '_';

//     for (let k = 1; k < 6; k++) {
//       a += k + ' ';
//       out.innerHTML = k;

//     }
//     out.innerHTML = a;
//   }

// }
// but.onclick = f1;
// task4(cicle in cicle)
// let out = document.querySelector('#out');
// let but = document.querySelector('.b1');

// function f1() {
//   for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 3; k++) {
//       out.innerHTML += "1" + "0";
//     }
//     out.innerHTML += "<br>";
//   }
// }
// but.onclick = f1;
// task6(cicle in cicle)
// let out = document.querySelector('#out');
// let but = document.querySelector('.b1');
// for (let i = 0; i < 3; i++) {
//   for (let k = 0; k < 1; k++) {
//     out.innerHTML += `10x01x`;

//   };
//   out.innerHTML += '<br>';
// }
// task7(cicle in cicle)
// let out = document.querySelector('#out');
// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < i; k++) {
//     out.innerHTML += '*';

//   }
//   out.innerHTML += '<br>';
// }
// task8(cicle in cicle)
// for (let i = 5; i > 0; i--) {
//   for (let k = 0; k < i; k++) {
//     out.innerHTML += '*';
//   }
//   out.innerHTML += '<br>';
// }
// task9(cicle in cicle)
// const out = document.querySelector('#out');
// for (let i = 1; i < 7; i++) {

//   for (let k = 1; k < i; k++) {
//     out.innerHTML += [k];


//   }
//   out.innerHTML += '<br>';
// }
// task10(cicle in cicle)
// let out = document.querySelector('#out');
// for (let j = 1; j < 10; j++) {



//   for (let i = 0; i < 10; i++) {
//     out.innerHTML += `${j}*${i}=${i * j}<br>`;

//   }
//   out.innerHTML += '<hr>';
// }
// task1.2(cicles in sicle)
// let out = document.querySelector('#out');
// for (let i = 6; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     out.innerHTML += '*';

//   }
//   out.innerHTML += '<br>';
// }
// task 1.6(cicles in cicle)
// let out = document.querySelector('#out');
// for (let i = 0; i < 4; i++) {
//   for (let k = 0; k < i; k++) {
//     out.innerHTML += "*";

//   }
//   out.innerHTML += '<br>';
// }
// for (let i = 4; i > 0; i--) {
//   for (let k = 0; k < i; k++) {
//     out.innerHTML += "*";

//   }
//   out.innerHTML += '<br>';
// }
// task1.7(cicles in cicle)
// let out = document.querySelector('#out');
// for (let i = 0; i < 7; i++) {
//   out.innerHTML += '*';

// }
// for (let k = 0; k < 3; k++) {
//   for (let j = 0; j < k; j++) {


//     out.innerHTML += `*       * <br>`;

//   }


// }
// task 1.8(cicles in cicle)
// let out = document.querySelector('#out');
// for (let i = 5; i > 0; i--) {
//   for (let k = 0; k < i; k++) {
//     out.innerHTML += i;

//   }
//   out.innerHTML += '<br>';
// }
//calculator================================================



// const output = document.querySelector('.output');

// const div = document.createElement('div');
// div.classList.add('keyboard');
// document.querySelector('.calculator').appendChild(div);

// "C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) = .".split(' ')
//   .map(item => {
//     div.insertAdjacentHTML('beforeend', `<button value='${item}'>${item}</button>`)
//   })

// document.querySelectorAll('button')
//   .forEach(item => {
//     item.addEventListener('click', (e) => {
//       calculate(e.target.value);
//     })
//   })

// document.addEventListener('keydown', (e) => {
//   if ((e.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) {
//     calculate(e.key)
//   }
// })

// function calculate(value) {
//   if (value.match(/=|Enter/)) {
//     try {
//       output.textContent = math.evaluate(output.textContent)
//     } catch {
//       let oldValue = output.textContent
//       let newValue = 'Что-то пошло не так'
//       output.textContent = newValue;
//       setTimeout(() => {
//         output.textContent = oldValue
//       }, 2500);
//     }
//   } else if (value === 'C') {
//     output.textContent = '';
//   } else if (value.match(/CE|Backspace/)) {
//     output.textContent = output.textContent.substring(0, output.textContent.length - 1);
//   } else {
//     output.textContent += value
//   }
// }
// ================================================================
// cart ====================================================================


// let items = document.querySelectorAll('.item');
// let cart = document.getElementById('content');

// function getCartData() {
//   return JSON.parse(localStorage.getItem('cart'));
// }

// function setCartData(obj) {
//   localStorage.setItem('cart', JSON.stringify(obj));
// }

// function addToCart() {
//   this.disabled = true;
//   let cartData = getCartData() || {};
//   let parent = this.parentNode;
//   // parrentNode 
//   let itemId = this.getAttribute('data-id');
//   // let inemId = this.dataset.id;
//   let itemTitle = parent.querySelector('.title').textContent;
//   let itemPrice = parent.querySelector('.price').textContent;
//   if (cartData.hasOwnProperty(itemId)) {
//     cartData[itemId][2] += 1;
//   } else {

//     cartData[itemId] = [itemTitle, itemPrice, 1];

//   }

//   if (!setCartData(cartData)) {
//     this.disabled = false;
//   }

// }

// for (let item of items) {
//   item.querySelector('.add').addEventListener('click', addToCart);
// }

// function openCart() {
//   let cartData = getCartData();
//   let summary = "";
//   let totalQuantity = 0;
//   let totalPrice = 0;
//   if (cartData !== null) {
//     summary =
//       `<table>
//   <tr>
//   <th>Наименование</th>
//   <th>Цена</th> 
//   <th>Кол-во</th> 
//   </tr>
//   `;
//     for (let items in cartData) {
//       summary += `<tr>`;

//       for (let i = 0; i < cartData[items].length; i++) {
//         summary += `<td>${cartData[items][i]}</td>`
//       }


//       summary += `</tr>`;
//       totalQuantity += cartData[items][2];
//       totalPrice += cartData[items][1] * cartData[items][2];
//     }

//     summary += `</table>`;
//     cart.innerHTML = summary;
//     cart.append(document.createElement('p').innerHTML = `All goods:' ${totalQuantity} итоговая цена: ${totalPrice}`)




//   } else {
//     cart.innerHTML = 'Pusto'
//   }


// }
// document.getElementById('open').addEventListener('click', openCart)

// document.getElementById('close').addEventListener('click', () => {
//   localStorage.removeItem('cart')
//   cart.innerHTML = 'CLEAR!!'
// });

// =========================
// document.querySelector('#btn1').onclick = () => {
//   console.log(document.querySelector('#i2').value);
//   let myCheckBox = document.querySelector('#i2');
//   console.log(myCheckBox.checked);
//   if (myCheckBox.checked) {
//     console.log('pushed')
//   } else {
//     console.log('unpushed')
//   }
// }

// =========================

// document.querySelector('#btn2').onclick = (event) => {
//   event.preventDefault();
//   let txt = document.querySelector('#two');
//   console.log(txt.value);
//   txt.value = 'one';
//   let form = document.querySelector('form')
//   console.log(form);
//   console.log(form.elements.three.value);
// }



// task1(forms)=========
// document.querySelector('#b1').onclick = (event) => {
//   alert('Ex number 0ne');
// }


// task2(form)==========
// document.querySelector('#b2').onclick = (event) => {
//   alert('Ex number Two');
// }


// task3(form)
// document.querySelector('#p3').onclick = () => {
//   alert('Ex number Three');
// }

// task4(form)
// document.querySelector('#b5').onclick = () => {


//   let out4 = document.querySelector('#out4');
//   let myCheckBox = document.querySelector('#i5');
//   if (myCheckBox.checked) {
//     out4.innerHTML = 'true';
//   } else {
//     out4.innerHTML = 'false';
//   }
// }
// task5(form)
// document.querySelector('#b5').onclick = () => {

//   let out5 = document.querySelector('#out5');
//   let myCheckBox = document.querySelector('#i5');
//   console.log(document.querySelector('#i5').value)
//   if (myCheckBox.checked) {
//     out5.innerHTML = myCheckBox.value;
//   } else {
//     out5.innerHTML = 'unchecked';
//   }
// }

// task6(form)
// document.querySelector('#b6').onclick = () => {
//   let out6 = document.querySelector('#out6');
//   let myCheckBox = document.querySelector('#i6');
//   out6.innerHTML = myCheckBox.value;
// }
// =======================================
// task7(form) ??????????????
// document.querySelector('#b7').onclick = () => {
//   let myCheckBox = document.querySelector('#i7');
//   let out71 = document.querySelector('#out71');
//   let out72 = document.querySelector('#out72');
//   out71.innerHTML = myCheckBox.value;
//   let num = +myCheckBox.value.length;

//   if (num >= 6) {
//     out72.innerHTML = 1;
//   } else {
//     out72.innerHTML = 0;
//   }

// task8(form)
// const b8 = document.querySelector('#b8');
// const out8 = document.querySelector('#out8');
// b8.onclick = function () {

//   out8.innerHTML = `
//   <input type="text" id="i81"></input>
//   <button type="button" id="b81"> newButton </button>`;
//   const b81 = document.querySelector('#b81');
//   b81.onclick = f81;


// }

// function f81() {
//   let i81 = document.querySelector('#i81');
//   let out81 = document.createElement("div");
//   document.querySelector('body').appendChild(out81);
//   out81.innerHTML = i81.value;
// }

// task9(form)
// const r9 = document.querySelector('#r9');
// const b9 = document.querySelector('.b9');
// const out8 = document.querySelector('#out8');
// b9.onclick = (event) => {
//   event.preventDefault();

//   if (r9.checked) {
//     out8.innerHTML = r9.value;
//   } else {
//     out8.innerHTML = 0;
//   }
// }
// task10(form) ?????????
// const i10 = document.querySelector('.i10');
// let out10 = document.querySelector('.out10');
// const b10 = document.querySelector('.b10');
// b10.onclick = (event) => {
//   event.preventDefault();
//   out10.style.background = i10.value;
//   console.log(out10);
// }
// task11(form)
// const i111 = document.querySelector('.i111');
// const i112 = document.querySelector('.i112');
// const b11 = document.querySelector('.b11');
// b11.onclick = () => {
//   i111.value = i112.value;
// }
// task12(form)
// const i12 = document.querySelector('.i12');
// const b12 = document.querySelector('.b12');
// const out12 = document.querySelector('.out12');
// b12.onclick = (event) => {
//   event.preventDefault();
//   out12.innerHTML = i12.value
// }
// task13(form)
// let i13 = document.querySelector('.i13');
// let outRange = document.querySelector('span');
// i13.oninput = () => {

//   outRange.innerHTML = i13.value
// }

// task14(form)=======
// document.querySelector('.b14').onclick = () => {
//   document.querySelector('.out14').innerHTML = document.querySelector('.t14').value;
// }
// task15(form)
// document.querySelector('.b15').onclick = () => {
//   document.querySelector('.i15').value = document.querySelector('.t15').value;
//   document.querySelector('.out15').innerHTML = document.querySelector('.t15').value;
// }
// task16(form)==============
// document.querySelector('#b16').onclick = (event) => {
//   event.preventDefault();
//   let form = document.querySelector('form');
//   let option = document.querySelector('option');
//   console.log(form);
//   console.log(form.elements.option.value);
// }

// task17(form)==========
// let s17 = document.querySelector('#s17');
// let out17 = document.querySelector('.out17');
// out17.style.fontSize = '30px';

// function handleOnChangeEvent() {

//   out17.style.background = s17.value;
// }
// s17.onclick = handleOnChangeEvent;

// task19(form)======================
// let i191 = document.querySelector('.i191');
// let i192 = document.querySelector('.i192');
// let b19 = document.querySelector('.b19');
// let out19 = document.querySelector('.out19');
// b19.onclick = (event) => {
//   event.preventDefault();
//   out19.innerHTML = i191.value + ' ' + i192.value;
// }
// task20(form)
// let inputs = document.getElementById("f20").elements;
// let inputByIndex = inputs[0];
// let inText = inputs['text'];
// let buttonForOut = inputs['button'];
// let inPassword = inputs['password'];
// let outWindow = inputs['out20'];
// let form = document.forms.my;
// let textForm = form.elements.text;
// let passForm = form.elements.password;
// let button = form.elements.button;
// let outWin = form.elements.out20;
// button.onclick = (event) => {
//   event.preventDefault();
//   outWin.innerHtml = textForm.value + " " + passForm.value;


// }

// Cicles=====================================
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }


// task1(cicles)=================
// let outElement = document.querySelector('.out');
// let button = document.querySelector('.b00');



// function taskOne() {

//   for (let i = 0; i <= 122; i += 2) {
//     document.querySelector('#out1').innerHTML += i + ' ';
//   }
// }


// document.querySelector('.b1').onclick = taskOne;

// task6(cicle)
// let out7 = document.querySelector('.out7')
// let i7 = document.querySelector('.i7');
// document.querySelector('.b7').onclick = () => {
//   out7.innerHTML = '';
//   for (let i = i7.value; i > 0; i--) {
//     out7.innerHTML += i + ' ';

//   }

// }
// task8(cicle)
// let i81 = document.querySelector('.i81');
// let i82 = document.querySelector('.i82');
// let out8 = document.querySelector('.out8');
// let b8 = document.querySelector('.b8');

// function t8() {
//   for (let i = i81.value; i <= i82.value; i++) {
//     out8.innerHTML += i + ' ';

//   }
// }
// b8.onclick = t8;

// task9(cicle)===================
// let i91 = document.querySelector('.i91');
// let i92 = document.querySelector('.i92');
// let out9 = document.querySelector('.out9');
// let b9 = document.querySelector('.b9');

// function t9() {
//   console.log('55');
//   for (let i = i91.value; i <= i92.value; i++) {
//     out9.innerHTML += i + ' ';
//     console.log(i);
//   }
//   for (let j = i92.value; j <= i91.value; j++) {
//     out9.innerHTML += j + ' ';
//     console.log(j);
//   }
// }

// b9.onclick = t9;

// tasl10(cicle)====================================
// let b10 = document.querySelector('.b10');
// let out10 = document.querySelector('.out10');

// function t10() {
//   console.log('r');
//   for (let i = 1950; i < 2000; i += 2) {
//     out10.innerHTML += i + 1 + ' ';

//   }
// }
// b10.onclick = t10;
// task11(cicle)======================================
// let div11 = document.querySelectorAll('.div11');

// let out11 = document.querySelector('.out11');
// let b11 = document.getElementById('b11');

// function t11() {
//   for (let i = 0; i < div11.length; i++) {
//     out11.innerText += div11[i].innerText + ' ';

//   }
//   console.log(r);
// }

// b11.onclick = t11;


// task12(cicle)==================================4

// for (let i = 0; i < div11.length; i++) {
//   console.log(div11[i]);
//   div11[i].style.background = 'red';
// }
// task13(cicle)=====================================
// let i13 = document.getElementsByClassName('orange fruit');
// let resultArea = document.getElementById('resultArea');
// let b13 = document.querySelector('.b13')

// function t13() {
//   for (let i = 0; i < i13.length; i++) {
//     resultArea.innerHTML += `${i13[i].innerText} `;
//   }
// }
// b13.onclick = t13;

// task15(cicles)


// let out15 = document.querySelector('.out15');
// let b15 = document.querySelector('#b15');
// function t15() {
//   for ( let i = 10; i >= 5; i--) {
//     for (let j = 0; i <= 5; j++)

//   }
//   out15.innerHTML += i + ' ' + j + ' ';

// }

// ====================
// function t15() {
//   for (let i = 10; i >= 5; i--) {
//     if (i == 9) {
//       i += 0;
//     }
//     out15.innerHTML += i + ' ';

//   }
//   for (let j = 5; j <= 10; j++) {
//     out15.innerHTML += j + ' ';

//   }

// }
// b15.onclick = t15;


// =======================================================
// document.querySelector('button').onclick = () => {
//   console.log(document.querySelector('#one').value);
// }

// style
// document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;

// document.querySelector('#one').oninput = () => {
//   document.querySelector('span').innerHTML = document.querySelector('#one').value
// }

// const out2 = document.querySelector('.out-2');
// const b2 = document.querySelector('.b-2');

// function f2(a21 = 3, a22 = 6) {
//   if (a21 > a22) {
//     out2.innerHTML = a21;
//   } else if (a21 < a22) {
//     out2.innerHTML = a22;
//   }
// }

// b2.onclick = f2;


// task1(if)
// const i1 = document.querySelector('.i-1');
// const b1 = document.querySelector('.b-1');
// const out1 = document.querySelector('.out-1');

// function f1() {
//   let a = i1.value;
//   if (a == 4) {
//     out1.innerHTML = 'true';
//   } else {
//     out1.innerHTML = 'false';
//   }
// }

// b1.onclick = f1;




// const input = document.querySelector('.age');
// const button = document.querySelector('button');

// button.onclick = () => {
//   let num = +input.value;
//   if (num > 56 && num < 60)
//   // && - and

//   {
//     console.log('velcome');
//   } else if (num > 60) {
//     console.log('are you shure??')
//   } else {
//     console.log('you not come');
//   }
//   switch (num) {
//     case 15:
//       console.log('one year wait')
//       break;
//     case 16:
//       console.log('yeees')
//       break;
//     default:
//       console.log('ok');

//   }
// }

// let b = 5;
// console.log(b < 7 || b > 6);


// task20
// let inputName = document.querySelector('.inputName');
// let inputSoname = document.querySelector('.inputSoname');
// let inputAge = document.querySelector('.inputAge');
// let inputHobby = document.querySelector('.inputHobby');
// let div = document.querySelector('div');
// let button = document.querySelector('button');


// button.onclick = () => {
//   let name = inputName.value;
//   let soname = inputSoname.value;
//   let age = inputAge.value;
//   let hobby = inputHobby.value;


//   div.innerHTML = 'Dear ' + name + ',' + soname + ',' + 'your age is ' + age + 'year ' + 'your profession is ' + hobby;
// }


// task19
// let insert = document.querySelector('.insert');
// let inserTwo = document.querySelector('.insertTwo');
// let pup = document.querySelector('button');
// let div = document.querySelector('div');

// pup.onclick = () => {

//   let sum = +insert.value + +inserTwo.value;


//   div.innerHTML = sum;



// }







// task18
// let inPut = document.querySelector('.inPut');
// let button = document.querySelector('button');

// button.onclick = () => {
//   t = inPut.value;
//   t = parseFloat(t);
//   console.log(t);
// }




// task17

// let inOne = document.querySelector('.inOne');

// let button = document.querySelector('button');


// button.onclick = () => {

//   t = inOne.value;
//   t = parseInt(t);
//   console.log(t);

// }




// let inOne = document.querySelector('.inOne');
// let inTwo = document.querySelector('.inTwo');

// let num1 = (inOne.value);
// let num2 = (inTwo.value);

// let sum = num1 + num2;

// let resultElement = document.querySelector('.out');
// resultElement.innerHTML = sum;




// resultElement.input = () => {

//   resultElement.innerHTML = sum;
// }







// task14

// inPut = document.querySelector('.inPut');

// inPut.value = 'Hello';



// task15
// let inPut = document.querySelector('.inPut');

// let y = inPut;

// y.style.borderRight = '2px solid red';

// task13

// let inPut = document.querySelector('.inPut');
// let inPuttwo = document.querySelector('.inPuttwo');
// let push = document.querySelector('button');




// push.onclick = () => {

//   let a = +inPut.value;
//   let b = +inPuttwo.value;

//   console.log(a + b);

// }





// task12


// let inputOne = document.querySelector('.inputOne');
// let inputTwo = document.querySelector('.inputTwo');
// let button = document.querySelector('button');

// button.onclick = () => {
//   let a = inputOne.value;
//   let b = inputTwo.value;
//   console.log('hello ' + a + ' ' + b);
// }


// task11

// let inputHere = document.querySelector('.inputHere');
// let clickIt = document.querySelector('button');
// let outThere = document.querySelector('.outThere');



// clickIt.onclick = () => {
//   let b = inputHere.value;
//   inputHere.value = '';
//   outThere.innerHTML = b;
// }

// let inPut = document.querySelector('#inPut');
// let button = document.querySelector('button');
// let outPut = document.querySelector('h1');

// button.onclick = () => {
//   let a = +inPut.value * 10;
//   outPut.innerHTML = a;
// }



// let e4 = 3;
// let f4 = 'hello';
// console.log(e4 * f4);
// inPut.value = '';
// let a = 3;
// let b = 'fg';
// console.log();
// let inputIn = document.querySelector('.input-on');
// let button = document.querySelector('button');

// button.onclick = () => {

//   console.log(inputIn.value);

// }

// let inputOn = document.querySelector('.input-in');
// let buttonOn = document.querySelector('.but');



// buttonOn.onclick = (event) => {
//   event.preventDefault();
//   let a = +inputOn.value;

//   document.querySelector(".result").innerHTML = a;
//   inputOn.value = "";
// };



// let inputIn = document.querySelector('.input-in');

// let button = document.querySelector('button');
// let div = document.querySelector('.out')

// button.onclick = () => {
//   console.log('work');
//   // console.log(inputIn.value)
//   let b = +inputIn.value;
//   console.log(b + 10);
//   inputIn.value = '';
//   div.innerHTML = b;
// }

// let a = 9;

// if (a != 9) {
//   console.log('yes');
// } else {

//   console.log('else');

// }

// const button = document.querySelector('button');
// const input = document.querySelector('age');
// button.onclick = () => {
//   let num = input.value
// }

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');

// button.onclick = () => {
//   console.log('work');
// }
// console.log(inputIn.value);
// let b = inputIn.value;
// console.log(b * 2);



// function makeSquareSum() {
//   let arr = [10, 4, 67];
//   let sqUare = Math.sum(Math.sqrt() * arr.length);
//   let allsum = arr[sqUare];
//   return (sum(allsum));

// }
// let a = 19;
// const button = document.querySelector('button');
// const input = document.querySelector('.age');
// button.onclick = () => {

// }


// document.getElementById('some')

// document.getElementsByClassName('text')
// let result = document.getElementsByTagName('li')
// document.getElementsByName('some')

// for (let z of result) {
//   if (z.textContent.includes('4')) {
//     console.log(z)
//   }
// }

// let arr = [1, 1, 2, 3, 4, 4]
// let tmp = new Set(arr)
// console.log(tmp)


// arr = Array.from(tmp)
// console.log(arr)


// const find = () => {}
// find = 34



// let msg = prompt('Сообщение', 12345);
// alert(msg);



// console.log(allsum);

//---------------------------------------------------------------------------------------Complete the square sum function so that it squares each number passed into it and then sums the results together.----//






// function squareSum(numbers) {
//   var sqNum = numbers.map(num => num * num);
//   var addNum = sqNum.reduce((acc, curr) => acc + curr, 0);
//   return addNum
// };
// -----------------------------------------------------------------------------------

// Convert number to reversed array of digits-----//






// function digitize(num) {
//     return num.toString().split('').reverse().map(Number);
// }





//------------------------------------------


// Simple, remove the spaces from the string, then return the resultant string.----







// function noSpace(x) {
//   return x.split(' ').join('')
// }






//////////-------------------------------------------------------------------------------///////



// cars

// let chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1925,
//   color: "red";
//   passengers: 2,
//   convertible: false,
//   mileage: 1021
// };


// let rocky = {
//   make: "Rocky",
//   model: "Afrika",
//   year: 1930,
//   color: "black",
//   passengers: false,
//   convertible: true,
//   mileage: 1500

// };


// let chkupa = {
//   make: "Chkupa",
//   model: "Vikok",
//   year: 1999,
//   color: "white",
//   passengers: false,
//   convertible: false,
//   mileage: 66000,
//   maxSpeed: 40,
//   started: false,

//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },

//   drive: function () {
//     if (this.started) {
//       alert('zoooooom');
//     } else {
//       alert('you need start engine');
//     }
//   }

// };

// fine speed

// let planet = {
//   diametr: 49709
// }

// let widget = {
//   cost$: 3.14,
//   "on sale": true
// }

// let forecast = {
//   hightTemp: 82

// };


// let gajet = {
//   name: "anvil",
//   isHeavy: true

// ----------properties



// chkupa.mileage = 10000;
// chkupa.needWashing = true;

// if (chkupa.year < 1966) {
//   classic = true;
// }

// for (let i = 0; i < chkupa.maxSpeed; i++) {
//   addHiggerMaxspeed();

// }

// let miles = chkupa.mileage;
// if (miles < 2000) {
//   buyIt();
// }

// function prequal(car) {
//   if (car.mileage > 10000) {
//     return false;
//   } else if (car.year > 1950) {
//     return false;
//   }
//   return true;
// }

// let worthALook = prequal(rocky);

// if (worthALook) {

//   console.log("You need" + chkupa.make + " " + chkupa.model);

// } else {
//   console.log("you will really" + chkupa.make + " " + chkupa.model);
// }


// let makes = ["Chevy", "GM", "Fiat", "Webville", "Ticker"];
// let models = ["Cadilac", "500", "Bel-Air", "Taxi", "Torpedo"];
// let years = [1955, 1957, 1948, 1954, 1961];
// let colors = ["red", "blue", "tan", "yello", "white"];
// let convertible = [true, false];


// let rand1 = Math.floor(Math.random() * makes.length);
// let rand2 = Math.floor(Math.random() * models.length);
// let rand3 = Math.floor(Math.random() * years.length);
// let rand4 = Math.floor(Math.random() * colors.length);
// let rand5 = Math.floor(Math.random() * 5) + 1;
// let rand6 = Math.floor(Math.random() * 2);


// let car = {
//   make: makes[rand1],
//   model: models[rand2],
//   year: years[rand3],
//   color: colors[rand4],
//   passengers: rand5,
//   convertible: convertible[rand6],
//   mileage: 0
// };








// -----------------------------------------------------------------------------------------------





// const squareSum = array => array.map(item => item * item).reduce((a, c) => a + c);

// console.log(squareSum);



// var location1 = 3;
// var location2 = 4;
// var location4 = 5;

// var guess;
// var hits =0;
// var guesses = 0;

// var isSunk = false;

// while (isSunk == false)
// {
// guess = prompt("Ready, aim, fire! (enter a number 0-6):");
// if (guess < 0 || guess > 6) 
// {
//   alert("Please enter a valid cell number!!");
// }
// else {
//   guesses = guesses + 1;
// }
// }

// if (guess == location1)
//  {
//   hits = hits + 1;
// }

// else if (guess == location2)
// {
//   hits = hits + 1;
// }
// else if (guess == lpcation2)
// {
//   hits = hits + 1;
// }



// let result = 'hello world';
// console.log(result.split(' ').join(''));











// var drawCats = function (howManyTimes) 
// {
// for (var i = 0; i < howManyTimes; i++) { console.log (i + "=^.^=0"); 
// }
// }
// drawCats(1);//<=you can insert another string
// 5 * 12;

// var nick;

// var age = 12;

// console.log(age);

// setTimeout (wakeUpUser, 5000);
// function wakeUpUser()
// {
//   alert("are you doing to state");
// }
// var age = 25;
// var name = "Omen";
// if (age > 14) 
// {
//   alert ("sorry this page is for kids only!");
// }

//  else 
// {

//   alert ("welcome" + name + "!");
// }

// var winners = 2;
// var names = "duke";
// var isEligible = false;

// Test for jokes

// var joke = "JavaScript walked";

// var toldJoke = "false";
// var $punchline = "better watch out";

// var pentage = 20;
// var result


// if (toldJoke == true) 

// {
//   Alert ($punchline);

// }

// else

// {
//   alert (joke);

// }

///next

// var zipcode = 98104;
// var joesFavoriteMovie = forbiddenPlanet;
// var movieTicket$ = 9;

// if (movieTicket$ >= 9)
//  {
//   alert ("too much!!");
//  }
// else {
//   alert ("we're wrong" + joesFavoriteMovie);
//   }
//


// var baby = "Amily";
// var age = 33;

// age == "Amily";

// if ( age > 0)
// {
//   alert (" oh noo!!");
// }
// else
// {
//   alert ("yes!!")
// }
// scoops = 2;
// if (scoops > 3) {
//   alert ("Ice cream is normal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// }
// else if (scoops < 3) {
//   alert("ice cream is running low!!");
// }

// alert("hello world!")
// let a=3 
// alert(a)


// let a = confirm("uuueds", 4);
// alert(a);


// let a = 4;



// function sUm(a, b) 

// {

// //  alert(a + b);
// return a + b;

// }
// let result = sUm(2, 2);
// console.log(result * 2);


// sUm(1, 3);
// sUm(2, 4);
//  const  diff = function(a, b) {
//    return a - b;
//  }



// const divine = (a, b) => a / b;


//  diff(3, 5); 



//  const cb = (a, b, state) => {

//  if(state) {
//    a();
//  }
//  else {
//    b()
//  };
// }

// cb(
//   ()=>{alert('sdssdsd')},
//   ()=>{prompt('badd')},
//   true
// )

// let user = {
// name: 'peter',
// age: undefined,
// isMarried: false,
// 'xdxdxdxd': false

// }
// // alert(user.age);
// // alert(user['xdxdxdxd']);

// user.age = 12;
// user['age'] = 56;
// user.jhgjhl;
// alert(user.hasOwnProperty('weraefrwa'));

// let user2 = user;

// user2.job = 'Carpenter'


// function User(name, age, isMarried) {
//   this.name = name;
//   this.age = age;
// this.isMarried = isMarried;
// this.

// this.SayHello = () => 

// {

//   while (name == false)
//   {
//   guess = prompt("Ready, aim, fire! (enter a number 0-6):");
//   if (guess < 0 || guess > 6) 
//   {
//     alert("Please enter a valid cell number!!");
//   }
//   else {
//     guesses = guesses + 1;
//   }
//   }

//   if (guess == location1)
//    {
//     hits = hits + 1;
//   }

//   else if (guess == location2)
//   {
//     hits = hits + 1;
//   }
//   else if (guess == lpcation2)
//   {
//     hits = hits + 1;
//   }




// }


// {


//   if (name = 'benz')
//   {
//   alert ('My name is ' + this.name + '. I am' + this.age + 'years old')
//   }
// }
// }

// let layla = new User(prompt('what is fuel'), 34, true)
// layla.SayHello()

// let tolik = new User('tolik', 34, true)
// layla.SayHello()



// function User(a, b, c) {
//   this.name = a;
//   this.age = b;
//   this.isMarried = c;

//   this.sayHello = () => {
//       if(age == b) {
//           alert('My name is ' + this.name + 
//           '. I am a ' + this.age + ' years old'
//           )
//       }
//   }
// }

// let layla = new User(prompt(), 
//                     +prompt(), 
//                     confirm())
// layla.sayHello()

// let layla = new User('audi', 23, true)

// for(let abracadabra in layla) {
//   // alert(abracadabra)
//   alert(layla[abracadabra])
// }


// function autoMobile(company, model, color, fuel) {
//   this.company = company;
//   this.model = model;
//   this.color = color;
//   this.fuel = fuel;


//   // this.whatFuel = (question, yes, no) => {
//   //   if (confirm(question)) yes();
//   //   else no();
//   // }

//   this.SayHello = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
//   }
// }


// let audi = new autoMobile("audi", "a4", "black", true);
// audi.whatFuel(
//   function () {
//     alert("have are you?");
//   }

// );

// audi.SayHello("You have a car:  " + audi.company + "and model is:  " + audi.model + "color is: " + audi.color + " У выс машина работает на бензине?",
//   function () {
//     alert("Вы расточительный и любите быструю езду!");
//   },
//   function () {
//     alert("Вы экономный и скорее всего дед!");
//   }
// );


// let audi = new autoMobile(prompt(), 
//                     +prompt(), 
//                     confirm())


// function autoMobile(model, color, fuel) {
//   this.model = model;
//   this.color = color;
//   this.fuel = fuel;

//   this.sayHello = () => {
//       if(fuel = benzin) {
//           alert('My car is ' + this.model + 
//           '. The color is ' + this.color + ' the fuel is' + fuel
//           )
//       }
//   }
// }

// // let audi = new autoMobile(prompt(), 
// //                   +prompt(), 
// //                   confirm())
// // audi.sayHello()

// let audi = new autoMobile('audi', 'red', 'benzin')

// for(let benzin in audi) {
//   // alert(abracadabra)
//   alert(audi[benzin])
// }







// let msg = prompt('Сообщение', 0);
// alert(msg);

// const divide = (a, b) => a / b;
// const divide = (a, b) => { 
//     return a / b 
// };

// let user = {
//     name: 'Peter',
//     age: undefined,
//     isMarried: false,
//     'very very long': false
// }

// alert(user.age);
// alert(user['age']);
// alert(user['very very long'])
// user.age = 12;
// user['age'] = 56;
// alert(user.hasOwnProperty('dsfsdf'))

// let user2 = user;
// user2.job = 'Carpenter';
// alert(user.job)

// function User(a, b, c) {
//     this.name = a;
//     this.age = b;
//     this.isMarried = c;

//     this.sayHello = () => {
//         if(c == 'benzin') {
//             alert('My name is ' + this.name + 
//             '. I am a ' + this.age + ' years old'
//             )
//         }
//     }
// }

// let audi = new User('audi', 'red', 'benzin')
// alert(audi.c)

// function sum(op1 = 1, op2 = 3) {
//   alert(a + b);
// return a + op1 + op2;
// }


// function bark(name, weight) {
//   if (weight > 20 && weight < 390) {
//     console.log(name + " says WOOF");

//   } else if (weight > 400) {
//     console.log("You are monster!!!");
//   } else {
//     console.log(name + " says woof");
//   }

// }

// bark("rover", 22);
// bark("apot", 12);
// bark("bobik", 3);

// let bob = bark("bobbb", 401);

// let arr = [1, 2, 3, 4, 5];
// // alert(arr);

// // // arr.splice(3, 0, 'hello', 'world');
// // // alert(arr);

// // arr = arr.slice();
// // alert(arr.slice(0, 4));

// let arr1 = arr;
// arr1.push("hello");
// // // alert(arr);

// alert(arr.concat([1]));

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // alert(matrix[1][0]);

// // for(let i = 0; i < matrix.length; i++);{
// //   for(let j = 0; j < matrix[i].length; j++){
// //     alert(matrix[i][j]);
// //   }
// // }

// for (let i of matrix) {
//   for (let j of i) {
//     alert(j);
//   }
// }

// alert(arr1.indexOf("hello"));
// alert(arr1.includes("hello"));
// arr1.forEach((item, index, array) => {
//   // console.log(
//   alert(`Element ${item}, found for number : ${index} in massive ${array}`)
//   // )
// });
// result = arr1.map((a, b, c) => {
//   return `% of ${a}`
// })
// alert(result);
// result = arr1.filter((a, b, c) => {
//   return a > 3
// })
// alert(result);
// let numArr = [1, 10, 32, 32, 4, 56, 11, 42983];
// // numArr.sort((a, b) => a - b).reverse();
// // // alert(numArr.reverse());
// let result = numArr.reduce((initial, current) => initial *= current);
// console.log(result); 
// let arr = [50, 68, 55, 78, 66, 9, 76, 8];
// let solution = arr[2];
// alert("arrow" + solution);
// arr[4] = "hop";
// alert(arr[4]);

// function makePhases() {
//   var vords1 = ["24/7", "multi-tier", "30,000", "B-to-B", "win-win"];
//   var vords2 = ["246555", "ti554er", "ui", "B-", "win"];
//   var vords3 = ["7", "tier", "roror", "666", "in"];

//   var rand1 = Math.floor(Math.random() * vords1.lenght);
//   var rand2 = Math.floor(Math.random() * vords2.lenght);
//   var rand3 = Math.floor(Math.random() * vords3.lenght);

//   var phase = vords1[rand1] + " " + vords2[rand2] + " " + vords3[rand3];

//   alert(phase);
// }
// makePhases();




// let scores = [30, 67, 6, 72, 90, 12, 8, 09, 24, 11, 88, 102, 67, 1, 51, 26, 23];

// let highScore = 0;

// let output;

// while (i < scores.length) {

//   output = "bubles solution #" + i + " score: " + scores[i];
//   console.log(output);
//   i = i + 1;
// }

// for (let i = 0; i < scores.length; i++) {

//   output = "Bubble solution #" + i + " score: " + scores[i];
//   console.log(output);

//   if (scores[i] > highScore) {

//     highScore = scores[i];

//   }


// }
// console.log("Bubbles tests: " + scores.length);
// console.log("Highest bubble scores: " + highScore);

// let bestSolution = [];

// for (let i = 0; i < scores.length; i++) {

//   if (scores[i] == highScore) {

//     bestSolution.push(i);
//   }

// }

// console.log("Solution whith the higest score: " + bestSolution);

// function printAndGetHightScore(scores) {

//   let highScore = 0;
//   let output;

//   for (let i = 0; i < scores.length; i++) {

//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);

//     if (scores[i] > highScore) {

//       highScore = scores[i];
//     }

//   }
//   return highScore;

// }

// let highScore = printAndGetHightScore(scores);
// console.log("Bubles tests: " + scores.length);
// console.log("Higest bubles score: " + highScore);

// let bestSolution = [];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] == highScore) {
//     bestSolution.push(i);
//   }

// }
// console.log("solution whith the higest score: " + bestSolution);


// function getMostCostEffectiveSolution(scores, costs, highscore) {

//   let cost = 100;
//   let index;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//       if (cost > costs[i])


//       {
//         index = i;
//         cost = costs[i];
//       }
//     }


//   }
//   return index;
// }

// let mostCostEffective = getMostEffectiveSlution(scores, costs, highScore);
// console.log("bubble solutions #" + mostCostEffective + " is the most cost effective");
// alert(navigator.platform);
// alert(navigator.userAgent);
// alert(location.href);


// if (confirm('go to google')) {

//   location.href = 'http:/www.google.com' // with 

// }

// // dom дерево//

// // Text
// // comment
// // element
// // document.body
// // console.log((document.body.children[0]))


// console.log((document.body.children[1].children[2].textContent = 'umpa'))




// Chapter Recap
// You can create strings with " or '
// .length is a property that gives you the length of a string
// .toUpperCase() is a function that converts the string to upper case
// .toLowerCase() is a function that converts the string to lower case
// parentheses () on functions are required. .length is a property that is already pre-computed; therefore, it does not need parentheses.
// console.log(...) is used for debugging and is NOT a replacement for return.
// Square brackets [index] are used to access a specific index from a string
// The index starts at 0. So the first character is index 0
// You can combine it with the length of a string to get another character in another position
// A substring is a part or a portion of a string.
// string.substring(indexStart, indexEnd) is used to return a portion of the string.
// indexStart: the position of the first character you'd like to include.
// indexEnd: the position of the first character you'd like to ignore.
// the indexEnd argument is optional which means you can leave it out.
// The + operator is used to add 2 numbers
// The + operator is used to concatenate 2 strings
// A template string is a string created with the backtick character: `
// Template strings can span multiple lines
// Template strings support interpolation with the ${variableName} syntax


// let heading = document.querySelector('h1');
// heading.innerHTML += `hello from js <p> </p>`;
// console.log(heading);
// alert(heading);

// heading.innerText += `hello from js
//  <p> </p>`;
// heading.textContent += `jjsfnisje`;
// heading.outerHTML = `<div></div>`;
// console.log(heading);
// alert(heading.id)
// html.textContent = 'new';
// alert(heading.getAttribute('id'));
// alert(heading.hasAttribute('class'));
// console.log(heading);
// alert(heading.dataset.super);
// let div = document.createElement('div');
// div.innerHTML = `
// <h1>Zagolovok</h1>
// <img src= '' >
// <p>fhbsfshbfkhdbj</p>`;

// div.setAttribute('class', 'new')
// div.className = 'new lolowqekidmia'


// document.body.after(div);
// document.body.insertAdjacentElement('beforebegin', div);
// document.body.insertAdjacentHTML('beforebegin', `<h1>ioioioioioioioi</h1>`);
// document.body.insertAdjacentText('beforebegin', `<h1>ioioioioioioioi</h1>`);
// heading.style.fontSize = '100px';
// heading.style.color = 'green';

// let user = {
//   name: "peter",
//   age: 34,
//   isMaried: true
// }
// user.age = 56;
// console.log(user)

// let result = JSON.stringify(user)
// result = JSON.parse(result)
// alert(result)

// localstorage=================================================

// localStorage.removeItem();
// localStorage.