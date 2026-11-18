// fonctions de choix d'image
/*get a random integer */
function getRandomInt(max){
    return Math.floor(Math.random() * max);/*renvoie un nombre entier entre 0 et max donc faire commencer les listes d'images à 0 pour éviter les problèmes*/
};
$( window ).resize(function() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        $(".carte").css("height", "31%");
    }else{
        $(".carte").css("height", "48%");
    }
});
/*return a chosen nb of non-identic images from a list*/
function img_legende(legende){
    // on récupère la valeur de la case cochée pour le nombre de cartes à tirer et on la stocke dans nbImages
    var nbImages = "";
    for(let elt of $(".nb_img")){
        if($(elt)[0].checked == true){
            nbImages = parseInt($(elt)[0].value);
        }
    }
    // on affiche "nbImages" cartes
    var listeImages = [];
    while(listeImages.length < nbImages){
        var newIndex = getRandomInt(49);
        while(listeImages.indexOf(newIndex) != -1){
            var newIndex = getRandomInt(49);
        }
        listeImages.push(newIndex);
    }
    $("#affichage_des_cartes").html(""); // on efface les cartes pré-existantes
    for(let elt of listeImages){
        if(legende){
            $("#affichage_des_cartes").append("<div class='carte' id='carte"+elt+"'><img src='./../static/img/"+elt+".jpg'><span class='affiche'>"+listeLogements[elt]+"</span></div>"); // on ajoute les nouvelles cartes
        }else{
            $("#affichage_des_cartes").append("<div class='carte' id='carte"+elt+"'><img src='./../static/img/"+elt+".jpg'></div>"); // on ajoute les nouvelles cartes
        }
    }
    if (window.matchMedia("(orientation: portrait)").matches) {
        $(".carte").css({
            "height":"31%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-width":"100%",
            "max-height":"100%"
        });
        $(".affiche").css("font-size","large");
    }else{
        $(".carte").css({
            "height":"48%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-height":"90%"
        });
        $(".affiche").css("font-size","x-large");
    }
}
$( window ).bind( "resize", function(){
    if (window.matchMedia("(orientation: portrait)").matches) {
        $(".carte").css({
            "height":"31%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-width":"100%",
            "max-height":"100%"
        });
        $(".affiche").css("font-size","large");
    }else{
        $(".carte").css({
            "height":"48%",
            "width":"30%"
        });
        $(".carte>img").css({
            "max-height":"90%"
        });
        $(".affiche").css("font-size","x-large");
    }
} );
$("#jouer").click(function(){
    img_legende(legende=true);
});
$("#jouer2").click(function(){
    img_legende(legende=true);
    $(".affiche").css("visibility","hidden");
});

// variables pré-enregistrées

var listeLogements = ["faire le lit","faire le ménage","faire les courses","faire la vaisselle","repasser les vêtements","laver le linge","plier le linge","étendre le linge","passer l’aspirateur","arroser les plantes","vider la poubelle","ranger les vêtements","balayer","nourrir le chien","laver les vitres","laver le sol","aller chercher les enfants à l'école","changer les draps","emmener les enfants à l’école","cuisiner","laver la voiture","faire la poussière","mettre la table","payer les factures","prendre le petit déjeuner","déjeuner","goûter","dîner","se réveiller","se laver","prendre une douche","prendre un bain","se brosser les dents","se laver les cheveux","se coiffer","se sécher les cheveux","se raser","s’épiler","se maquiller","s’habiller","aller au travail","rentrer à la maison","promener le chien","se déshabiller","se coucher","dormir","le matin","l’après-midi","le soir","la nuit"]