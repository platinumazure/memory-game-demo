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
    }
    
    function onClickTile() {
    }
    
    function reset() {
    }

    $("#tiles").empty();

    renderTiles();
});
