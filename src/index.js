//declarando variáveis
let nivel = "";

let resultado = rank(100, 20)

// criando função
function rank(vitoria, derrota){
    saldoVitorias = vitoria - derrota;
    return saldoVitorias;
}

switch(true){

    case saldoVitorias <= 10:
        nivel = "Ferro";
    break;

    case saldoVitorias > 11 && saldoVitorias <= 20:
        nivel = "Bronze";
    break;

    case saldoVitorias > 21 && saldoVitorias <= 50:
        nivel = "Prata";
    break;

    case saldoVitorias > 51 && saldoVitorias <= 80:
        nivel = "Ouro";
    break;

    case saldoVitorias > 81 && saldoVitorias <= 90:
        nivel = "Diamante";
    break;
    
    case saldoVitorias > 91 && saldoVitorias <= 100:
        nivel = "Lendário";
    break;

    default:
        nivel = "Imortal"
}

console.log("O herói tem de saldo de " + saldoVitorias + " vitórias e está no nível " +
nivel + ".")