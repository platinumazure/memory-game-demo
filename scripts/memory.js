/* global $ */

$(function () {
    const gridSize = 4;

    function renderTiles() {
        for (let row = 0; row < gridSize; row += 1) {
            const $tileRow = $("<div class='tile-row'></div>");

            for (let column = 0; column < gridSize; column += 1) {
                const $tile = $("<div class='tile'></div>");
                $tileRow.append($tile);
            }

            $("#tiles").append($tileRow);
        }
    }

    $("#tiles").empty();

    renderTiles();
});