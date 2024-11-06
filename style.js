const fruits=["apple","banana","cherry"]
fruits.push("orange")
fruits.pop()
fruits.shift()
fruits.unshift("watermelon")
console.log(fruits.unshift())

let onefruits = fruits.join()
console.log(onefruits)

console.log(fruits)




let manyfruits = fruits.indexOf("banana")
console.log(manyfruits)

const somefruits= fruits[0]
console.log(somefruits)

var student = {
    Name:"kesavan",
    Age: 21,
    isstudent:true,
    emailaddress:"abcdeffg@gmail.com"
   
}
var student2 = {
    Name:"MCQ",
    Age:22
}

Object.assign(student,student2)

var merge = Object.assign({}, student,student2);
console.log(merge)   

let keys = Object.keys(student);
console.log(keys)

console.log(student)
student.Name="vijay"


console.log(student)
console.log(student.hasOwnProperty('Name'))




function add(a,b){
    return a+b
}

console.log(add(2,3));
add(2, 3);
num=3
function iseven(){
    if (num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
console.log(iseven(2))
function threenum(a,b,c){
return Math.max(a, b, c)
}
console.log(threenum(2, 3, 4))

function lastletter(str){
    return str.slice(-1)
}   
console.log(lastletter("kesavan"))