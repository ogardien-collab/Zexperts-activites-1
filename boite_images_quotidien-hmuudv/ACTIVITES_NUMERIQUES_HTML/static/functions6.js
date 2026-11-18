$("#jouer").click(function(){
    var nbWag = 0;
    var listWag = [];
    for(let elt of $(".wagon")){
        if ($(elt).html() != ""){
            listWag.push(parseInt(elt.firstChild.id));
            nbWag += 1;
        }
    }
    var listImg = [];
    for(let elt of listWag){
        listImg.push(elt);
    };
    while(listImg.length < nbWag+1){
        var nImg = getRandomInt(49);
        while(listImg.indexOf(nImg) != -1){
            nImg = getRandomInt(49);
        }
        listImg.unshift(nImg);
    }
    $(listImg).each(function(i,e){
        $($(".wagon")[i]).html("<img id='"+e+"' src='./../static/img/"+e+".jpg'><span class='lege'>"+listeLogements[e]+"</span>");
        $($(".wagon")[i]).css("visibility","visible");
    })
    if($("#avec").prop("checked")){
        $(".lege").addClass("visibleLegende");
    }else{
        $(".lege").removeClass("visibleLegende");
    }
})
$(".legende").click(function(){
    if($("#avec").prop("checked")){
        $(".lege").addClass("visibleLegende");
    }else{
        $(".lege").removeClass("visibleLegende");
    }
})
// calcul de la taille des cartes

function setSize(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}
setSize();
$( window ).bind( "resize", setSize );
//get a random integer
function getRandomInt(max){
    return Math.floor(Math.random() * max);/*renvoie un nombre entier entre 0 et max donc faire commencer les listes d'images à 0 pour éviter les problèmes*/
};
var listeLogements = ["faire le lit","faire le ménage","faire les courses","faire la vaisselle","repasser les vêtements","laver le linge","plier le linge","étendre le linge","passer l’aspirateur","arroser les plantes","vider la poubelle","ranger les vêtements","balayer","nourrir le chien","laver les vitres","laver le sol","aller chercher les enfants à l'école","changer les draps","emmener les enfants à l’école","cuisiner","laver la voiture","faire la poussière","mettre la table","payer les factures","prendre le petit déjeuner","déjeuner","goûter","dîner","se réveiller","se laver","prendre une douche","prendre un bain","se brosser les dents","se laver les cheveux","se coiffer","se sécher les cheveux","se raser","s’épiler","se maquiller","s’habiller","aller au travail","rentrer à la maison","promener le chien","se déshabiller","se coucher","dormir","le matin","l’après-midi","le soir","la nuit"]