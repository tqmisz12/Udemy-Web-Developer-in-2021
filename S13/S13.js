
// if else in one line
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// var experiencePoints = winBattle() ? 10 : 1;

// Switch
function moveCommand(direction) {
	var whathappen
	switch (direction) {
		case "up" :
			whathappen = "up"
			break
		case "down" :
			whathappen = "down"
			break
		case "left" :
			whathappen = "left"
			break
		case "right" :
			whathappen = "right"
			break
		default:
			whathappen = "enter a direction"
	}
	return whathappen
}


// const & let

const obj = {
	player : "bobby",
	experience: 100,
	wizardlevel: false,
}

// const player = obj.player
// const experience = obj.experience
// let wizardlevel = obj.wizardlevel

const {player, experience} = obj
let {wizardlevel} = obj

// console.log(player)
// console.log(wizardlevel)


//////////////////
const name = "Bob"
const age = 20
const pet = "Dog"

const greeting1 = "Hello " + name + " You are " + age + " Your pet is " + pet
const greeting2 = `Hello ${name}. You are ${age-5}. Your pet is ${pet}`

console.log(greeting1)
console.log(greeting2)

function greeting(name, age, pet) {
	return `Hello ${name}. You are ${age-5}. Your pet is ${pet}`
}

console.log(greeting("Bob", 20, "dog"))

///arrow function
function add(a,b) {
	return a+b
}

const add2 = (a,b) => a+b

console.log(add2(1,3))


//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. 
//    It must only depend on its input elements.


//Advanced Array

const array = [1,2,3,5,8,9]
const double = []

const newArray = array.forEach(num => {
	double.push(num * 2)
})

console.log(double)

//map, filter, reduce

const mapArray = array.map(num => num * 2)

const filterArray = array.filter(num => num >= 5)

console.log(filterArray)

//reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
const reduceArray = array.reduce((acc, num) => {
	return acc+num
}, 0)

console.log(reduceArray)

//reference type

var object1 = {value:10}
var object2 = object1
var object2 = {value:10}

//context vs scope

const object4 = {
	a:function(){
		console.log(this)
}}

//instantiation
class Player {
	constructor(name, type) {
		this.name = name
		this.type = type
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am a ${this.type}.`)
	}
}

class Wizzard extends Player {
	constructor(name, type) {
		super(name,type)
	}
	play(){
		console.log(`WEEEEE I am a ${this.type}`)
	}
}

const wizard1 = new Wizzard('Shelly', 'Healer')
const wizard2 = new Wizzard('Shawn', 'Dark Magic')


//call by value & call by reference
//Evaluate these:
//#1
// [2] === [2] 
// {} === {} 

//#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5}; 
// object1.a = 4;

// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Get the below object to go from:
let obj10 = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'

console.log(Object.entries(obj10).map(value => value.join(" ")).join(" ")) 


// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// //Solution:
// console.log(array.flat(2))


// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// //Solution:
// console.log(greeting.flatMap(x => x.join(' ')))

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// //Solution:
// console.log(userEmail3.trimEnd().trimStart())

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// //Solution
// const usersArray = Object.entries(users)

// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// //Solution
// const updatedUsers = Object.fromEntries(updatedUsersArray)
// console.log(updatedUsers)


const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n // BigInts need to be calculated with other BigInts so...
3n + 4n + 1n // 8n
3 + 4 + 1 // 8 
// Both produce the value of 8, but one is a Number type, the other is a BigInt type


