// 1
console.log('task:1');
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'y', 'u']
function getRandomLetter(a) {
    return a[Math.floor(Math.random()*a.length)]
}
console.log(getRandomLetter(arr1));


// 2
console.log('task:2');
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8]
let sum = 0
function calcSum() {
    for(let item of arr2) {
        if (item%2===0) {
            sum+=item
        }
    }
    return sum;
}
console.log(calcSum());


// 3
console.log('task:3');
const arr3 = [-3, -5, -9, 3, 0, true, false, -22]
const newArr = []
let getPositiveNum = function() {
    for(i=0;i<arr3.length;i++) {
    newArr.push(Math.abs(arr3[i]))
    } 
    return newArr
}
console.log(getPositiveNum());


// 4
console.log('task:4');
const arr4 = [4, 9, 16, 18, 30, 36, 50]
const newArr2 = []
let calcSquareRoot = (x) => {
    for(let i=0;i < x.length;i++) {
       newArr2.push(parseInt(Math.sqrt(x[i])))
    }
    return newArr2;
} 
console.log(calcSquareRoot(arr4))