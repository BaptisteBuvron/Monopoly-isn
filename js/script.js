/*
* Title : Monopoly Game
* Author : Baptiste Buvron, Yann Le Moal
* Created the : 01/03/2020

*/


var Monopoly = new Object();

Monopoly.moneyAtStart = 200;
Monopoly.allowToDice = false;

Monopoly.start = function () {
    Monopoly.getNbrPlayer();
};

Monopoly.nbrPlayer = 0;

/* In readme*/
Monopoly.bankPlayer = new Map();

/* */
function propertiesCell(id, name, group, owner, buy, sell, rent, level) {
    this.id = id;
    this.name = name;
    this.group = group;
    this.owner = owner;
    this.buy = buy;
    this.sell = sell;
    this.rent = rent;
    this.level = level;

}


/* For Chance, community and corner cell */
function otherCell() {
    this.id = id;
    this.name = name;
}



Monopoly.listCell = new Map();
Monopoly.listCell.set(2, new propertiesCell(2, "Pays inconnu", "Autre", null, 60, 30, 25, 1));
Monopoly.listCell.set(4, new propertiesCell(4, "Corée Du Nord", "Autre", null, 60, 30, 25, 1));
Monopoly.listCell.set(6, new propertiesCell(6, "Aéroport", "Aéroport", null, 200, 100, 25, 1));
Monopoly.listCell.set(7, new propertiesCell(7, "Egypte", "Afrique", null, 100, 50, 30, 1));
Monopoly.listCell.set(9, new propertiesCell(9, "Afrique du Sud", "Afrique", null, 100, 50, 30, 1));
Monopoly.listCell.set(10, new propertiesCell(10, "Nigeria", "Afrique", null, 100, 50, 30, 1));

/*
Monopoly.listCell.set(12,{"name":"Papouasie-Nouvelle-Guinée"});
Monopoly.listCell.set(13,{"name":"Compagnie d'électricité"});
Monopoly.listCell.set(14,{"name":"Nouvelle-Zélande"});
Monopoly.listCell.set(15,{"name":"Australie"});
Monopoly.listCell.set(16,{"name":"Aéroport"});
Monopoly.listCell.set(17,{"name":"Venezuela"});
Monopoly.listCell.set(19,{"name":"Argentine"});
Monopoly.listCell.set(20,{"name":"Brésil"});
Monopoly.listCell.set(22,{"name":"Inde"});
Monopoly.listCell.set(24,{"name":"Japon"});
Monopoly.listCell.set(25,{"name":"Chine"});
Monopoly.listCell.set(26,{"name":"Aéroport"});
Monopoly.listCell.set(27,{"name":"Mexique"});
Monopoly.listCell.set(28,{"name":"Canada"});
Monopoly.listCell.set(29,{"name":"Compagnie d'eau"});
Monopoly.listCell.set(30,{"name":"Etats-Unis"});
Monopoly.listCell.set(32,{"name":"Allemagne"});
Monopoly.listCell.set(33,{"name":"Grande-Bretagne"});
Monopoly.listCell.set(35,{"name":"France"});
Monopoly.listCell.set(36,{"name":"Aéroport"});
Monopoly.listCell.set(38,{"name":"La Lune"});
Monopoly.listCell.set(40,{"name":"La planète Mars"});

*/



/* In Readme */
Monopoly.getNbrPlayer = function () {
    $(document).ready(function () {
        $("#modal-player").modal('show');

    });

    $("#button-nbrPlayer").click(getNbrPlayer);




    function getNbrPlayer() {
        var nbrPlayer = 0;
        nbrPlayer = parseInt($("#nbrPlayer").val());
        if (nbrPlayer <= 5 && nbrPlayer >= 2) {
            $("#modal-player").modal('hide');
            Monopoly.nbrPlayer = nbrPlayer;
            Monopoly.createPlayer(nbrPlayer);
        }
    }

};



