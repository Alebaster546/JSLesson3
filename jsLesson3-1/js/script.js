let terma = {
  Canada: 10,
  Germany: 13,
  Spain: 22,
  Belarus: -30,
  Italy: 25,
};

let sum = [10, 13, 22, -30, 25].reduce((a, b) => a + b, 0);
// Делим её на длину массива
let result = sum / [10, 13, 22, -30, 25].length;
alert(result);
console.log("result");

let temper = (obj) =>
  Object.values(terma).reduce((a, b) => a + b) / Object.keys(terma).length;
alert(temper(terma));

function getMaxOfArray(terma) {
  return Math.max.apply(null, terma);
}
alert(terma);
var json = {
  rating: {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Belarus: -30,
    Italy: 25,
  },
};

var numb = 0;
for (var key in json.rating) {
  numb = Math.max(json.rating[key], numb);
}
document.write(numb);
