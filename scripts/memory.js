/* global $ */

$(function () {
    const gridSize = 4;
    
    const pokemonNames = [
        "blastoise", "blastoise",
        "charizard", "charizard",
        "dragonite", "dragonite",
        "gengar", "gengar",
        "magikarp", "magikarp",
        "mew", "mew",
        "pikachu", "pikachu",
        "venusaur", "venusaur"
    ];

    const pokemonTiles = pokemonNames.slice();

    let firstClickedTile = null;
    let secondClickedTile = null;

    let movesTaken = 0;
    let pairsFound = 0;

    function renderTiles() {
        let index = 0;
        
        for (let row = 0; row < gridSize; row += 1) {
            const $tileRow = $("<div class='tile-row'></div>");

            for (let column = 0; column < gridSize; column += 1) {
                const $tile = $("<div class='tile'></div>");
                
                $tile.attr("data-index", index);
                index += 1;
                
                $tileRow.append($tile);
            }

            $("#tiles").append($tileRow);
        }

        assignPokemonToTiles();
    }
    
    function shuffle(array) {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }

    function assignPokemonToTiles() {
        shuffle(pokemonTiles);

        for (let i = 0; i < pokemonTiles.length; ++i) {
            const $tile = $(`[data-index=${i}]`);
            $tile.data("pokemon", pokemonTiles[i]);
        }
    }
    
    function checkMatch() {
        return firstClickedTile === secondClickedTile;
    }
    
    function onClickTile() {
        const pokemon = $(this).data("pokemon");

        $(this).addClass(pokemon);
        $(this).addClass("revealed");

        if (!firstClickedTile) {
            firstClickedTile = pokemon;
        } else {
            secondClickedTile = pokemon;

            // Check for a match, then update game state accordingly.
            if (checkMatch()) {
                pairsFound += 1;
                $("#pairs-found").text(pairsFound);
            }

            // Increase the move counter.
            movesTaken += 1;
            $("#moves-taken").text(movesTaken);

            // Reset the first and second clicked tile.
            firstClickedTile = null;
            secondClickedTile = null;
        }
    }
    
    function reset() {
    }

    $("#tiles").empty();

    renderTiles();

    $(".tile").on("click", onClickTile);
});
