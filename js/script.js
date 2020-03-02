var Monopoly = new Object();

Monopoly.getNbrPlayer = function(){
    $( document ).ready(function() {
        $("#modal-player").modal('show');
        $("#modal-player").modal({backdrop: 'static', keyboard: false})  
    });
    $("#button-nbrPlayer").click(function(){
        var nbrPlayer = parseInt($("#nbrPlayer").val());
        if (nbrPlayer > 5 || nbrPlayer <2) {
            Monopoly.getNbrPlayer();
        }
        else{
            $("#modal-player").modal('hide');
            Monopoly.createPlayer(nbrPlayer);
        }
    });

};

Monopoly.createPlayer = function(nbrPlayer){
    console.log(nbrPlayer);
};

Monopoly.getNbrPlayer();

