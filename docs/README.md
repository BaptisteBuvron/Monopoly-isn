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

Chaque propriétés possèdent une div `content` et `title`.


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

## Objet Monopoly

Un objet Monopoly a été créer, toutes les fonctions lier au déroulement du jeu du Monopoly seront des propriétés de l’objet Monopoly :

```javascript
var Monopoly = new Object();
```
## Les fonctions

### Monopoly.getNbrPlayer

Cette propriété de l'objet Monopoly est appelée au chargement de la page et demande à l'utilisateur le nombre de joueurs.Tant que le nombre indiqué n'est pas entre 2 et 5 la propriété est rappelée. Sinon la propriété `Monopoly CreatePlayer` est appelée.

```javascript
Monopoly.getNbrPlayer = function () {
    $(document).ready(function () {
        $("#modal-player").modal('show');

    });
    $("#button-nbrPlayer").click(getNbrPlayer);

    function getNbrPlayer() {
        var nbrPlayer = parseInt($("#nbrPlayer").val());
        if (nbrPlayer > 5 || nbrPlayer < 2) {
            Monopoly.getNbrPlayer();
        } else {
            $("#modal-player").modal('hide');
            Monopoly.createPlayer(nbrPlayer);
        }
    }

};

```

