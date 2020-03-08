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
            $('<div id="player' + String(i) + '" class="player current-turn" data-money=' + String(Monopoly.moneyAtStart) + '></div>').appendTo('#game .start .content');
        } else {
            $('<div id="player' + String(i) + '" class="player" data-money=' + String(Monopoly.moneyAtStart) + '></div>').appendTo('#game .start .content');
        }

    }
    Monopoly.allowToDice = true;
    Monopoly.dice();

};



Monopoly.dice = function () {

    Monopoly.movePlayer(Monopoly.getCurrentPlayer(), 10);

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
Monopoly.getNextCell = function (idCell) {
    if (idCell == 40) {
        idCell = 0;
        Monopoly.addMoneyPlayer(Monopoly.getCurrentPlayer(), 200);
    }
    var nextIdCell = idCell + 1;
    return $("#game .cell#cell" + nextIdCell);


}

/*In redme */
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
            Monopoly.action(player,cellPlayer);
        }
    }



};

/*In Readme */
Monopoly.addMoneyPlayer = function (player, amount) {
    var money = Monopoly.getMoneyPlayer(player);
    var newMoney = money + amount;
    player.attr("data-money", newMoney);
};

/*In Readme */
Monopoly.getMoneyPlayer = function (player) {
    return parseInt(player.attr("data-money"));
};

Monopoly.action = function(player, cellPlayer){
    
    if (cellPlayer.hasClass("property")) {
        
        if (cellPlayer.hasClass("available")) {
            
        }
        else{
            var owner = cellPlayer.attr("data-owner");
        }
    }
};

/* In Readme */
Monopoly.dieroll = function (random,demorand) {
    <script type="text/javascript">
        function demorand() {
		var a=0;
		a=Math.random();
		document.form1.demo1.value=a;
		document.form1.demo2.value=6*a;
		document.form1.demo3.value=Math.ceil(6*a);
		}
    </script>
};

/* Init the game */
Monopoly.start();