/*
* Title : Monopoly Game
* Author : Baptiste Buvron,
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



Monopoly.listPropertiesCell = new Map();
Monopoly.listPropertiesCell.set(4,{"name":"test","price":50});
Monopoly.listPropertiesCell.set(6,{"name":"Aéroport"} );
Monopoly.listPropertiesCell.set(9,{"name":"Afrique du Sud"});
Monopoly.listPropertiesCell.set(7,{"name":"Egypte"});
Monopoly.listPropertiesCell.set(10,{"name":"Nigeria"});
Monopoly.listPropertiesCell.set(12,{"name":"Papouasie-Nouvelle-Guinée"});
Monopoly.listPropertiesCell.set(13,{"name":"Compagnie d'électricité"});
Monopoly.listPropertiesCell.set(14,{"name":"Nouvelle-Zélande"});
Monopoly.listPropertiesCell.set(15,{"name":"Australie"});
Monopoly.listPropertiesCell.set(16,{"name":"Aéroport"});
Monopoly.listPropertiesCell.set(17,{"name":"Venezuela"});
Monopoly.listPropertiesCell.set(19,{"name":"Argentine"});
Monopoly.listPropertiesCell.set(20,{"name":"Brésil"});
Monopoly.listPropertiesCell.set(22,{"name":"Inde"});
Monopoly.listPropertiesCell.set(24,{"name":"Japon"});
Monopoly.listPropertiesCell.set(25,{"name":"Chine"});
Monopoly.listPropertiesCell.set(26,{"name":"Aéroport"});
Monopoly.listPropertiesCell.set(27,{"name":"Mexique"});
Monopoly.listPropertiesCell.set(28,{"name":"Canada"});
Monopoly.listPropertiesCell.set(29,{"name":"Compagnie d'eau"});
Monopoly.listPropertiesCell.set(30,{"name":"Etats-Unis"});
Monopoly.listPropertiesCell.set(32,{"name":"Allemagne"});
Monopoly.listPropertiesCell.set(33,{"name":"Grande-Bretagne"});
Monopoly.listPropertiesCell.set(35,{"name":"France"});
Monopoly.listPropertiesCell.set(36,{"name":"Aéroport"});
Monopoly.listPropertiesCell.set(38,{"name":"La Lune"});
Monopoly.listPropertiesCell.set(40,{"name":"La planète Mars"});

console.log(Monopoly.listPropertiesCell);


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

    Monopoly.movePlayer(Monopoly.getCurrentPlayer(), 42);

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
        Monopoly.addMoneyPlayer(Monopoly.getIdPlayer(Monopoly.getCurrentPlayer()), 200);
    }
    var nextIdCell = idCell + 1;
    return $("#game .cell#cell" + nextIdCell);


}

/*In readme */
Monopoly.movePlayer = function (player, number) {
    Monopoly.allowToDice = false;

    var movePlayerInterval = setInterval(movePLayer, 500);

    function movePLayer() {

        var cellPlayer = Monopoly.getClosestCell(player);
        var idCell = Monopoly.getIdCell(cellPlayer);
        var nextCell = Monopoly.getNextCell(idCell);

        nextCell.find('.content').append(player); /*On détécte le premier élément ayant la classe content et on y ajoute le joueur */
        number--;
        if (number == 0) {
            clearInterval(movePlayerInterval);
            cellPlayer = Monopoly.getClosestCell(player);
            Monopoly.action(player, cellPlayer);
        }
    }



};

/* In readme */
Monopoly.addMoneyPlayer = function (playerId, amount) {
    var money = Monopoly.getMoneyPlayer(playerId);
    var newMoney = money + amount;
    Monopoly.bankPlayer.set("player" + String(playerId), newMoney);

};

/*In readme */
Monopoly.getMoneyPlayer = function (playerId) {
    return parseInt(Monopoly.bankPlayer.get("player" + String(playerId)));
};

Monopoly.action = function (player, cellPlayer) {

    if (cellPlayer.hasClass("property")) {

        if (cellPlayer.hasClass("available")) {
            

        } else {
            var owner = cellPlayer.attr("data-owner");
        }
    }



};

/* Init the game */
Monopoly.start();