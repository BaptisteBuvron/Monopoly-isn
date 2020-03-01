# Sommaire
1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript](#javascript)

# HTML

Le plateau de jeu est créer entièrement en html et css : 

Chaque case est représenté par une balise `div`.

Chaque `div` peut comporter les classes suivantes:
- `top, left, right, bottom, void` en fonction de leur position
- `property, taxe, community-chest, prison, start, free-parking, electric, water` en fonction de leur fonction dans le jeu. 


## Exemple : 

```markdown
<div class="corner top free-parking"></div>
        <div class="property top" data-group="group5">
            <div class="content"></div>
            <div class="title"></div>
        </div>
        <div class="top"></div>
        <div class="property top" data-group="group5">
            <div class="content"></div>
            <div class="title"></div>
        </div>
        <div class="property top" data-group="group5">
            <div class="content"></div>
            <div class="title"></div>
</div>
```
# CSS

Chaque case du jeu est stylisé en fonction de sa classe. Ainsi par exemple : 

Pour les éléments de classe `right` et `left` enfant d'un élément possédant l'id `game` : 

```markdown

/* Style d'une div étant soit à gauche soit à droite */
#game .right, #game .left{
    width: 140px;
    height: 65px;
}

```

## Les propriétés

Chaque propriétés possèdent une div `content` et `title`.
Pour que c'est div réagissent en fonction de leur parent et non de la balise `body`, on utilise une propriété des `position`. 
Un élément positionné avec position: `absolute` va être positionné par rapport à son parent le plus proche positionné (avec une valeur de position différente de static).

Les parents ont une position `relative` (autre que static)
```markdown
#game .top, #game .left, #game .right, #game .bottom, #game .corner{
    font-size: 0px;
    position: relative;
}
```

Les enfants ont une position `absolute`.
```markdown
/* Style des div content propriété a gauche */
#game .property.left .content{
    left: 0px;
    position: absolute;
    width: 80%;
    height: 100%;
    border: none;
}

/* Style des div title propriété a gauche */
#game .property.left .title{
    position: absolute;
    width: 20%; 
    height: 100%;
    border: none;
    border-left: 1px solid black;
    right: 0px;
}
```
Chaque propriété possède un groupe, ce groupe est répéré avec `data-group="group1"`

Ainsi la couleur de fond d'écran est définit en fonction de ce `data-group`

```markdown
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

```markdown
<div class="corner prison"></div>

#game .prison{
    background-image: url('pictures/jail.jpg');
    background-size: contain;
    background-repeat: no-repeat;    
}
```
# JavaScript

