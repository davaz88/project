const arr = ['a', 'b', 'c'];

const arrobj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {

    }
}

//arrobj.d = '345';
arrobj['d'] = '345';
console.log(arrobj['d']);
console.log(arrobj.d);

//const obj = { a: 1, b: 2 };

const obj = {
    Anna: 800,
    'Anton': 1000
};

//alert('Hellow');

//const res = confirm("Как дела?");
//console.log(res);

//const answer = prompt("Ты вдул?", "");
//console.log(typeof (answer));

//const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[3] = prompt('Ваш номер телефона:', '');

//document.write(answers);

const category = 'toys';
console.log(`https//starmarket/com/${category}/5`);

console.log('arr' + "- object");
console.log(4 + +"5");

let pro = 5,
    jpt = 47;

++pro;
--jpt;

console.log(pro);
console.log(jpt);

if (4 == 9) {
    console.log('ok');
}
else {
    console.log('Error');
}

const num = 50;

if (num < 50) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('Error');

const num = 50;
switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('not');
        break;
}

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
}

let num = 50;

while (num > 55) {
    console.log(num);
    num++;
}


do {
    console.log(num);
    num++;
}

while (num < 55);


for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

let result = '';
const leught = 7;

for (let i = 1; i < leught; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);


function myfirst() {
    console.log('Hello');
}

myfirst();

let num = 20;

function myfirst(text) {
    console.log(text);
    num = 10;
}

myfirst('hello');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(15, 32));
console.log(calc(3, 58));

function ret() {
    let num = 32;
    return num;
}

const log = function () {
    console.log('hellow');
};
log();

const calcu = (a, b) >= { return a + b };

const usdcurr = 28;
const eurcurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdcurr));

const str = 'test';

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

