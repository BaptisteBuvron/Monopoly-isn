/*
* Title : Monopoly Game
* Author : Baptiste Buvron, Yann Le Moal
* Created the : 01/03/2020

*/


var Monopoly = new Object();

Monopoly.moneyAtStart = 1500;
Monopoly.allowToDice = false;

Monopoly.start = function () {
    Monopoly.getNbrPlayer();
};

Monopoly.nbrPlayer = 0;

/* In readme*/
Monopoly.bankPlayer = new Map();

/* */
function propertiesCell(id, name, picture, group, owner, buy, sell, rent, level) {
    this.id = id;
    this.name = name;
    this.picture = picture;
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
Monopoly.listCell.set(2, new propertiesCell(2, "Pays inconnu", "north-korea.png", "Autre", null, 60, 30, 25, 1));
Monopoly.listCell.set(4, new propertiesCell(4, "Corée Du Nord", "north-korea.png", "Autre", null, 60, 30, 25, 1));
Monopoly.listCell.set(6, new propertiesCell(6, "Aéroport", "airport.png", "Aéroport", null, 200, 100, 25, 1));
Monopoly.listCell.set(7, new propertiesCell(7, "Egypte", "egypt.png", "Afrique", null, 100, 50, 30, 1));
Monopoly.listCell.set(9, new propertiesCell(9, "Afrique du Sud", "south-africa.png", "Afrique", null, 100, 50, 30, 1));
Monopoly.listCell.set(10, new propertiesCell(10, "Nigeria", "nigeria.png", "Afrique", null, 100, 50, 30, 1));

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
    Monopoly.movePlayer(Monopoly.getCurrentPlayer(), 8);

};



Monopoly.dice = function () {

    var dice_1 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
    var dice_2 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
    Monopoly.allowToDice = false; /* interdit au joueur de relancer les dés*/

    var total = dice_1 + dice_2;
    Monopoly.movePlayer(Monopoly.getCurrentPlayer(), total);

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
Monopoly.updateMoneyPlayer = function (idPlayer, amount) {
    var money = Monopoly.getMoneyPlayer(idPlayer);
    var newMoney = money + amount;
    Monopoly.bankPlayer.set("player" + String(idPlayer), newMoney);

};

/*In readme */
Monopoly.getMoneyPlayer = function (idPlayer) {
    return parseInt(Monopoly.bankPlayer.get("player" + String(idPlayer)));
};

Monopoly.action = function (player, playerCell) {

    var idPlayer = Monopoly.getIdPlayer(player);
    var idCell = Monopoly.getIdCell(playerCell)
    if (playerCell.hasClass("property")) {

        if (playerCell.hasClass("available")) {

            Monopoly.buyProperty(idCell);

        } else {
            var idOwner = playerCell.attr("data-owner").replace("player", "");
            if (idOwner == idPlayer) {
                /* upgrade case */
            } else {
                Monopoly.payRent(idOwner, idPlayer, idCell)
            }
        }
    }



};

Monopoly.calcRent = function (idCell) {
    var rent = Monopoly.listCell.get(idCell)["rent"];
    var level = Monopoly.listCell.get(idCell)["level"];
    rent = level * (rent * 2);
    return rent;



};

Monopoly.buyProperty = function (idCell) {

    var idPlayer = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
    $("#modal-buyProperty img").attr('src', "pictures/pais/" + Monopoly.listCell.get(idCell)['picture']);
    $("#modal-buyProperty .modal-title").html("Acheter la propriété : " + Monopoly.listCell.get(idCell)["name"]);
    $("#modal-buyProperty #buy").html("Prix d'achat : " + Monopoly.listCell.get(idCell)["buy"] + " €");
    $("#modal-buyProperty #sell").html("Prix de vente: " + Monopoly.listCell.get(idCell)["sell"] + " €");
    $("#modal-buyProperty #money").html("Votre solde : " + Monopoly.getMoneyPlayer(idPlayer) + " €");
    $("#modal-buyProperty #rent").html("Prix du loyer : " + Monopoly.listCell.get(idCell)["rent"] + " €");
    $("#modal-buyProperty").modal('show');

    $("#modal-buyProperty #button-buyProperty").click(buyProperty);
    $("#modal-buyProperty #button-quit").click(function () {
        $("#modal-buyProperty").modal('hide');
        Monopoly.changeTurnPlayer();
    });

    function buyProperty() {
        var price = Monopoly.listCell.get(idCell)['buy'];
        var idPlayer = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
        var cellPlayer = Monopoly.getClosestCell(Monopoly.getCurrentPlayer())
        if (Monopoly.verifbank(idPlayer, price)) {
            Monopoly.updateMoneyPlayer(idPlayer, -price);
            Monopoly.listCell.get(idCell)["owner"] = "player" + idPlayer;

            $(cellPlayer).removeClass("available ");
            $(cellPlayer).attr("data-owner", "player" + String(idPlayer));
            $("#modal-buyProperty").modal('hide');


        } else {
            $("#modal-buyProperty #error").html("Vous n'avez pas assez d'argent dans votre compte en banque !!!");
            setTimeout(timeoutHide, 4000);

        }

        function timeoutHide() {
            $("#modal-buyProperty").modal('hide');
        }

    }


};

Monopoly.payRent = function (idOwner, idPlayer, idCell) {
    var rent = Monopoly.calcRent(idCell);
    if (Monopoly.verifbank(idPlayer), rent) {
        Monopoly.updateMoneyPlayer(idOwner, rent);
        Monopoly.updateMoneyPlayer(idPlayer, -rent);
    } else {
        /* Vente propriété sinon game-over */
    }

};

Monopoly.verifbank = function (idPlayer, amount) {
    var money = Monopoly.getMoneyPlayer(idPlayer);
    if (money - amount >= 0) {
        return true;
    } else {
        return false;
    }
}

Monopoly.changeTurnPlayer = function () {

}

/* Init the game */
Monopoly.start();