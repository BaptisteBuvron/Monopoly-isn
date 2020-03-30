# Jeu le tour du monde en 40 cases.
- [Le jeu](https://baptistebuvron.github.io/Monopoly-isn/index.html)
- [Le Github du projet](https://github.com/BaptisteBuvron/Monopoly-isn)

# Sommaire
1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript](#javascript)
4. [Sources](#sources)

# HTML

*Réalisé par Yann et Baptiste*

Le plateau de jeu est créer entièrement en html et css : 

Chaque case est représenté par une balise `div`.

Chaque `div` peut comporter les classes suivantes:
- `top, left, right, bottom, void, cell` en fonction de leur position
- `property, tax, community-chest, prison, start, free-parking, electric, water` en fonction de leur fonction dans le jeu. 


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

## Les propriétés

Chaque propriétés possèdent la classe `available` si elle ne possède pas de propriétaire.
Sinon elle possède l'atribut `data-owner=player...` permettant de connaitre le propriétaire de la propriétés.

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

*Réalisé par Yann et Baptiste*

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
Chaque propriété possède un groupe, ce groupe est répéré avec l'attribut `data-group="group1"`.

Ainsi la couleur de fond d'écran est définit en fonction de ce `data-group`.

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

## Le plateau de jeu

![Image plateau](plateau.png)

# JavaScript

## Le DOM

Le DOM (Document Object Model) est une interface de notre page WEB. Il va permettre aux javascript de pouvoir lire et manipuler le contenu de la page, sa structure et son style.

![Image Dom](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1024px-DOM-model.svg.png)

 -- <cite>Wikipedia</cite>

## Jquery 

Pour sélectionner les éléments du DOM nous utiliserons la bibliothèque JavaScript Jquery qui a été créer pour facilité l'écriture de scripts côté client dans le code HTML des pages web. Le but de la bibliothèque étant le parcours et la modification du DOM.

Ainsi par exemple : 
```javascript
document.getElementById("id");
```
Devient : 
```javscript
$("#id");
```

## Objet Game

Un objet Game a été créer, toutes les fonctions lier au déroulement du jeu du Game seront des propriétés de l’objet Game :


```javascript
var Game = new Object();
```
## Les propriétés

### Game.start

*Réalisé par Yann*

Cette propriété de l'objet Game est appelée au chargement de la page et appelle les propriétés nécessaire au démarrage de la partie.

```javascript
Game.start = function(){
    Game.getNbrPlayer();
};
```

### Game.allowToDice

*Réalisé par Yann*

Cette propriété de l'objet Game est un booléen qui permet de déterminer quand les joueurs ont le droit de lancer les dés.

```javascript
Game.allowToDice = false;
```

### Game.dice

*Réalisé par Yann*

Cette propriété de l'objet Game permet au joueur de lancer les dés de maniére aléatoire et indépendante. La propriété `Game.movePlayer` est ensuite appelé pour faire avancer le joueur d'un nombre de case.

```javascript
Game.dice = function () {
    if (Game.allowToDice) {
        var dice_1 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        var dice_2 = Math.floor(Math.random() * 6) + 1; /* retourne un nombre compris entre 1 et 6 */
        Game.allowToDice = false; /* interdit au joueur de relancer les dés*/

        var total = dice_1 + dice_2;
        Game.movePlayer(Game.getCurrentPlayer(), total);
    }
```

### Game.bankPLayer

*Réalisé par Baptiste*

Initialisation du dictionnaire qui contiendra le montant du compte de chaque joueur.
Clé du dictionnaire = id du joueur,
Valeur du dictionnaire = Montant du compte (int)

```javascript
Game.bankPlayer = new Map();
```

### Game.listCell

*Réalisé par Baptiste*

Initialisation du dictionnaire qui contiendra les propriétés de chaque cellule.
Clé du dictionnaire = id de la cellule,
Valeur = Objet contenant les propriétés de la cellule (objet)

```javascript
Game.listCell = new Map();
```

Modèle de l'objet contenant les propriétés des cellules.

```javascript
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

```

Ajout d'une cellule dans le dictionnaire `Game.listCell` avec l'id de la cellule et l'objet contenant les propriétés de la cellule.

```javascript
Game.listCell.set(2, new propertiesCell("property", "Turkmenistan", "turkmenistan.png", "Autre", null, 60, 30, 25, 1));
```

### Game.listChance

*Réalisé par Baptiste*

Initialisation d'une liste qui contiendra le contenu des cases chance sous forme d'objet.

```javascript
Game.listChance = [];
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
Ajout dans la liste `Game.listChance` l'objet contenant les propriétés d'une carte chance.

```javascript
Game.listChance.push(new addChance("Facture","Vous n'avez pas payer vos factures ! <br>- Vous devez 50€ à la banque","pay",-50));
```


### Game.getNbrPlayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game est appelée par `Game.start` et demande à l'utilisateur le nombre de joueurs.Tant que le nombre indiqué n'est pas entre 2 et 5 la propriété est rappelée. Sinon la propriété `Game CreatePlayer` est appelée.

Aucun paramètre n'est nécessaire.

```javascript
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
            Game.createPlayer(nbrPlayer);
        }
    }

};
```

### Game.createPlayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game est appelé par `Game.getNbrPlayer` et permet de créer le nombre de joueur demandé.
Il initialise également le compte en banque des joueurs.

Paramètre :
- Le nombre de joueur a créer (int).

```javascript
Game.createPlayer = function (nbrPlayer) {

    for (let i = 1; i <= nbrPlayer; i++) {
        if (i == 1) {
            $('<div id="player' + String(i) + '" class="player current-turn"></div>').appendTo('#game .start .content');
        } else {
            $('<div id="player' + String(i) + '" class="player"></div>').appendTo('#game .start .content');
        }
        Game.bankPlayer.set("player" + String(i), Game.moneyAtStart);


    }
    Game.allowToDice = true;
    Game.dice();

};
```


### Game.getCurrentPlayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner du `DOM` le joueur qui possède la classe curent-turn.

Aucun paramètre n'est nécessaire.

```javascript
Game.getCurrentPlayer = function(){
    return $(".player.current-turn");
};
```

### Game.getClosestCell

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner du `DOM` la cellule la plus proche d'un joueur et qui possède la classe `cell`.

Les paramètres :
- L'élément du DOM d'un joueur.

```javascript
Game.getClosestCell= function(player){
    return player.closest(".cell");
};
```

### Game.getIdCell

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner l'id d'une cellule (int).
Cette propriété utilise la methode replace qui remplace dans l'id de la cellule cell par une chaine de caractère vide afin de récuperer seulement l'id de la cellule.

Les paramètres :
- L'élément du DOM d'un cellule.

```javascript
Game.getIdCell = function(playerCell){
    return parseInt(playerCell.attr('id').replace("cell",""));
}
```

```html
<div id="cell36"></div>
```

### Game.getIdplayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner l'id d'un joueur (int).

Les paramètres :
- L'élément du DOM d'un joueur.

```javascript
Game.getIdPlayer = function (player) {
    return parseInt(player.attr("id").replace("player", ""));
}
```

### Game.getNextCell

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner la cellule suivante.
De plus elle appelle la propriété `Game.addMoneyPlayer` quand un tour a été effectué.

Les paramètres :
- L'id de la cellule précédente (int).

```javascript
Game.getNextCell = function (idCell) {
    if (idCell == 40) {
        idCell = 0;
        Game.updateMoneyPlayer(Game.getIdPlayer(Game.getCurrentPlayer()), 200);
    }
    var nextIdCell = idCell + 1;
    return $("#game .cell#cell" + nextIdCell);


}
```

### Game.movePlayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de faire avancer un joueur de `number` case.

Les paramètres :
- L'élement du DOM correspondant au joueur a déplacer,
- Le nombre de case a avancé (int).

```javascript
Game.movePlayer = function (player, number) {
    Game.allowToDice = false;

    var movePlayerInterval = setInterval(movePLayer, 500);

    function movePLayer() {

        var cellPlayer = Game.getClosestCell(player);
        var idCell = Game.getIdCell(cellPlayer);
        var nextCell = Game.getNextCell(idCell);

        nextCell.find('.content').append(player);
        number--;
        if (number == 0) {
            clearInterval(movePlayerInterval);
            cellPlayer = Game.getClosestCell(player);
            Game.action(player, cellPlayer);
        }
    }

};
```

### Game.updateMoneyPlayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de modifier le montant d'un compte d'un joueur.

Les paramètres : 
- L'id d'un joueur (int),
- Le montant a enlever ou ajouter sur le compte (int).

```javascript
Game.addMoneyPlayer = function (playerId, amount) {
    var money = Game.getMoneyPlayer(playerId);
    var newMoney = money + amount;
    Game.bankPlayer.set("player" + String(playerId), newMoney);

};
```
### Game.getMoneyPlayer

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner le montant d'un compte d'un joueur.

Les paramètres : 
- L'id du joueur (int).

```javascript
Game.getMoneyPlayer = function (playerId) {
    return parseInt(Game.bankPlayer.get("player" + String(playerId)));
};
```

### Game.calcRent

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de retourner le montant du loyer d'une propriété en fonction de son level.

Les paramètres : 
- L'id de la cellule (int).

```javascript
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
```

### Game.payRent

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de faire payer le montant du loyer d'une propriété.

Les paramètres : 
- L'id du propriétaire de la propriété(int),
- L'id du joueur qui doit payer le loyer(int),
- L'id de la cellule de la propriété(int).

```javascript
Game.payRent = function (idOwner, idPlayer, idCell) {
    var rent = Game.calcRent(idCell);
    if (Game.verifbank(idPlayer), rent) {
        Game.updateMoneyPlayer(idOwner, rent);
        Game.updateMoneyPlayer(idPlayer, -rent);
    } else {
        Game.sellProperty(rent);
    }
};
```

### Game.verifBank

*Réalisé par Baptiste*

Cette propriété de l'objet Game permet de vérifier si un joueur dispose suffisament d'argent pour payer un loyer par exemple.
True est retourné si le compte contient suffisament d'argent sinon False est retourné.

Les paramètres : 
- L'id du joueur qui doit payer le loyer(int),
- Le montant à payer(int).

```javascript
Game.verifBank = function (idPlayer, amount) {
    var money = Game.getMoneyPlayer(idPlayer);
    if (money - amount >= 0) {
        return true;
    } else {
        return false;
    }
}
```

# Sources

# Les images

Les images du plateau de Game proviennent du site [commons Wikipedia](https://commons.wikimedia.org), il s'agit d'une  bibliothèque de média libre de droit.

