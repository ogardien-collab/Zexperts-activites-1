$("#jouer").click(function(){
    $("*").removeClass("red green");
    $(".empty").html("");
    var listImg = [];
    while(listImg.length < 5){
        var newImg = getRandomInt(49);
        while(listImg.indexOf(newImg) != -1){
            newImg = getRandomInt(49);
        }
        listImg.push(newImg);
    }
    $(".imag").each(function(ind, elt){
        $(elt).html("<img src='./../static/img/"+listImg[ind]+".jpg' id='"+listImg[ind]+"'>")
    });
    fisherYatesShuffle(listImg);
    $(".legd").each(function(ind, elt){
        $(elt).html("<span class='remplir' id='drag"+[listImg[ind]]+"' draggable='true' ondragstart='drag(event)'>"+listeLogements[listImg[ind]]+"</span>");
    });
    $(".legd").css("height",(document.getElementById("legd1").offsetWidth)/2);
    $("#affichage_des_cartes").css("visibility","visible");
})
$( window ).bind( "resize", function(){
    $(".legd").css("height",(document.getElementById("legd1").offsetWidth)/2);
} );
// ================================= drag and drop code ==================================== //
function allowDrop(ev) {
    ev.preventDefault();
} 
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.currentTarget.style.backgroundColor = 'yelow';
}
function drop(ev) {
    ev.preventDefault();
    if(ev.target.tagName == "DIV" && ev.target.childNodes.length == 0){
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }   
}
// =============================== end of drag and drop code =============================== //
//fonction pour checker les réponses
$("#solution").click(function(){     
    $("*").removeClass("red green");
    $(".imag>img").each(function(ind,elt){
        if($(".empty")[ind].innerHTML == ""){
            $($(".empty")[ind]).addClass("red");
        } else {
           if(($(".empty")[ind].firstChild.id).substring(4) == elt.id){
                $($(".empty")[ind]).addClass("green");
            } else {
                $($(".empty")[ind]).addClass("red");
            }
        }
    })
})
//get a random integer
function getRandomInt(max){
    return Math.floor(Math.random() * max);/*renvoie un nombre entier entre 0 et max donc faire commencer les listes d'images à 0 pour éviter les problèmes*/
};
//pour mélanger une liste
function fisherYatesShuffle(arr){
    for(var i = arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
    return arr;
}
var listeLogements = ["faire le lit","faire le ménage","faire les courses","faire la vaisselle","repasser les vêtements","laver le linge","plier le linge","étendre le linge","passer l’aspirateur","arroser les plantes","vider la poubelle","ranger les vêtements","balayer","nourrir le chien","laver les vitres","laver le sol","aller chercher les enfants à l'école","changer les draps","emmener les enfants à l’école","cuisiner","laver la voiture","faire la poussière","mettre la table","payer les factures","prendre le petit déjeuner","déjeuner","goûter","dîner","se réveiller","se laver","prendre une douche","prendre un bain","se brosser les dents","se laver les cheveux","se coiffer","se sécher les cheveux","se raser","s’épiler","se maquiller","s’habiller","aller au travail","rentrer à la maison","promener le chien","se déshabiller","se coucher","dormir","le matin","l’après-midi","le soir","la nuit"]