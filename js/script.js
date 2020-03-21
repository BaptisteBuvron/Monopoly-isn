/*
* Title : Monopoly Game
* Author : Baptiste Buvron, Yann Le Moal
* Created the : 01/03/2020

*/


/* CHANGE TURN PLAYER !!!!!!!!!!!!!!!!!!!!!!!!!! */

var Monopoly = new Object();

Monopoly.moneyAtStart = 1500;
/* in Readme*/

Monopoly.allowToDice = false;
Monopoly.counterDice = 0;

Monopoly.start = function () {
    Monopoly.getNbrPlayer();
};

Monopoly.nbrPlayer = 0;

/* In readme*/
Monopoly.bankPlayer = new Map();

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
Monopoly.listCell = new Map();
Monopoly.listCell.set(2, new propertiesCell("property", "Turkmenistan", "turkmenistan.png", "Autre", null, 60, 30, 2, 50, 0));
Monopoly.listCell.set(4, new propertiesCell("property", "Corée Du Nord", "north-korea.png", "Autre", null, 60, 30, 4, 50, 0));
Monopoly.listCell.set(5, new propertiesCell("tax", "Impots sur le revenu", null, "tax", null, null, null, 200, null));
Monopoly.listCell.set(6, new propertiesCell("property", "Aéroport Paris Charles de Gaulle", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Monopoly.listCell.set(7, new propertiesCell("property", "Egypte", "egypt.png", "Afrique", null, 100, 50, 6, 50, 0));
Monopoly.listCell.set(9, new propertiesCell("property", "Afrique du Sud", "south-africa.png", "Afrique", null, 100, 50, 6, 50, 0));
Monopoly.listCell.set(10, new propertiesCell("property", "Nigeria", "nigeria.png", "Afrique", null, 120, 60, 8, 50, 0));
Monopoly.listCell.set(12, new propertiesCell("property", "Papouasie-Nouvelle-Guinée", "papua-new-guinea.png", "Océanie", null, 140, 70, 10, 100, 0));
Monopoly.listCell.set(13, new propertiesCell("property", "Compagnie de distribution d'électricité", "light.png", "energie", null, 150, 70, null, null, 0));
Monopoly.listCell.set(14, new propertiesCell("property", "Nouvelle-Zélande", "new-zeeland.png", "Océanie", null, 140, 70, 10, 100, 0));
Monopoly.listCell.set(15, new propertiesCell("property", "Australie", "australia.png", "Océanie", null, 160, 80, 12, 100, 0));
Monopoly.listCell.set(16, new propertiesCell("property", "Aéroport New-York", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Monopoly.listCell.set(17, new propertiesCell("property", "Vénézuela", "venezuela.png", "Amérique du Sud", null, 180, 90, 14, 100, 0));
Monopoly.listCell.set(19, new propertiesCell("property", "Argentine", "argentina.png", "Amérique du Sud", null, 180, 90, 14, 100, 0));
Monopoly.listCell.set(20, new propertiesCell("property", "Brésil", "brazil.png", "Amérique du Sud", null, 200, 100, 16, 100, 0));
Monopoly.listCell.set(20, new propertiesCell("property", "Brésil", "brazil.png", "Amérique du Sud", null, 200, 100, 16, 100, 0));
Monopoly.listCell.set(22, new propertiesCell("property", "Inde", "india.png", "Asie", null, 220, 110, 18, 150, 0));
Monopoly.listCell.set(24, new propertiesCell("property", "Japon", "japan.png", "Asie", null, 220, 110, 18, 150, 0));
Monopoly.listCell.set(25, new propertiesCell("property", "Chine", "china.png", "Asie", null, 240, 120, 20, 150, 0));
Monopoly.listCell.set(26, new propertiesCell("property", "Aéroport Los-Angeles", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Monopoly.listCell.set(27, new propertiesCell("property", "Mexique", "mexique.png", "Amérique du Nord", null, 260, 130, 22, 150, 0));
Monopoly.listCell.set(28, new propertiesCell("property", "Canada", "canada.png", "Amérique du Nord", null, 260, 130, 22, 150, 0));
Monopoly.listCell.set(29, new propertiesCell("property", "Compagnie de distribution d'eau", "water.png", "energie", null, 150, 70, null, null, 0));
Monopoly.listCell.set(30, new propertiesCell("property", "Etats-Unis", "usa.png", "Amérique du Nord", null, 280, 140, 24, 150, 0));
Monopoly.listCell.set(32, new propertiesCell("property", "Allemagne", "germany.png", "Europe", null, 300, 150, 26, 200, 0));
Monopoly.listCell.set(33, new propertiesCell("property", "Royaume-Uni", "british.png", "Europe", null, 300, 150, 26, 200, 0));
Monopoly.listCell.set(35, new propertiesCell("property", "France", "france.png", "Europe", null, 320, 160, 28, 200, 0));
Monopoly.listCell.set(36, new propertiesCell("property", "Aéroport de Dubai", "airport.png", "Aéroport", null, 200, 100, 25, null, 0));
Monopoly.listCell.set(38, new propertiesCell("property", "La lune", "moon.png", "Espace", null, 350, 175, 35, 200, 0));
Monopoly.listCell.set(39, new propertiesCell("tax", "Impots de luxe", null, "tax", null, null, null, 100, null));
Monopoly.listCell.set(40, new propertiesCell("property", "Mars", "mars.png", "Espace", null, 400, 200, 50, 200, 0));


Monopoly["Autre"] = [2,4];
Monopoly["Afrique"] = [7,9,10];
Monopoly["Océanie"] = [12,14,15];
Monopoly["Amérique du Sud"] = [17,19,20];
Monopoly["Asie"] = [22,24,25];
Monopoly["Amérique du Nord"] = [27,28,30];
Monopoly["Europe"] = [32,33,35];
Monopoly["Aéroport"] = [5,16,26,36];
Monopoly["energie"] = [13,29];




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
function addChance(name, presentation, action, number) {
    this.name = name;
    this.presentation = presentation;
    this.action = action;
    this.number = number;
};
/* In Readme */
Monopoly.listChance = [];
Monopoly.listChance.push(new addChance("Facture", "Vous n'avez pas payer vos factures ! <br>- Vous devez 50€ à la banque", "pay", -50));
Monopoly.listChance.push(new addChance("Voiture", "Vous avez fait le stop, un particulier vous prend dans sa voiture : <br>- Avancer de 5 cases", "move", 1));
Monopoly.listChance.push(new addChance("Loto", "Vous avez gagné au loto ! <br>- Vous gagnez 50€", "pay", 50));

Monopoly.listCommunityChest = [];
Monopoly.listCommunityChest.push(new addChance("Erreur banque","Erreur de la banque en votre vaveur.<br>- Revevez 200 €","pay",200));



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
    Monopoly.movePlayer(Monopoly.getCurrentPlayer(),30);

};



Monopoly.dice = function () {
    if (Monopoly.allowToDice) {
        var dice_1 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        var dice_2 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        Monopoly.allowToDice = false; /* interdit au joueur de relancer les dés*/

        var total = dice_1 + dice_2;
        Monopoly.movePlayer(Monopoly.getCurrentPlayer(), total);
    }


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
            var idOwner = parseInt(playerCell.attr("data-owner").replace("player", ""));
            if (idOwner == idPlayer) {
                /* upgrade case */
            } else {
                Monopoly.payRent(idOwner, idPlayer, idCell);
            }
        }
    } else if (playerCell.hasClass("chance")) {
        Monopoly.chance("chance");
        
    } else if (playerCell.hasClass("tax")) {
        Monopoly.tax(idCell);
    } else if (playerCell.hasClass("go-to-jail")) {
        Monopoly.sendJail(player);
    } else if (playerCell.hasClass("corner")) {
        Monopoly.changeTurnPlayer();
    }
    else if(playerCell.hasClass("community-chest")){
        Monopoly.chance("community-chest");
    }
    else{
        Monopoly.changeTurnPlayer();

    }




};

/* In readme */
Monopoly.calcRent = function (idCell) {
    var rent = Monopoly.listCell.get(idCell)["rent"];
    var level = Monopoly.listCell.get(idCell)["level"];
    switch (level) {
        case 0:
            rent = rent;
            break;
        case 1:
            rent = rent * 5;
            break;
        case 2:
            rent = rent * 15
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
    return rent;

};

Monopoly.buyProperty = function (idCell) {

    var idPlayer = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
    var click = false; /*Variable pour empecher un double appelle de la fonction buy */
    $("#modal-buyProperty img").attr('src', "pictures/pais/" + Monopoly.listCell.get(idCell)['picture']);
    $("#modal-buyProperty .modal-title").html("Acheter la propriété : " + Monopoly.listCell.get(idCell)["name"]);
    $("#modal-buyProperty #buy").html("Prix d'achat : " + Monopoly.listCell.get(idCell)["buy"] + " €");
    $("#modal-buyProperty #sell").html("Prix de vente: " + Monopoly.listCell.get(idCell)["sell"] + " €");
    $("#modal-buyProperty #money").html("Votre solde : " + Monopoly.getMoneyPlayer(idPlayer) + " €");
    $("#modal-buyProperty #rent").html("Prix du loyer : " + Monopoly.listCell.get(idCell)["rent"] + " €");
    $("#modal-buyProperty").modal('show');

    $("#modal-buyProperty #button-buyProperty").click(function () {
        if (click == false) {
            click = true;
            buyProperty();
        }

    });
    $("#modal-buyProperty #button-quit").click(function () {
        if(click == false){
            click = true;
            $("#modal-buyProperty").modal('hide');
            Monopoly.changeTurnPlayer();
        }
    });

    function buyProperty() {
        var price = Monopoly.listCell.get(idCell)['buy'];
        var idPlayer = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
        var cellPlayer = Monopoly.getClosestCell(Monopoly.getCurrentPlayer())
        if (Monopoly.verifBank(idPlayer, price)) {
            Monopoly.updateMoneyPlayer(idPlayer, -price);
            Monopoly.listCell.get(idCell)["owner"] = "player" + idPlayer;
            $(cellPlayer).removeClass("available ");
            $(cellPlayer).attr("data-owner", "player" + String(idPlayer));
            setTimeout(hideModal,2000);

        } else {
            $("#modal-buyProperty #error").html("Vous n'avez pas assez d'argent dans votre compte en banque !");
            setTimeout(hideModal,2000);

        }

    }

    function hideModal(){
        $("#modal-buyProperty").modal("hide");
        Monopoly.changeTurnPlayer();
    }


};

/* In readme*/
Monopoly.payRent = function (idOwner, idPlayer, idCell) {
    var rent = Monopoly.calcRent(idCell);
    if (Monopoly.verifBank(idPlayer), rent) {
        Monopoly.updateMoneyPlayer(idOwner, rent);
        Monopoly.updateMoneyPlayer(idPlayer, -rent);
    } else {
        Monopoly.sellProperty(rent);
    }
    Monopoly.changeTurnPlayer();

};

/*In readme */
Monopoly.verifBank = function (idPlayer, amount) {
    var money = Monopoly.getMoneyPlayer(idPlayer);
    if (money - amount >= 0) {
        return true;
    } else {
        return false;
    }
}


Monopoly.changeTurnPlayer = function () {
    var player = Monopoly.getCurrentPlayer();
    var idPlayer = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
    var idNextPlayer;
    if (Monopoly.counterDice > 0) {
        if (Monopoly.counterDice == 3) {
            Monopoly.sendJail(player);
            Monopoly.counterDice = 0;
            Monopoly.changeTurnPlayer();
        }
    }else {
        if (idPlayer == Monopoly.nbrPlayer) {
            idNextPlayer = 1;
        } else {
            idNextPlayer = idPlayer + 1;
        }
        $(player).removeClass("current-turn");
        player = $("#player" + String(idNextPlayer));
        player.addClass("current-turn");

        if (player.hasClass("jailed")) {
            player = Monopoly.getCurrentPlayer();
            var timeJail = $(player).attr("data-jail");
            timeJail = timeJail - 1;
            if (timeJail == 0) {
                $(player).removeClass("jailed");
                $(player).removeAttr("data-jail");
                Monopoly.changeTurnPlayer();
            } else {
                $(player).attr("data-jail", timeJail);
                Monopoly.tryLeaveJail();
            }
        }
        else{
            Monopoly.allowToDice = true;
            Monopoly.dice();
        }


    }


}

Monopoly.sendJail = function (player) {
    $("#game .jail ").find('.content').append(player);
    $(player).attr("data-jail", 3);
    $(player).addClass("jailed");
    Monopoly.changeTurnPlayer();


}

Monopoly.chance = function (type) {
    if(type == "chance"){
        var len = Monopoly.listChance.length;
        var object = Monopoly.listChance;
        

    }
    else if(type == "community-chest"){
        var len = Monopoly.listCommunityChest.length;
        var object = Monopoly.listCommunityChest;
        
    }
    
    var click = false;
    var random = Math.floor(Math.random() * (len-1)); /*Nombre entre [0, 1[ * len(non compris) */
    
    var chance = object[random];
    var player = Monopoly.getCurrentPlayer();
    var idPlayer = Monopoly.getIdPlayer(player);

    $("#modal-chance .modal-title").html("Chance : ");
    $("#modal-chance #name").html("Type : " + chance["name"]);
    $("#modal-chance #presentation").html(chance["presentation"]);
    $("#modal-chance #money").html("Votre solde : " + Monopoly.getMoneyPlayer(idPlayer) + " €");
    $("#modal-chance #button-validate").html("OK");
    $("#modal-chance").modal('show');
    $("#modal-chance #button-validate").click(function(){
        if(click == false){
            click = true;
            chanceAction();
        }
    });

    function chanceAction() {
        switch (chance["action"]) {
            case "pay":
                if (Monopoly.verifBank(idPlayer, chance["number"])) {
                    Monopoly.updateMoneyPlayer(idPlayer, chance["number"]);
                    $("#modal-chance #money").html("Votre solde : " + Monopoly.getMoneyPlayer(idPlayer) + " €");
                } else {
                    $("#modal-chance #error").html("Vous n'avez pas assez d'argent dans votre compte en banque.<br>Des propriétés dont vous êtes le propriétaire vous être vendu.");
                    Monopoly.sellProperty(chance["number"]);
                }
                Monopoly.changeTurnPlayer();
                $("#modal-chance").modal('hide');


                break;

            case "move":
                $("#modal-chance").modal('hide');
                Monopoly.movePlayer(player, chance["number"]);
                break;
        }
    }



}

Monopoly.sellProperty = function (amount) {

}

Monopoly.tax = function (idCell) {
    var tax = Monopoly.listCell.get(idCell);
    var idPlayer = Monopoly.getIdPlayer(Monopoly.getCurrentPlayer());
    var click = false;
    $("#modal-chance .modal-title").html("Taxe : ");
    $("#modal-chance #name").html("Type : " + tax["name"]);
    $("#modal-chance #action").html("Vous devez payer : " + tax["rent"] + " €");
    $("#modal-chance #money").html("Votre solde : " + Monopoly.getMoneyPlayer(idPlayer) + " €");
    $("#modal-chance #button-validate").html("Payer");
    $("#modal-chance").modal('show');

    $("#modal-chance #button-validate").click(function(){
        if(click == false){
            taxAction();
            click = true;
        }
    });

    function taxAction() {
        if (Monopoly.verifBank(idPlayer, tax["rent"])) {
            Monopoly.updateMoneyPlayer(idPlayer, -tax["rent"]);
            $("#modal-chance #money").html("Votre solde : " + Monopoly.getMoneyPlayer(idPlayer) + " €");
        } else {
            $("#modal-chance #error").html("Vous n'avez pas assez d'argent dans votre compte en banque.<br>Des propriétés dont vous êtes le propriétaire vont être vendu.");
            sleep(2000);
            Monopoly.sellProperty(tax["rent"]);
        }
        $("#modal-chance").modal('hide');
        Monopoly.changeTurnPlayer();



    }
}

Monopoly.tryLeaveJail = function(){
    var player = Monopoly.getCurrentPlayer();
    var idPlayer = Monopoly.getIdPlayer(player);
    var click = false;
    $("#modal-tryLeaveJail .modal-title").html("Prison : ");
    $("#modal-tryLeaveJail").modal('show');
    $("#modal-tryLeaveJail #button-buyJail").click(function(){
        if(click == false){
            click = true;
            buyJail();
        }
    });

    $("#modal-tryLeaveJail #button-Dice").click(function(){
        if(click == false){
            click = true;
            diceJail();
        }
    });

    $("#modal-tryLeaveJail #button-quit").click(function(){
        if(click == false){
            click = true;
            $("#modal-tryLeaveJail").modal('hide');
            Monopoly.changeTurnPlayer();
        }
    });

    function buyJail(){
        if(Monopoly.verifBank(idPlayer, 50)){
            Monopoly.updateMoneyPlayer(player,-50);
            $(player).removeClass("jailed");
            $(player).removeAttr("data-jail");
            $("#modal-tryLeaveJail #info").html("Vous avez corrompu la prison. Vous sortez de prison ! ");
            setTimeout(hideModal,2000);

        }else{
            $("#modal-tryLeaveJail #info").html("Vous n'avez pas assez d'argent.");
            click = true;
        }
    }

    function diceJail(){
        var dice_1 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        var dice_2 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        if(dice_1 == dice_2){
            $(player).removeClass("jailed");
            $(player).removeAttr("data-jail");
            $("#modal-tryLeaveJail #info").html("Vous avez fait un double : Vous sortez de prison !");
            setTimeout(hideModal,2000);
        }
        else{
            $("#modal-tryLeaveJail #info").html("Vous n'avez pas fait un double : Vous restez en prison !");
            setTimeout(hideModal,2000);
            
        }
    }

    function hideModal(){
        $("#modal-tryLeaveJail").modal("hide");
        Monopoly.changeTurnPlayer();
    }
};

/* Init the game */
Monopoly.start();

