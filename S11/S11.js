function sayHello() {
    console.log("hello")
}


// 匿名函式（英語：Anonymous Function）
var sayBye = function() {
    console.log("Bye")
};

sayBye()

// Array
var list = ["apple", "banana", "cat", "dog"]
console.log(list[0])

// Object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: "false",
    shout: function() {
        console.log("AHHH!!")
    }
}

var list2 = [{
        username: "Andy",
        password: "123"
    },
    {
        username: "Bob",
        password: "1234"
    }
]

// SignIn

database = [{
        username: "tom",
        password: "123"
    },
    {
        username: "alice",
        password: "1234"
    },
    {
        username: "sally",
        password: "12345"
    }
]

var usernamePrompt = prompt("What\'s your username?")
var passwordPrompt = prompt("What\'s your password?")

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === user && database[i].password === pass ) {
			return alert("Sign in sucessful!!")
		}
	}
	return alert("Wrong username or password!")
}

// function signIn(user, pass) {
//     if (user === usernamePrompt && pass === passwordPrompt) {
//         console.log("newsFeed")
//     } else {
//         alert("Sorry, wrong username and password")
//     }
// }

isUserValid(usernamePrompt, passwordPrompt)


// loop

var todolist = [
    "clean room",
    "brush teeth",
    "sleep",
    "exercise",
    "eat",
]

for (var i = 0; i < todolist.length; i++) {
    todolist[i]
}

todolist.forEach(function(i) {
    console.log(i)
})

var counter = 10

do {
    console.log(counter)
    counter--
} while (counter > 0)