function calcula() {
    var casella1 = document.getElementById("valor");
    var casella2 = document.getElementById("valor2");
    var venta = casella1.value;
    var retorno = casella2.value;
    var tipo = CalculaTipo(venta, retorno);
    var resultat;

  // Punto de registro para la variable 'tipo'
    console.log("Llamada a CalculaTipo con venta:", venta, "y retorno:", retorno);
    console.log("El valor del tipo es:", tipo);

    switch (tipo) {
        case 5:
            resultat = "Eres un genio de la venta!!";
            break;
        case 4:
            resultat = "Muy bien, vamos por buen camino";
            break;
        case 3:
            resultat = "Aún es pronto pero vamos por buen camino";
            break;
        case 2:
            resultat = "Aún es pronto pero no creo que vender sea lo tuyo";
            break;
        case 1:
            resultat = "Francamente, tus resultados son mejorables...";
            break;
        case 0:
            resultat = "¡Qué desastre, dedícate a otra cosa!";
            break;
        default:
            break;
    }

    var casella3 = document.getElementById("resultat");
    casella3.value = resultat;
}

function CalculaTipo(venta, retorno) {
    var factor = 0;
    var resultat = 0;

    factor = venta - retorno;
    factor = (factor / venta) * 100;
    factor = Math.round(factor / 10) * 10;

    if (venta >= 500) {
        if (factor === 100) {
            resultat = 5;
        } else if (factor > 50) {
            resultat = 4;
        } else if (factor === 0) {
            resultat = 0;
        } else {
            resultat = 1;
        }
    } else {
        if (factor > 50) {
            resultat = 3;
        } else {
            resultat = 2;
        }
    }

    return resultat;
}

// Exportar la función para testing
module.exports = { CalculaTipo };