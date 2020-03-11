# Jeu du Monopoly
- [Le jeu](https://baptistebuvron.github.io/Monopoly-isn/index.html)
- [Le Github du projet](https://github.com/BaptisteBuvron/Monopoly-isn)

# Sommaire
1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript](#javascript)

# HTML

Le plateau de jeu est créer entièrement en html et css : 

Chaque case est représenté par une balise `div`.

Chaque `div` peut comporter les classes suivantes:
- `top, left, right, bottom, void, cell` en fonction de leur position
- `property, taxe, community-chest, prison, start, free-parking, electric, water` en fonction de leur fonction dans le jeu. 


## Exemple : 

```html
<div id="cell21" class="corner cell top free-parking"></div>
<div id="cell22" class="property cell top" data-group="group5">
    <div class="content"></div>
    <div class="title"></div>
</div>
<div id="cell23" class="top cell"></div>
<div id="cell24" class="property cell top" data-group="group5">
    <div class="content"></div>
    <div class="title"></div>
</div>
```

## Numéro de case

Chaque case possède un id permettant de savoir qu'elle est son numéro de case :
```html
<div id="cell2" class="property bottom" data-group="group1">
            <div class="content"></div>
            <div class="title"></div>
</div>
<div id="cell1" class="corner start"></div>
```
# CSS

Chaque case du jeu est stylisé en fonction de sa classe. Ainsi par exemple : 

Pour les éléments de classe `right` et `left` enfant d'un élément possédant l'id `game` : 

```css

/* Style d'une div étant soit à gauche soit à droite */
#game .right, #game .left{
    width: 140px;
    height: 65px;
}

```

## Les propriétés

Chaque propriétés possèdent une div `content` et `title`. Afin de pouvoir ajouter les joueurs lors du déplacement et également pour différencier les différents groupes de propriétés.


```css
/* Style des div title propriété en haut */
#game .cell.top .title {
    height: 20%;
    border-top: 1px solid black;
    width: 100%;
}

/* Style des div content propriété en haut */
#game .cell.top .content {
    height: 80%;
    width: 100%;
}
```
Chaque propriété possède un groupe, ce groupe est répéré avec `data-group="group1"`

Ainsi la couleur de fond d'écran est définit en fonction de ce `data-group`

```css
#game [data-group='group1'] .title{
    background-color: brown;
}

#game [data-group='group2'] .title{
    background-color: aquamarine;
}

...
```

## Les cases à fonctions

Les cases à fonctions sont repéré avec leur classe, en fonction de cette classe une image de fond d'écran leur est attribuée.
```html
<div class="corner prison"></div>
```
```css
#game .prison{
    background-image: url('pictures/jail.jpg');
    background-size: contain;
    background-repeat: no-repeat;    
}
```
# JavaScript

## Le DOM

Le DOM (Document Object Model) est une interface de notre page WEB. Il va permettre aux javascript de pouvoir lire et manipuler le contenu de la page, sa structure et son style.

![Image Dom](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1024px-DOM-model.svg.png)

 -- <cite>Wikipedia</cite>

## Objet Monopoly

Un objet Monopoly a été créer, toutes les fonctions lier au déroulement du jeu du Monopoly seront des propriétés de l’objet Monopoly :


```javascript
var Monopoly = new Object();
```
## Les propriétés

### Monopoly.start

Cette propriété de l'objet Monopoly est appelée au chargement de la page et appelle toute les propriétés nécessaire au démarrage de la partie.

```javascript
Monopoly.start = function(){
    Monopoly.getNbrPlayer();
};
```

### Monopoly.bankPLayer

Initialisation du dictionnaire qui contiendra le montant d'argent du compte de chaque joueur.
Clé du dictionnaire = id du joueur
Valeur = Montant du compte (int)

```javascript
Monopoly.bankPlayer = new Map();
```

### Monopoly.listCell

Initialisation du dictionnaire qui contiendra les propriétés de chaque cellule.
Clé du dictionnaire = id de la cellule
Valeur = Objet contenant les propriétés de la cellule (objet)

```javascript
Monopoly.listCell = new Map();
```

Modèle de l'objet contenant les propriétés du cellules.

```javascript
function propertiesCell(type, name, picture, group, owner, buy, sell, rent, level) {
    this.type = type;
    this.name = name;
    this.picture = picture;
    this.group = group;
    this.owner = owner;
    this.buy = buy;
    this.sell = sell;
    this.rent = rent;
    this.level = level;

}

```

Ajout d'une cellule dans le dictionnaire avec l'id de la cellule et l'objet contenant les propriétés.

```javascript
Monopoly.listCell.set(2, new propertiesCell("property", "Turkmenistan", "turkmenistan.png", "Autre", null, 60, 30, 25, 1));
```

### Monopoly.listChance

Initialisation d'une liste qui contiendra le contenu des cases chance sous forme d'objet.

```javascript
Monopoly.listChance = [];
```
Modèle de l'objet contenant les propriétés de la case chance.

```javascript
function addChance(name,presentation,action,number){
    this.name = name;
    this.presentation = presentation;
    this.action = action;
    this.number = number;
};
```
Ajout dans la liste de l'objet contenant les propriétés d'une carte chance.

```javascript
Monopoly.listChance.push(new addChance("Facture","Vous n'avez pas payer vos factures ! <br>- Vous devez 50€ à la banque","pay",-50));
```




### Monopoly.getNbrPlayer

Cette propriété de l'objet Monopoly est appelée par `Monopoly.start` et demande à l'utilisateur le nombre de joueurs.Tant que le nombre indiqué n'est pas entre 2 et 5 la propriété est rappelée. Sinon la propriété `Monopoly CreatePlayer` est appelée.

```javascript
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
            Monopoly.createPlayer(nbrPlayer);
        }
    }

};
```

### Monopoly.createPlayer

Cette propriété de l'objet Monopoly est appelé par `Monopoly.getNbrPlayer` et permet de créer le nombre de joueur demandé.
Il initialise également le compte en banque du joueur.

```javascript
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
```


### Monopoly.getCurrentPlayer

Cette propriété de l'objet Monopoly permet de retourner du `DOM` le joueur qui possède la classe curent-turn.

Aucun paramètre n'est nécessaire.

```javascript
Monopoly.getCurrentPlayer = function(){
    return $(".player.current-turn");
};
```

### Monopoly.getClosestCell

Cette propriété de l'objet Monopoly permet de retourner du `DOM` la cellule la plus proche d'un joueur et qui possède la classe `cell`.

Les paramètres :
- L'élément du DOM d'un joueur.

```javascript
Monopoly.getClosestCell= function(player){
    return player.closest(".cell");
};
```

### Monopoly.getIdCell

Cette propriété de l'objet Monopoly permet de retourner l'id d'une cellule.
Cette propriété utilise la methode replace qui remplace dans l'id de la cellule cell par une chaine de caractère vide afin de récuperer seulement l'id de la cellule.

Les paramètres :
- L'élément du DOM d'un cellule.

```javascript
Monopoly.getIdCell = function(playerCell){
    return parseInt(playerCell.attr('id').replace("cell",""));
}
```

```html
<div id="cell36"></div>
```

### Monopoly.getIdplayer

Cette propriété de l'objet Monopoly permet de retourner l'id d'un joueur.

```javascript
Monopoly.getIdPlayer = function (player) {
    return parseInt(player.attr("id").replace("player", ""));
}
```

### Monopoly.getNextCell

Cette propriété de l'objet Monopoly permet de retourner la cellule suivante.
De plus elle appelle la propriété `Monopoly.addMoneyPlayer` quand un tour a été effectué.

Les paramètres :
- L'id de la cellule précédente (int)

```javascript
Monopoly.getNextCell = function (idCell) {
    if (idCell == 40) {
        idCell = 0;
        Monopoly.addMoneyPlayer(Monopoly.getIdPlayer(Monopoly.getCurrentPlayer()), 200);
    }
    var nextIdCell = idCell + 1;
    return $("#game .cell#cell" + nextIdCell);


}
```

### Monopoly.movePlayer

Cette propriété de l'objet Monopoly permet de faire avancer un joueur de number case.

Les paramètres :
- L'élement du DOM correspondant au joueur a déplacer
- Le nombre de case a avancé (int)

```javascript
Monopoly.movePlayer = function (player, number) {
    Monopoly.allowToDice = false;

    var movePlayerInterval = setInterval(movePLayer, 500);

    function movePLayer() {

        var cellPlayer = Monopoly.getClosestCell(player);
        var idCell = Monopoly.getIdCell(cellPlayer);
        var nextCell = Monopoly.getNextCell(idCell);

        nextCell.find('.content').append(player);
        number--;
        if (number == 0) {
            clearInterval(movePlayerInterval);
            cellPlayer = Monopoly.getClosestCell(player);
            Monopoly.action(player, cellPlayer);
        }
    }

};
```

### Monopoly.addMoneyPlayer

Cette propriété de l'objet Monopoly permet d'ajouter de l'argent dans le compte d'un joueur.

Les paramètres : 
- L'id d'un joueur (int)
- Le montant a ajouter sur le compte (int)

```javascript
Monopoly.addMoneyPlayer = function (playerId, amount) {
    var money = Monopoly.getMoneyPlayer(playerId);
    var newMoney = money + amount;
    Monopoly.bankPlayer.set("player" + String(playerId), newMoney);

};
```
### Monopoly.getMoneyPlayer

Cette propriété de l'objet Monopoly permet de retourner le montant d'un compte d'un joueur.

Les paramètres : 
- L'id du joueur (int)

```javascript
Monopoly.getMoneyPlayer = function (playerId) {
    return parseInt(Monopoly.bankPlayer.get("player" + String(playerId)));
};
```

### Monopoly.calcRent

Cette propriété de l'objet Monopoly permet de retourner le montant du loyer d'une propriété en fonction de son id et de son level.

Les paramètres : 
- L'id de la cellule (int)

```javascript
Monopoly.calcRent = function (idCell) {
    var rent = Monopoly.listCell.get(idCell)["rent"];
    var level = Monopoly.listCell.get(idCell)["level"];
    rent = level * (rent * 2);
    return rent;

};
```

### Monopoly.payRent 

Cette propriété de l'objet Monopoly permet de faire payer le montant du loyer d'une propriété.

Les paramètres : 
- L'id du propriétaire de la propriété(int)
- L'id du joueur qui doit payer le loyer(int)
- L'id de la cellule de la propriété(int)

```javascript
Monopoly.payRent = function (idOwner, idPlayer, idCell) {
    var rent = Monopoly.calcRent(idCell);
    if (Monopoly.verifbank(idPlayer), rent) {
        Monopoly.updateMoneyPlayer(idOwner, rent);
        Monopoly.updateMoneyPlayer(idPlayer, -rent);
    } else {
        Monopoly.sellProperty(rent);
    }
};
```

### Monopoly.verifBank

Cette propriété de l'objet Monopoly permet de vérifier si un joueur dispose suffisament d'argent pour payer un loyer par exemple.
True est retourné si le compte contient suffisament d'argent sinon False est retourné.

Les paramètres : 
- L'id du joueur qui doit payer le loyer(int)
- Le montant à payer(int)

```javascript
Monopoly.verifBank = function (idPlayer, amount) {
    var money = Monopoly.getMoneyPlayer(idPlayer);
    if (money - amount >= 0) {
        return true;
    } else {
        return false;
    }
}
```

