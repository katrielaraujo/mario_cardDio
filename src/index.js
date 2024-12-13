const player1 = {
    nome: "Maria",
    velocidade: 4,
    Manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    Manobrabilidade: 4,
    poder: 4,
    pontos: 0,
};

const player3 = {
    nome: "Browser",
    velocidade: 5,
    Manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};

const player4 = {
    nome: "Peach",
    velocidade: 3,
    Manobrabilidade: 4,
    poder: 2,
    pontos: 0,
};

const player5 = {
    nome: "Yoshi",
    velocidade: 2,
    Manobrabilidade: 4,
    poder: 3,
    pontos: 0,
};

const player6 = {
    nome: "Donkey",
    velocidade: 2,
    Manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};

async function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`
        ${characterName} 
        🎲 rolou um dado de ${block} 
        ${diceResult} + ${attribute} = ${diceResult + attribute}
        `);
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.velocidade
            totalTestSkill2 = diceResult2 + character2.velocidade

            await logRollResult(
                player1.nome,
                "velocidade",
                diceResult1,
                character1.velocidade
            );
            await logRollResult(
                player2.nome,
                "velocidade",
                diceResult2,
                character2.velocidade
            );
        }else if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.Manobrabilidade
            totalTestSkill2 = diceResult2 + character2.Manobrabilidade

            await logRollResult(
                player1.nome,
                "manobrabilidade",
                diceResult1,
                character1.velocidade
            );
            await logRollResult(
                player2.nome,
                "manobrabilidade",
                diceResult2,
                character2.velocidade
            );
        } else if (block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.poder
            let powerResult2 = diceResult2 + character2.poder

            console.log(`
                ${character1.nome} 🥊
                    🆚 confrontou com 
                ${character2.nome} 🥊`)

            await logRollResult(
                player1.nome,
                "poder",
                diceResult1,
                character1.poder
            );
            await logRollResult(
                player2.nome,
                "poder",
                diceResult2,
                character2.poder
            );

            if(powerResult1 > powerResult2 && character2.pontos > 0){
                console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu um ponto 🐢`)
                character2.pontos--;
            }else if(powerResult2 > powerResult1 && character1.pontos > 0){
                console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu um ponto 🐢`)
                character1.pontos--;
            }else{
                console.log("Confronto empatado! Nenhum vencedor")
            }
        }

        console.log("________________________________________________")

        // Vencedor

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.nome} marcou um ponto!`)
            character1.pontos++;
        }else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.nome} marcou um ponto!`)
            character2.pontos++;
        }

        
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado Final:")
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`)
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`)

    if(character1.pontos > character2.pontos)
        console.log(`\n${character1.nome} venceu a corrida! Parabéns! 🏆`)
    else if(character1.pontos < character2.pontos)
        console.log(`\n${character2.nome} venceu a corrida! Parabéns! 🏆`)
    else console.log("A corrida terminou em empate")
}

(async function main(){
    console.log(
        `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`
    )

    await playRaceEngine(player4,player3)
    declareWinner(player4,player3)
})();