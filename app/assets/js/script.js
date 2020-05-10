var overlay = document.getElementById('overlay');
var rules = document.getElementById('content-center');
var buttonClose = document.getElementById('buttonClose');
var turnBack = document.getElementById('return')

buttonClose.addEventListener('click', close);

function popup(){
    overlay.style.display = 'block';
    rules.style.display = 'none';
}

function close(){
    overlay.style.display = 'none';
    rules.style.display = 'block';
}

function popupHard(){
  hard.style.display = 'block';
  overlay.style.display = 'none';
  rules.style.display = 'none';
}

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
   