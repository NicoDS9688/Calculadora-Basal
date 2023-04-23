const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value

    if (DATO > 0 && DATO <= 30) {
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mantenimiento.toFixed(2) + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    } else if (DATO > 30) {

        let flujo = calcFlujo(DATO);
        let flujo1 = (flujo * 1500) / 24;
        let flujo2 = (flujo * 2000) / 24;
        let f1 = flujo1.toFixed(2);
        let f2 = flujo2.toFixed(2);
        FLU.innerHTML = 'SC1: ' + f1 + ' cc/hr';
        MAN.innerHTML = 'SC2: ' + f2 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }

})

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto < 10) {
        resto = resto * 100;
    }
    else if (resto >= 10 && resto < 20) {
        let aux;
        aux = resto - 10;
        resto = 1000 + (aux * 50);
    }

    else if (resto >= 20 && resto < 31) {
        let aux;
        aux = resto - 20;
        resto = 1500 + (aux * 20);
    }

    else if (resto > 30) {
        sc1 = ((resto * 4) + 7) / (resto + 90);
        sc2 = resto;
    }

    flujo = resto / 24;
    return flujo.toFixed(2);
}