
var myString = "I enjoy designing websites that meet my clients need ";
var myArray = myString.split("");
var loopTimer;
function frameLooper() {
  if(myArray.length > 0) {
    document.querySelector(".animated-text").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer); 
                return false;
  }
  loopTimer = setTimeout('frameLooper()',30);
}
frameLooper();