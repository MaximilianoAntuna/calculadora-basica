let operacion;
let num1;
let num2;

let resultado;

operacion = parseInt(prompt("que operacion desea realizar? 1: suma, 2: resta, 3: multiplicacion, 4: division, 9 para salir"));






while ((operacion != 9)) {
    if (operacion != false) {
        num1 = parseFloat(prompt("ingrese el primer numero"));
        if ((num1 == "") || (isNaN(num1))) {
            alert(" debe ingresar un NUMERO")
        } else {
            num2 = parseFloat(prompt("ingrese el segundo numero"))
        }

        if ((num1 != "") && ((num2 != "") && (!isNaN(num2)))) {
        } else {
            alert("operacion invalida")
        }
    }

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multi = num1 * num2;
    const division = num1 / num2;
    
    if ((operacion != "") && (operacion === 1)) {
        resultado = suma;

    } else if ((operacion != "") && (operacion === 2)) {
        resultado = resta;
    } else if ((operacion != "") && (operacion === 3)) {
        resultado = multi;
    } else if ((operacion != "") && (operacion === 4)) {
        resultado = division;
    } else {
        operacion = false;        
    }
    alert(resultado);





    operacion = parseInt(prompt("que operacion desea realizar? 1: suma, 2: resta, 3: multiplicacion, 4: division, 9 para salir"));

}