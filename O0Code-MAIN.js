//Your O0Code
let code = "o0oo0oo0 oo0ooooo o00o00oo o00o0000 o000o00o o00oo0o0 oo0ooooo o0oo0o0o o00oooo0 o000o00o o00oooo0 o0o0oo00 o00ooo00 o000oo0o o00o0oo0 o000oooo o000o0oo oo0ooooo o0oo00oo o00o0000 o00o00oo";

/*
| (cc) 2022-2022 | SurvExE-Pc on github | This is licenced under creativecommons |
*/

//functions used
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    };
    return bin;
};
function asc2dec(asc){
    var y="";
    for (let i = 0;i<asc.length;i++) {
        if (i<asc.length) {
        y=y+((asc.at(i)).charCodeAt(0)).toString()+" ";
            } else {
            y=y+((asc.at(i)).charCodeAt(0)).toString();
            };
    };
    return y;
};
  function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }
function converto(co) {
    co=co.replaceAll("0","1");
    co=co.replaceAll("o","0");
    return co;
};

//main conversion code
function convert0oCode(c) {
var b=converto(c),h="",l=[];
    if (c.includes("1")) {
        throw new Error("could not read");
    };
for (let i = 0;i<b.length+18;i++) {
    if (b.at(i)=="1"|b.at(i)=="0") {
    h=h+b.at(i);
    } else {
        l.push(bin2dec(h));
        h="";
    };
};
    l=l.join(" ");
console.log(l)
var t=[],j="";
for (let i = 0;i<l.length;i++) {
    if (l.at(i)==" ") {
        t.push(String.fromCharCode(j));
        j="";
    } else {
        j = j+l.at(i);
    };
};
return ((t.join("")).replace("\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00",""));
};
function convertascto0o(a) {
    var n=(asc2dec(a)).split(" "),v=[];
    for (let i = 0;i<n.length;i++) {
        v.push(convertToBinary(n[i]));
    };
    v=((((v.join(" ")).replaceAll("o","j")).replaceAll("0","o")).replaceAll("j","0")).replaceAll("1","0");
    return v;
};
/*
How to use - You write your code into the code variable at the top and then it will convert it when you run convert0oCode(code);
and if you want you can use the built in function of auto generating the O0Code for you by using convertascto0o(); function 
- like this convertascto0o("Hi, This is being converted into OCode");
*/
