/*
* Title : Tour du monde en 40 jours
* Author : Baptiste Buvron, Yann Le Moal
* Created the : 01/03/2020

*/


/* CHANGE TURN PLAYER !!!!!!!!!!!!!!!!!!!!!!!!!! */

var Game = new Object();

Game.moneyAtStart = 1500;
/* in Readme*/

Game.allowToDice = false;
Game.valueDice = null;
Game.counterDice = 0;
Game.doubleDice = false;

Game.start = function () {
    Game.getNbrPlayer();
};

Game.nbrPlayer = 0;

/* In readme*/
Game.bankPlayer = new Object();

/* In readme*/
function propertiesCell(type, name, picture, group, owner, buy, sell, rent, upgradePrice, level) {
    this.type = type;
    this.name = name;
    this.picture = picture;
    this.group = group;
    this.owner = owner;
    this.buy = buy;
    this.sell = sell;
    this.rent = rent;
    this.upgradePrice = upgradePrice;
    this.level = level;

}




/* In readme*/
Game.listCell = new Map();
Game.listCell.set(2, new propertiesCell("property", "Turkmenistan", "turkmenistan.png", "Autre", null, 60, 30, 2, 50, 0));
Game.listCell.set(4, new propertiesCell("property", "Corée Du Nord", "north-korea.png", "Autre", null, 60, 30, 4, 50, 0));
Game.listCell.set(5, new propertiesCell("tax", "Impots sur le revenu", null, "tax", null, null, null, 200, null));
Game.listCell.set(6, new propertiesCell("property", "Aéroport Paris Charles de Gaulle", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Game.listCell.set(7, new propertiesCell("property", "Egypte", "egypt.png", "Afrique", null, 100, 50, 6, 50, 0));
Game.listCell.set(9, new propertiesCell("property", "Afrique du Sud", "south-africa.png", "Afrique", null, 100, 50, 6, 50, 0));
Game.listCell.set(10, new propertiesCell("property", "Nigeria", "nigeria.png", "Afrique", null, 120, 60, 8, 50, 0));
Game.listCell.set(12, new propertiesCell("property", "Papouasie-Nouvelle-Guinée", "papua-new-guinea.png", "Océanie", null, 140, 70, 10, 100, 0));
Game.listCell.set(13, new propertiesCell("property", "Compagnie de distribution d'électricité", "light.png", "energie", null, 150, 70, null, null, 0));
Game.listCell.set(14, new propertiesCell("property", "Nouvelle-Zélande", "new-zeeland.png", "Océanie", null, 140, 70, 10, 100, 0));
Game.listCell.set(15, new propertiesCell("property", "Australie", "australia.png", "Océanie", null, 160, 80, 12, 100, 0));
Game.listCell.set(16, new propertiesCell("property", "Aéroport New-York", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Game.listCell.set(17, new propertiesCell("property", "Vénézuela", "venezuela.png", "Amérique du Sud", null, 180, 90, 14, 100, 0));
Game.listCell.set(19, new propertiesCell("property", "Argentine", "argentina.png", "Amérique du Sud", null, 180, 90, 14, 100, 0));
Game.listCell.set(20, new propertiesCell("property", "Brésil", "brazil.png", "Amérique du Sud", null, 200, 100, 16, 100, 0));
Game.listCell.set(20, new propertiesCell("property", "Brésil", "brazil.png", "Amérique du Sud", null, 200, 100, 16, 100, 0));
Game.listCell.set(22, new propertiesCell("property", "Inde", "india.png", "Asie", null, 220, 110, 18, 150, 0));
Game.listCell.set(24, new propertiesCell("property", "Japon", "japan.png", "Asie", null, 220, 110, 18, 150, 0));
Game.listCell.set(25, new propertiesCell("property", "Chine", "china.png", "Asie", null, 240, 120, 20, 150, 0));
Game.listCell.set(26, new propertiesCell("property", "Aéroport Los-Angeles", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Game.listCell.set(27, new propertiesCell("property", "Mexique", "mexique.png", "Amérique du Nord", null, 260, 130, 22, 150, 0));
Game.listCell.set(28, new propertiesCell("property", "Canada", "canada.png", "Amérique du Nord", null, 260, 130, 22, 150, 0));
Game.listCell.set(29, new propertiesCell("property", "Compagnie de distribution d'eau", "water.png", "energie", null, 150, 70, null, null, 0));
Game.listCell.set(30, new propertiesCell("property", "Etats-Unis", "usa.png", "Amérique du Nord", null, 280, 140, 24, 150, 0));
Game.listCell.set(32, new propertiesCell("property", "Allemagne", "germany.png", "Europe", null, 300, 150, 26, 200, 0));
Game.listCell.set(33, new propertiesCell("property", "Royaume-Uni", "british.png", "Europe", null, 300, 150, 26, 200, 0));
Game.listCell.set(35, new propertiesCell("property", "France", "france.png", "Europe", null, 320, 160, 28, 200, 0));
Game.listCell.set(36, new propertiesCell("property", "Aéroport de Dubai", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Game.listCell.set(38, new propertiesCell("property", "La lune", "moon.png", "Espace", null, 350, 175, 35, 200, 0));
Game.listCell.set(39, new propertiesCell("tax", "Impots de luxe", null, "tax", null, null, null, 100, null));
Game.listCell.set(40, new propertiesCell("property", "Mars", "mars.png", "Espace", null, 400, 200, 50, 200, 0));


Game["Autre"] = [2, 4];
Game["Afrique"] = [7, 9, 10];
Game["Océanie"] = [12, 14, 15];
Game["Amérique du Sud"] = [17, 19, 20];
Game["Asie"] = [22, 24, 25];
Game["Amérique du Nord"] = [27, 28, 30];
Game["Europe"] = [32, 33, 35];
Game["Aéroport"] = [6, 16, 26, 36];
Game["energie"] = [13, 29];




/*
Game.listCell.set(12,{"name":"Papouasie-Nouvelle-Guinée"});
Game.listCell.set(13,{"name":"Compagnie d'électricité"});
Game.listCell.set(14,{"name":"Nouvelle-Zélande"});
Game.listCell.set(15,{"name":"Australie"});
Game.listCell.set(16,{"name":"Aéroport"});
Game.listCell.set(17,{"name":"Venezuela"});
Game.listCell.set(19,{"name":"Argentine"});
Game.listCell.set(20,{"name":"Brésil"});
Game.listCell.set(22,{"name":"Inde"});
Game.listCell.set(24,{"name":"Japon"});
Game.listCell.set(25,{"name":"Chine"});
Game.listCell.set(26,{"name":"Aéroport"});
Game.listCell.set(27,{"name":"Mexique"});
Game.listCell.set(28,{"name":"Canada"});
Game.listCell.set(29,{"name":"Compagnie d'eau"});
Game.listCell.set(30,{"name":"Etats-Unis"});
Game.listCell.set(32,{"name":"Allemagne"});
Game.listCell.set(33,{"name":"Grande-Bretagne"});
Game.listCell.set(35,{"name":"France"});
Game.listCell.set(36,{"name":"Aéroport"});
Game.listCell.set(38,{"name":"La Lune"});
Game.listCell.set(40,{"name":"La planète Mars"});

*/

/* In Readme */
function addChance(name, presentation, action, number) {
    this.name = name;
    this.presentation = presentation;
    this.action = action;
    this.number = number;
};
/* In Readme */
Game.listChance = [];
Game.listChance.push(new addChance("Facture", "Vous n'avez pas payer vos factures ! <br>- Vous devez 50€ à la banque", "pay", -50));
Game.listChance.push(new addChance("Voiture", "Vous avez fait le stop, un particulier vous prend dans sa voiture : <br>- Avancer de 5 cases", "move", 5));
Game.listChance.push(new addChance("Loto", "Vous avez gagné au loto ! <br>- Vous gagnez 50€", "pay", 50));

Game.listCommunityChest = [];
Game.listCommunityChest.push(new addChance("Erreur banque", "Erreur de la banque en votre vaveur.<br>- Revevez 200 €", "pay", 200));



/* In Readme */
Game.getNbrPlayer = function () {
    $(document).ready(function () {
        $("#modal-player").modal('show');

    });

    $("#button-nbrPlayer").click(getNbrPlayer);




    function getNbrPlayer() {
        var nbrPlayer = 0;
        nbrPlayer = parseInt($("#nbrPlayer").val());
        if (nbrPlayer <= 5 && nbrPlayer >= 2) {
            $("#modal-player").modal('hide');
            Game.nbrPlayer = nbrPlayer;
            Game.createPlayer(nbrPlayer);
        }
    }

};



/* In Readme */
Game.createPlayer = function (nbrPlayer) {

    for (let i = 1; i <= nbrPlayer; i++) {
        if (i == 1) {
            $('<div id="player' + String(i) + '" class="player current-turn"></div>').appendTo('#game .start .content');
        } else {
            $('<div id="player' + String(i) + '" class="player"></div>').appendTo('#game .start .content');
        }
        Game.bankPlayer["player"+ String(i)] = Game.moneyAtStart;


    }
    Game.allowToDice = true;

};



Game.dice = function () {
    if (Game.allowToDice) {
        var dice_1 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        var dice_2 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        Game.allowToDice = false; /* interdit au joueur de relancer les dés*/

        var total = dice_1 + dice_2;
        total = parseInt(total); /* On verifie que total est un entier */
        Game.valueDice = total;
        if (dice_1 == dice_2) {
            Game.counterDice += 1;
            Game.doubleDice = true;
        }

        var url = "pictures/dice/dice_" + String(dice_1) + ".gif";
        $('#game #dice_1').css({
            "background-image": "url('" + url + "')"
        });
        url = "pictures/dice/dice_" + String(dice_2) + ".gif";
        $('#game #dice_2').css({
            "background-image": "url('" + url + "')"
        });

        Game.movePlayer(Game.getCurrentPlayer(), total);
    }


};

/* In Readme */
Game.getCurrentPlayer = function () {
    return $(".player.current-turn");
};

/* In readme */
Game.getClosestCell = function (player) {
    return player.closest(".cell");
};

/* In readme */
Game.getIdCell = function (playerCell) {
    return parseInt(playerCell.attr('id').replace("cell", ""));
}

/* In readme */
Game.getIdPlayer = function (player) {
    return parseInt(player.attr("id").replace("player", ""));
}

/* In reamde */
Game.getNextCell = function (idCell) {
    if (idCell == 40) {
        idCell = 0;
        Game.updateMoneyPlayer(Game.getIdPlayer(Game.getCurrentPlayer()), 200);
    }
    var nextIdCell = idCell + 1;
    return $("#game .cell#cell" + nextIdCell);


}

/*In readme */
Game.movePlayer = function (player, number) {
    Game.allowToDice = false;

    var movePlayerInterval = setInterval(movePLayer, 500);

    function movePLayer() {

        var playerCell = Game.getClosestCell(player);
        var idCell = Game.getIdCell(playerCell);
        var nextCell = Game.getNextCell(idCell);

        nextCell.find('.content').append(player); /*On détécte le premier élément ayant la classe content et on y ajoute le joueur */
        number--;
        if (number == 0) {
            clearInterval(movePlayerInterval);
            playerCell = Game.getClosestCell(player);
            Game.action(player, playerCell);
        }
    }



};

/* In readme */
Game.updateMoneyPlayer = function (idPlayer, amount) {
    var money = Game.getMoneyPlayer(idPlayer);
    var newMoney = money + amount;
    Game.bankPlayer["player" + String(idPlayer)] =  newMoney;

};

/*In readme */
Game.getMoneyPlayer = function (idPlayer) {
    return parseInt(Game.bankPlayer["player" + String(idPlayer)]);
};

Game.action = function (player, playerCell) {
    var idPlayer = Game.getIdPlayer(player);
    var idCell = Game.getIdCell(playerCell)
    if (playerCell.hasClass("property")) {

        if (playerCell.hasClass("available")) {

            Game.buyProperty(idCell);

        } else {
            var idOwner = parseInt(playerCell.attr("data-owner").replace("player", ""));
            if (idOwner == idPlayer) {
                Game.changeTurnPlayer();
            } else {
                Game.payRent(idOwner, idPlayer, idCell);
            }
        }
    } else if (playerCell.hasClass("chance")) {
        Game.chance("chance");

    } else if (playerCell.hasClass("tax")) {
        Game.tax(idCell);
    } else if (playerCell.hasClass("go-to-jail")) {
        Game.sendJail(player);
    } else if (playerCell.hasClass("corner")) {
        Game.changeTurnPlayer();
    } else if (playerCell.hasClass("community-chest")) {
        Game.chance("community-chest");
    } else {
        Game.changeTurnPlayer();

    }




};


Game.calcRent = function (idCell) {
    var rent = Game.listCell.get(idCell)["rent"];
    var level = Game.listCell.get(idCell)["level"];
    switch (level) {
        case 0:
            rent = rent;
            break;
        case 1:
            rent = rent * 5;
            break;
        case 2:
            rent = rent * 15;
            break;
        case 3:
            rent = rent * 45;
            break;
        case 4:
            rent = rent * 80;
            break;
        case 5:
            rent = rent * 125;
            break;
    }

    var currentCell = Game.getClosestCell(Game.getCurrentPlayer());
    var idOwner = parseInt(currentCell.attr("data-owner").replace("player", ""));
    if (currentCell.hasClass("airport")) {
        level = 0;
        for (let i = 0; i < Game["Aéroport"].length; i++) {
            if ($("#game .cell#cell" + String(Game["Aéroport"][i])).attr("data-owner").replace("player", "") == idOwner) {
                level += 1;
            }
        
            
            
        }
        switch (level) {
            case 1:
                rent = 25;
                break;
            case 2:
                rent = 50;
                break;
            case 3:
                rent = 100;
                break;
            case 4:
                rent = 200;
                break;
        }

    } else if (currentCell.hasClass("energy")) {
        level = 0;
        for (let i = 0; i < Game["energie"].length; i++) {
            if ($("#cell" + Game["energie"][i]).attr("data-owner").replace("player", "") == idOwner) {
                level += 1;
            }
        }
        switch (level) {
            case 1:
                rent = 4 * Game.valueDice;
                break;
            case 2:
                rent = 10 * Game.valueDice;
                break;
        }
    }

    return rent;

};

Game.buyProperty = function (idCell) {
    var rent = Game.calcRent(idCell);
    var idPlayer = Game.getIdPlayer(Game.getCurrentPlayer());
    var click = false; /*Variable pour empecher un double appelle de la fonction buy */
    $("#modal-buyProperty img").attr('src', "pictures/pais/" + Game.listCell.get(idCell)['picture']);
    $("#modal-buyProperty .modal-title").html("Acheter la propriété : " + Game.listCell.get(idCell)["name"]);
    $("#modal-buyProperty #buy").html("Prix d'achat : " + Game.listCell.get(idCell)["buy"] + " €");
    $("#modal-buyProperty #sell").html("Prix de vente: " + Game.listCell.get(idCell)["sell"] + " €");
    $("#modal-buyProperty #money").html("Votre solde : " + Game.getMoneyPlayer(idPlayer) + " €");
    $("#modal-buyProperty #rent").html("Prix du loyer : " + rent + " €");
    $("#modal-buyProperty").modal('show');

    $("#modal-buyProperty #button-buyProperty").click(function () {
        if (click == false) {
            click = true;
            buyProperty();
        }

    });
    $("#modal-buyProperty #button-quit").click(function () {
        if (click == false) {
            click = true;
            $("#modal-buyProperty").modal('hide');
            Game.changeTurnPlayer();
        }
    });

    function buyProperty() {
        var price = Game.listCell.get(idCell)['buy'];
        var idPlayer = Game.getIdPlayer(Game.getCurrentPlayer());
        var cellPlayer = Game.getClosestCell(Game.getCurrentPlayer())
        if (Game.verifBank(idPlayer, price)) {
            Game.updateMoneyPlayer(idPlayer, -price);
            Game.listCell.get(idCell)["owner"] = "player" + idPlayer;
            $(cellPlayer).removeClass("available ");
            $(cellPlayer).attr("data-owner", "player" + String(idPlayer));
            $("#modal-buyProperty").modal("hide");
            Game.changeTurnPlayer();

        } else {
            $("#modal-buyProperty #error").html("Vous n'avez pas assez d'argent dans votre compte en banque !");
            setTimeout(hideModal, 2000);

        }

    }

    function hideModal() {
        $("#modal-buyProperty").modal("hide");
        Game.changeTurnPlayer();
    }


};

/* In readme*/
Game.payRent = function (idOwner, idPlayer, idCell) {
    var rent = Game.calcRent(idCell);

    var click = false; /*Variable pour empecher un double appelle de la fonction buy */
    $("#modal-payRent img").attr('src', "pictures/pais/" + Game.listCell.get(idCell)['picture']);
    $("#modal-payRent .modal-title").html("Acheter la propriété : " + Game.listCell.get(idCell)["name"]);
    $("#modal-payRent #money").html("Votre solde : " + Game.getMoneyPlayer(idPlayer) + " €");
    $("#modal-payRent #rent").html("Prix du loyer : " + rent + " €");
    $("#modal-payRent #info").html("");
    $("#modal-payRent").modal('show');


    $("#modal-payRent #button-payRent").click(function () {
        if (click == false) {
            click = true;
            payRent();
        }
    });

    function payRent() {
        if (Game.verifBank(idPlayer), rent) {
            Game.updateMoneyPlayer(idOwner, rent);
            Game.updateMoneyPlayer(idPlayer, -rent);
            $("#modal-payRent #info").html("Vous avez payer le loyer de " + rent + " €");
            setTimeout(hideModal, 2000);
        } else {
            /*Game.sellProperty(rent);*/
            $("#modal-payRent #info").html("Vous n'avez pas assez d'argent.");
            setTimeout(hideModal, 2000);
        }
    }

    function hideModal() {
        $("#modal-payRent").modal('hide');
        Game.changeTurnPlayer();
    }



};

/*In readme */
Game.verifBank = function (idPlayer, amount) {
    var money = Game.getMoneyPlayer(idPlayer);
    if (money - amount >= 0) {
        return true;
    } else {
        return false;
    }
}


Game.changeTurnPlayer = function () {
    var player = Game.getCurrentPlayer();
    var idPlayer = Game.getIdPlayer(Game.getCurrentPlayer());
    var idNextPlayer;
    if (Game.doubleDice) {
        if (Game.counterDice == 3) {
            Game.sendJail(player);
            Game.counterDice = 0;
            Game.changeTurnPlayer();
        } else if (Game.counterDice > 0) {
            Game.allowToDice = true;

        }
        Game.doubleDice = false;
    } else {
        Game.counterDice = 0;
        if (idPlayer == Game.nbrPlayer) {
            idNextPlayer = 1;
        } else {
            idNextPlayer = idPlayer + 1;
        }
        $(player).removeClass("current-turn");
        player = $("#player" + String(idNextPlayer));
        player.addClass("current-turn");

        if (player.hasClass("jailed")) {
            player = Game.getCurrentPlayer();
            var timeJail = $(player).attr("data-jail");
            timeJail = timeJail - 1;
            if (timeJail == 0) {
                $(player).removeClass("jailed");
                $(player).removeAttr("data-jail");
                Game.changeTurnPlayer();
            } else {
                $(player).attr("data-jail", timeJail);
                Game.tryLeaveJail();
            }
        } else {
            Game.allowToDice = true;
        }


    }


}

Game.sendJail = function (player) {
    $("#game .jail ").find('.content').append(player);
    $(player).attr("data-jail", 3);
    $(player).addClass("jailed");
    Game.changeTurnPlayer();


}

Game.chance = function (type) {
    if (type == "chance") {
        var len = Game.listChance.length;
        var object = Game.listChance;


    } else if (type == "community-chest") {
        var len = Game.listCommunityChest.length;
        var object = Game.listCommunityChest;

    }

    var click = false;
    var random = Math.floor(Math.random() * (len - 1)); /*Nombre entre [0, 1[ * len(non compris) */

    var chance = object[random];
    var player = Game.getCurrentPlayer();
    var idPlayer = Game.getIdPlayer(player);

    $("#modal-chance .modal-title").html("Chance : ");
    $("#modal-chance #name").html("Type : " + chance["name"]);
    $("#modal-chance #presentation").html(chance["presentation"]);
    $("#modal-chance #action").html("");
    $("#modal-chance #money").html("Votre solde : " + Game.getMoneyPlayer(idPlayer) + " €");
    $("#modal-chance #button-validate").html("OK");
    $("#modal-chance").modal('show');
    $("#modal-chance #button-validate").click(function () {
        if (click == false) {
            click = true;
            chanceAction();
        }
    });

    function chanceAction() {
        switch (chance["action"]) {
            case "pay":
                if (Game.verifBank(idPlayer, chance["number"])) {
                    Game.updateMoneyPlayer(idPlayer, chance["number"]);
                    $("#modal-chance #money").html("Votre solde : " + Game.getMoneyPlayer(idPlayer) + " €");
                } else {
                    $("#modal-chance #error").html("Vous n'avez pas assez d'argent dans votre compte en banque.<br>Des propriétés dont vous êtes le propriétaire vous être vendu.");
                    Game.sellProperty(chance["number"]);
                }
                Game.changeTurnPlayer();
                $("#modal-chance").modal('hide');


                break;

            case "move":
                $("#modal-chance").modal('hide');
                Game.movePlayer(player, chance["number"]);
                break;
        }
    }



}

Game.sellProperty = function (amount) {
    var listIdCell = [];
    var player = Game.getCurrentPlayer();
    var idPlayer = Game.getIdPlayer(player);
    Game.listCell.forEach(function (value, key, map) {
        if (value["owner"] == "player" + String(idPlayer)) {
            listIdCell.push(key);
        }

    });
}

Game.tax = function (idCell) {
    var tax = Game.listCell.get(idCell);
    var idPlayer = Game.getIdPlayer(Game.getCurrentPlayer());
    var click = false;
    $("#modal-chance .modal-title").html("Taxe : ");
    $("#modal-chance #name").html("Type : " + tax["name"]);
    $("#modal-chance #presentation").html("");
    $("#modal-chance #action").html("Vous devez payer : " + tax["rent"] + " €");
    $("#modal-chance #money").html("Votre solde : " + Game.getMoneyPlayer(idPlayer) + " €");
    $("#modal-chance #button-validate").html("Payer");
    $("#modal-chance").modal('show');

    $("#modal-chance #button-validate").click(function () {
        if (click == false) {
            taxAction();
            click = true;
        }
    });

    function taxAction() {
        if (Game.verifBank(idPlayer, tax["rent"])) {
            Game.updateMoneyPlayer(idPlayer, -tax["rent"]);
            $("#modal-chance #money").html("Votre solde : " + Game.getMoneyPlayer(idPlayer) + " €");
        } else {
            $("#modal-chance #error").html("Vous n'avez pas assez d'argent dans votre compte en banque.<br>Des propriétés dont vous êtes le propriétaire vont être vendu.");
            sleep(2000);
            Game.sellProperty(tax["rent"]);
        }
        $("#modal-chance").modal('hide');
        Game.changeTurnPlayer();



    }
}

Game.tryLeaveJail = function () {
    var player = Game.getCurrentPlayer();
    var idPlayer = Game.getIdPlayer(player);
    var click = false;
    $("#modal-tryLeaveJail .modal-title").html("Prison : ");
    $("#modal-tryLeaveJail").modal('show');
    $("#modal-tryLeaveJail #button-buyJail").click(function () {
        if (click == false) {
            click = true;
            buyJail();
        }
    });

    $("#modal-tryLeaveJail #button-Dice").click(function () {
        if (click == false) {
            click = true;
            diceJail();
        }
    });

    $("#modal-tryLeaveJail #button-quit").click(function () {
        if (click == false) {
            click = true;
            $("#modal-tryLeaveJail").modal('hide');
            Game.changeTurnPlayer();
        }
    });

    function buyJail() {
        if (Game.verifBank(idPlayer, 50)) {
            Game.updateMoneyPlayer(idPlayer, -50);
            $(player).removeClass("jailed");
            $(player).removeAttr("data-jail");
            $("#modal-tryLeaveJail #info").html("Vous avez corrompu la prison. Vous sortez de prison ! ");
            setTimeout(hideModal, 2000);

        } else {
            $("#modal-tryLeaveJail #info").html("Vous n'avez pas assez d'argent.");
            click = true;
        }
    }

    function diceJail() {
        var dice_1 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        var dice_2 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        if (dice_1 == dice_2) {
            $(player).removeClass("jailed");
            $(player).removeAttr("data-jail");
            $("#modal-tryLeaveJail #info").html("Vous avez fait un double : Vous sortez de prison !");
            setTimeout(hideModal, 2000);
        } else {
            $("#modal-tryLeaveJail #info").html("Vous n'avez pas fait un double : Vous restez en prison !");
            setTimeout(hideModal, 2000);

        }
    }

    function hideModal() {
        $("#modal-tryLeaveJail").modal("hide");
        Game.changeTurnPlayer();
    }
};

/* Init the game */
Game.start();

$(".dice").click(function () {
    if (Game.allowToDice) {
        Game.dice();
    }
});