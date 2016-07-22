/* global $ */

$(function () {
    const gridSize = 4;

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
    
    function shuffle() {
      
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