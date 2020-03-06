/*
* Title : Monopoly Game
* Author : Baptiste Buvron,
* Created the : 01/03/2020

*/

/**
 * @description Objet du Monopoly
 * @type {object}  
 */
var Monopoly = new Object();

/**
 * @property Propriété qui récupère le nombre de joueur
 */
Monopoly.getNbrPlayer = function () {
    $(document).ready(function () {
        $("#modal-player").modal('show');

    });
    $("#button-nbrPlayer").click(getNbrPlayer);


    /**
     * @description Fonction qui récupère le nombre de joeur
     * @type {Function}
     */
    function getNbrPlayer() {
        var nbrPlayer = 0;
        nbrPlayer = parseInt($("#nbrPlayer").val());
        if (nbrPlayer > 5 || nbrPlayer < 2) {
            Monopoly.getNbrPlayer();
        } else {
            $("#modal-player").modal('hide');
            Monopoly.createPlayer(nbrPlayer);
        }
    }

};
/**
 * @param {number} nbrPlayer number of player
 */
Monopoly.createPlayer = function (nbrPlayer) {
    for (let index = 0; index < nbrPlayer; index++) {
        $('<div class="player"></div>').appendTo('#game .start .content');
        
    }
    
};

Monopoly.dice = function () {

};

Monopoly.getNbrPlayer();