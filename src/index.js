const player1 = {
    nome: "Maria",
    velocidade: 4,
    Manobrabilidade: 3,
    pode: 3,
    pontos: 0,
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    Manobrabilidade: 4,
    pode: 4,
    pontos: 0,
};

const player3 = {
    nome: "Browser",
    velocidade: 5,
    Manobrabilidade: 2,
    pode: 5,
    pontos: 0,
};

const player4 = {
    nome: "Peach",
    velocidade: 3,
    Manobrabilidade: 4,
    pode: 2,
    pontos: 0,
};

const player5 = {
    nome: "Yoshi",
    velocidade: 2,
    Manobrabilidade: 4,
    pode: 3,
    pontos: 0,
};

const player6 = {
    nome: "Donkey",
    velocidade: 2,
    Manobrabilidade: 2,
    pode: 5,
    pontos: 0,
};

async function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2){

}

(async function main(){
    console.log(
        `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`
    )

    await playRaceEngine(player1,player2)
})();