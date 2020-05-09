

var button_Popup = document.getElementById('new-game');
var overlay = document.getElementById('overlay');
var regle_jeu = document.getElementById('content-center');
button_Popup.addEventListener('click', popup);
function popup(){
    overlay.style.display = 'block';
    regle_jeu.style.display = 'none';

}

var buttonClose = document.getElementById('buttonClose');
buttonClose.addEventListener('click', close);
function close(){
    overlay.style.display = 'none';
    regle_jeu.style.display = 'block';
}

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
   