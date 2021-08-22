// DOM Selectors
// --------------
// getElementsByTagName
// getElementsByClassName
// getElementById

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children

// ##It is important to CACHE selectors in variables



// var button = document.getElementsByTagName("button")[0]

// button.addEventListener("click", function () {
// 	alert("Click")
// })

var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
}

function addListAfterClick(){
	if (inputLength() > 0) {
        createListElement()
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    }
}

button.addEventListener("click", addListAfterClick) 

input.addEventListener("keypress", addListAfterKeypress)

/////////////////////////////////////////////////////////////////

var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background
}

// color1.addEventListener("input", setGradient)

// color2.addEventListener("input", setGradient)



