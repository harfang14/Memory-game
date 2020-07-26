let url;

function verif(){
    var page = window.location.href;

    
    var position2 = page.indexOf('sw');   

    if(position2 == -1){
    document.body.style.backgroundImage = "url('/app/assets/picture/stars_wars/jedi/background.jpg')";
   //alert("jedi");
    }
    
    else{
    alert("sith")    
    document.body.style.backgroundImage = "url('/app/assets/picture/stars_wars/sith/background.jpg')";
    
    }


    var position3 = page.indexOf('dc');
    if(position3 == -1){  
        //alert("dc");
    document.body.style.backgroundImage = "url('/app/assets/picture/super_hero/marvel/background.jpg')";


    }else{
    document.body.style.backgroundImage = "url('/app/assets/picture/super_hero/dc/background.jpg')";
    }

}
verif();