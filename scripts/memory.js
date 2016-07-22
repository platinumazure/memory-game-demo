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

    function renderTiles() {
        let index = 0;
        
        for (let row = 0; row < gridSize; row += 1) {
            const $tileRow = $("<div class='tile-row'></div>");

            for (let column = 0; column < gridSize; column += 1) {
                const $tile = $("<div class='tile'></div>");
                
                $tile.data("tileIndex", index);
                index += 1;
                
                $tileRow.append($tile);
            }

            $("#tiles").append($tileRow);
        }
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