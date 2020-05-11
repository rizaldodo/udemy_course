let numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
let modeBtns = document.querySelectorAll(".mode");
let bg = "#232323";

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
    for(let i=0; i<modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
          modeBtns[0].classList.remove("selected");
          modeBtns[1].classList.remove("selected");
          this.classList.add("selected");
          this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
         reset();
        });
    }
}
function setupSquares(){
    for(let i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            let clickedColor = this.style.background;
            //compare color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again";
            }else{
                this.style.background = bg;
                messageDisplay.textContent = "Try Again";
            }
        });
    } 
}


function reset(){
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    
    for(let i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(let i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(let i=0; i<squares.length; i++){
        
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
       
//     }

// })

resetButton.addEventListener("click", function(){
   reset();

});

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