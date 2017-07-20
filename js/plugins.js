console.log('plugins');

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                callback(JSON.parse(allText));
            }
        }
    };
    rawFile.send(null);
}

function buildItem(item){
    var element =
        '<div class="media">' +
        '   <a href="#">' +
        '      <img width="100%" height="100px" class="media-object" src="' + item.imagem + '">' +
        '   </a>' +
        '   <div class="media-body">' +
        '      <h4>' + item.nome + '</h4>' ;

    if(item.ingredientes){
        element += '      <p><b>Ingredientes:</b>' + item.ingredientes + '</p>';
    }
    if(item.descricao){
        element += '      <p>' + item.descricao + '</p>';
    }
    element +=
        '      <h3>' + item.valor + '</h3>' +
        '   </div>' +
        '</div>';
    return element;
}
function buildItems(items){
    var elements = '';
    items.forEach(function (item) {
        elements += buildItem(item);
    });
    return elements;
}
$(document).ready(function() {

    readJsonFile("config/comidas.json", function (items) {
        var elements = buildItems(items);
        $("#foodItems").append(elements);
    });

    readJsonFile("config/bebidas.json", function (items) {
        var elements = buildItems(items);
        $("#drinkItems").append(elements);
    });

    readJsonFile("config/sobremesas.json", function (items) {
        var elements = buildItems(items);
        $("#desertItems").append(elements);
    });
});