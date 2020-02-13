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




