document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el tbody de la tabla
    var facturaTable = document.getElementById("factura-table");

    // Definimos los datos de los productos
    var productos = [
        ["Pomo de tenis", 1, 1000, 80, 1000, 1180],
        ["Promo de Tichert", 1, 900, 72, 900, 972]
    ];

    // Iteramos sobre los productos y los agregamos a la tabla
    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        var row = facturaTable.insertRow(i);

        for (var j = 0; j < producto.length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = producto[j];
        }
    }

    // Calculamos el total y lo mostramos en el span con id "total"
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
        total += productos[i][5]; // Sumamos la columna de Total
    }

    document.getElementById("total").innerText = total.toFixed(2);
});
