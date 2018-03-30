/*
function mouseOver() {
    document.getElementById("Wave").src="img/left.gif";
}
function mouseOut() 
    document.getElementById("Wave").src = "img/right.gif";
}



//boomer animatgion

function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
*/
/*
function myFunction() {
    alert("Hello! I am an alert box!");
}
*/

// cloud crap

$(function() {
  $('#Skills').hover(function() {
    $('#skillclouds').css('display','inherit');
  }, function() {
    $('#skillclouds').css('display', 'none');
  });
});


$(function() {
  $('#Portfolio').hover(function() {
    $('#portfolioclouds').css('display','inherit');
  }, function() {
    $('#portfolioclouds').css('display', 'none');
  });
});
// when i hover I want it the animation to fade in from both sides..

$(function() {
  $('#Me').hover(function() {
    $('#meclouds').css('display','inherit');
  }, function() {
    $('#meclouds').css('display', 'none');
  });
});

$(function() {
  $('#Contact').hover(function() {
    $('#contactclouds').css('display','inherit');
  }, function() {
    $('#contactclouds').css('display', 'none');
  });
});
$(function() {
  $('#footer').hover(function() {
    $('#Booms').css('display','inherit');
  }, function() {
    $('#Booms').css('display', 'none');
  });
});
