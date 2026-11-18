$("#jouer").click(function(){
    var listImg = [];
    while(listImg.length < $(".carte").length){
        var newImg = getRandomInt(49);
        while(listImg.indexOf(newImg) != -1){
            newImg = getRandomInt(49);
        }
        listImg.push(newImg);
    }
    $(".im").each(function(i,e){
        $(e).attr("src","./../static/img/"+listImg[i]+".jpg");
        $(e).attr("id",(listImg[i]));
    })
    $(".leg").each(function(i,e){
        $(e).html(listeLogements[listImg[i]]);
    });
    $.wait = function(ms) {
        var defer = $.Deferred();
        setTimeout(function() { defer.resolve(); }, ms);
        return defer;
    };
})
$( window ).bind( "resize", function(){
    setSize();
} );
// changer une seule image au click
$(".im").click(function(){
    listeIDs = [];
    for(let elt of $(".im")){
        listeIDs.push(parseInt(elt.id));
    }
    var newElt = getRandomInt(49);
    while(listeIDs.indexOf(newElt) != -1){
        newElt = getRandomInt(49);
    }
    $(this).attr("src","./../static/img/"+newElt+".jpg");
    $(this).attr("id",newElt);
    $(this).next().html(listeLogements[newElt]);
    
});

// calcul de la taille des cartes

function setSize(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if(vw>=vh){
        $(".im").css({
            height:"90%",
            maxWidth:"100%"
        })
        if($("#avec").prop("checked")){
            $(".carte_glob").css({
                width:(vw-200)/5+"px",
                height:(vh-320)/3+"px",
                marginBottom:"25px"
            });
            $(".leg").css("visibility","visible");
        } else{
            $(".carte_glob").css({
                width:(vw-200)/5+"px",
                height:(vh-200)/3+"px",
                marginBottom:"0px"
            });
            $(".leg").css("visibility","hidden");
        }
    }else{
        if($("#avec").prop("checked")){
            $(".carte_glob").css({
                width:(vw-210)/3+"px",
                height:(vh-330)/5+"px",
                marginBottom:"25px"
            });
            $(".leg").css("visibility","visible");
        } else{
            $(".carte_glob").css({
                width:(vw-210)/3+"px",
                height:(vh-210)/5+"px",
                marginBottom:"0px"
            });
            $(".leg").css("visibility","hidden");
        }
    }
}
setSize();
$(".legende").change(setSize);
$( window ).bind( "resize", setSize );
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