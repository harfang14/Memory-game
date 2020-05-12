var overlay = document.getElementById('overlay');
var rules = document.getElementById('content-center');
var buttonClose = document.getElementById('buttonClose');
var turnBack = document.getElementById('return')
var hard = document.getElementById('hard')

buttonClose.addEventListener('click', close);

function popup(){
    overlay.style.display = 'block';
    rules.style.display = 'none';
}

function close(){
    overlay.style.display = 'none';
    rules.style.display = 'block';
}

function choiceLevel(choice){

   if (choice.textContent == "Facile"){
  facile.style.display = 'block';
  overlay.style.display ='none'; 
  }
  else if (choice.textContent == "Moyen"){
    medium.style.display = 'block';
    overlay.style.display ='none'; 
  }
  else if (choice.textContent == "Difficile"){ 
  hard.style.display = 'block';
  overlay.style.display ='none'; 
  
 }
}

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
