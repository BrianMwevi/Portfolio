
var myString = "I enjoy designing websites that meet my clients need";
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("#navbar").slideDown(250);
    } else {
        $("#navbar").slideUp(250)
    }
}

function hovered() {
	var thisId = event.target.id

	$("#text" + thisId).slideDown(200, function() {
		$(this).show();

		$("#link" + thisId).fadeIn(300, function() {
			$(this).show();
		})
	})

	
}

function notHovered() {
	var thisId = event.target.id;

	$("#" + thisId).slideUp(200, function() {
		$(this).hide()
	})
	$("#link" + thisId).fadeOut(200, function() {
		$(this).hide()
	})
}

