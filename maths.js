function diagonal(s) {

    return Math.sqrt(2) * s;

}

const s = 9;

document.querySelector(".diagonal").innerHTML = (diagonal(s));
console.log("Diagonal: "+ diagonal(s));



function area(a) {
var t = (s1 + s2 + s3)/2
var a = Math.sqrt(t * (t-s1) * (t - s2) * (t - s3));
return a;
}
const s1 = 5;
const s2 = 6;
const s3 = 7;

console.log("Area: " + area());
document.querySelector(".triangle").innerHTML = (area());


const radius = 4;

function circleArea(ca) {
var area = 3.14*radius*radius;
return area;
}

console.log("Area of a circle " + circleArea());
document.querySelector(".circle").innerHTML = (circleArea());

function circumference(c) {
var circumference = 2*3.14*radius;

return circumference;
}

console.log("Circumference " + circumference());
document.querySelector(".circle2").innerHTML = (circumference());
