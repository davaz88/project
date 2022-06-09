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