/* In Readme */
Monopoly.createPlayer = function (nbrPlayer) {

    for (let i = 1; i <= nbrPlayer; i++) {
        if (i == 1) {
            $('<div id="player' + String(i) + '" class="player current-turn"></div>').appendTo('#game .start .content');
        } else {
            $('<div id="player' + String(i) + '" class="player"></div>').appendTo('#game .start .content');
        }
        Monopoly.bankPlayer.set("player" + String(i), Monopoly.moneyAtStart);


    }
    Monopoly.allowToDice = true;
    Monopoly.dice();

};



Monopoly.dice = function () {

    Monopoly.movePlayer(Monopoly.getCurrentPlayer(), 6);

};

/* In Readme */
Monopoly.getCurrentPlayer = function () {
    return $(".player.current-turn");
};

/* In readme */
Monopoly.getClosestCell = function (player) {
    return player.closest(".cell");
};

/* In readme */
Monopoly.getIdCell = function (playerCell) {
    return parseInt(playerCell.attr('id').replace("cell", ""));
}

/* In readme */
Monopoly.getIdPlayer = function (player) {
    return parseInt(player.attr("id").replace("player", ""));
}

/* In reamde */
Monopoly.getNextCell = function (idCell) {
    if (idCell == 40) {
        idCell = 0;
        Monopoly.updateMoneyPlayer(Monopoly.getIdPlayer(Monopoly.getCurrentPlayer()), 200);
    }
    var nextIdCell = idCell + 1;
    return $("#game .cell#cell" + nextIdCell);


}

/*In readme */
Monopoly.movePlayer = function (player, number) {
    Monopoly.allowToDice = false;

    var movePlayerInterval = setInterval(movePLayer, 500);

    function movePLayer() {

        var playerCell = Monopoly.getClosestCell(player);
        var idCell = Monopoly.getIdCell(playerCell);
        var nextCell = Monopoly.getNextCell(idCell);

        nextCell.find('.content').append(player); /*On détécte le premier élément ayant la classe content et on y ajoute le joueur */
        number--;
        if (number == 0) {
            clearInterval(movePlayerInterval);
            playerCell = Monopoly.getClosestCell(player);
            Monopoly.action(player, playerCell);
        }
    }



};

/* In readme */
Monopoly.updateMoneyPlayer = function (playerId, amount) {
    var money = Monopoly.getMoneyPlayer(playerId);
    var newMoney = money + amount;
    Monopoly.bankPlayer.set("player" + String(playerId), newMoney);

};

/*In readme */
Monopoly.getMoneyPlayer = function (playerId) {
    return parseInt(Monopoly.bankPlayer.get("player" + String(playerId)));
};

Monopoly.action = function (player, playerCell) {

    if (playerCell.hasClass("property")) {

        if (playerCell.hasClass("available")) {

           Monopoly.buyProperty(Monopoly.getIdCell(playerCell));

        } else {
            var owner = playerCell.attr("data-owner");
        }
    }



};

Monopoly.calcRent =function(idCell){
    var rent = Monopoly.listCell.get(idCell)["rent"];
    var level = Monopoly.listCell.get(idCell)["level"];
    rent = level*(rent*2);
    return rent;



};

Monopoly.buyProperty = function(idCell){
    $("#modal-buyProperty").modal('show');
    $("#modal-buyProperty .modal-title").html("Acheter la propriété : "+Monopoly.listCell.get(idCell)["name"]);
    $("#modal-buyProperty .buy").html("Prix d'achat : "+Monopoly.listCell.get(idCell)["buy"]+" €");
    $("#modal-buyProperty .rent").html("Prix du loyer : "+Monopoly.listCell.get(idCell)["rent"]+" €");

    $("#modal-buyProperty #button-buyProperty").click(buyProperty);

    function buyProperty(){
        var rent = Monopoly.calcRent(idCell);
        var playerId = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
        
        if(Monopoly.verifbank(playerId,rent)){
            Monopoly.updateMoneyPlayer(playerId,rent);
            Monopoly.listCell.get(idCell)["owner"] = "player"+playerId;
            
        }

    }


    var playerId = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
    
};

Monopoly.verifbank= function(playerId, rent){
    var money = Monopoly.getMoneyPlayer(playerId);
    if (money-rent >= 0) {    
        return true;
    }
    else{
        return false;
    }
}

/* Init the game */
Monopoly.start();

