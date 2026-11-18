$("#jouer").click(function(){
    $("*").removeClass("true false green red");
    var img = getRandomInt(49);
    $("#image").html("<img class='img' src='./../static/img/"+img+".jpg'>");
    var listLegendes = [img];
    while(listLegendes.length < 3){
        var newLeg = getRandomInt(49);
        while(listLegendes.indexOf(newLeg) != -1){
            newLeg = getRandomInt(49);
        }
        listLegendes.push(newLeg);
    }
    fisherYatesShuffle(listLegendes);
    $(".legende").each(function(index, elt){
        $(elt).html(listeLogements[listLegendes[index]]);
        if(listLegendes[index] == img){
            $(elt).addClass("true");
        }else{
            $(elt).addClass("false");
        }
    });
    $("#legendes").css("visibility","visible"); 
})

$(".legende").click(function(){
    if($(this).hasClass("true")){
        $(this).addClass("green");
    }else{
        $(this).addClass("red");
    };
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