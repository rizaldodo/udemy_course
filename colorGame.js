let numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
let bg = "#232323";
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i=0; i<squares.length; i++){
        
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
       
    }

})

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = bg;
    messageDisplay.style.color = "white";

    for(let i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }

});

colorDisplay.textContent = pickedColor;

for(let i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        clickedColor = this.style.background;
        //compare color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color = "black";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again";
        }else{
            this.style.background = bg;
            messageDisplay.style.color = "black";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(let i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(let i=0; i<num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}