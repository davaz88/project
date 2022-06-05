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