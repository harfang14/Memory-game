var overlay = document.getElementById('overlay');
var rules = document.getElementById('content-center');
var buttonClose = document.getElementById('buttonClose');
var closeButton = document.getElementById('return');
var deckLevel = document.getElementById('deckLevel');
var hp = document.getElementById('hp');
var sw = document.getElementById('sw');
var sh = document.getElementById('sh');


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
    deckLevel.style.display = 'block';
    overlay.style.display ='none'; 
    hp.style.display ='block';
    sw.style.display ='none';
    sh.style.display ='none';   

  }
  else if (choice.textContent == "Moyen"){
    deckLevel.style.display = 'block';
    overlay.style.display ='none'; 
    hp.style.display ='none';
    sw.style.display ='block';
    sh.style.display ='none'; 
  }
  else if (choice.textContent == "Difficile"){ 
    deckLevel.style.display = 'block';
    overlay.style.display ='none'; 
    hp.style.display ='none';
    sw.style.display ='none';
    sh.style.display ='block'; 
  
 }
}

closeButton.addEventListener('click', turnBack);

function turnBack(){
  deckLevel.style.display = 'none';
  overlay.style.display = 'block';

}
//alert("knalenv");

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
  function choice(card) {
    var url ="/app/hardgame.html";
    url = url + "?"+card;
    document.location.href=url;
   // verif("dc");
}