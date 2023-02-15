//declare a color variable
let color = "red"

// code the blue when the user clicks on the blue 


let blueTile = document.querySelector("#blue")
blueTile.addEventListener("click", function(){
    color = "blue"
})

let redTile = document.querySelector("#red")
redTile.addEventListener("click", function(){
    color = "red"
})

let yellowTile = document.querySelector("#yellow")
yellowTile.addEventListener("click", function(){
    color = "yellow"
})

let greenTile = document.querySelector("#green")
greenTile.addEventListener("click", function(){
    color = "green"
})
let hotPinkTile = document.querySelector("#hotpink")
hotPinkTile.addEventListener("click", function(){
    color = "hotpink"
})

let purpleTile = document.querySelector("#purple")
purpleTile.addEventListener("click", function(){
    color = "purple"
})

let orangeTile = document.querySelector("#orange")
orangeTile.addEventListener("click", function(){
    color = "orange"
})

let brownTile = document.querySelector("#brown")
brownTile.addEventListener("click", function(){
    color = "brown"
})
let blackTile = document.querySelector("#black")
blackTile.addEventListener("click", function(){
    color = "black"
})

// step 1 create a variable for the painting area

let canvas = document.querySelector(".painting")

//step 2 add an event listener to the area for user clicks

canvas.addEventListener("click", function(e){
    //css background-color
 e.target.style.backgroundColor = color


})
