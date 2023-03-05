//question 1
//Mutation in context of JavaScript arrays is basically changing the array itself 
//instead of returning a new array with the new changes whereas
//Non-Mutation is returning a whole new array which has all the changes
//Example of the mutating array methods:  array.reverse(), array.shift(), array.sort(), array.splice() and array.unshift()
//Example of the non--mutating array methods: array.concat(), array.indexOf, array.lastIndexOf, array.slice() and array.splice()

//question 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"]
languages.push("Kotlin")
languages.splice(3,0,"Java")
languages.shift()
languages.unshift("Scala", "Swift")
languages.splice(5,1,"Go","Rust")

console.log(languages)

//question 3
// ['apple', 'mango', 'orange']

//question 4
let largestnumber = 0; 
function max(arr){
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > largestnumber){
            largestnumber = arr[i];
        }
    }
    return largestnumber
}
let numbers = [4, 5, 10, -2]
console.log(max(numbers))

//question 5
let answer =[]
function valTimesIndex(arr){
    for (let i = 0; i<arr.length; i++){
        answer.push(arr[i] * i)
    }
    return answer
}
nums = [5,10,15]
console.log(valTimesIndex(nums))