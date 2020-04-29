const randomDamage = _ => Math.floor(Math.random() * 10) + 1;

console.log(randomDamage())



const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return (randNum == 0 ? opt1 : opt2);
}

console.log(chooseOption("test1", "test2"))



const attackPlayer = function (health) {
    return health - randomDamage();
}

// console.log(attackPlayer(100));



const logHealth = (player, health) => { console.log(`${player} health: ${health}`); }


const logDeath = (winner, loser) => { console.log(`${winner} defeated ${loser}`); }



const isDead = (health) => health <= 0;

console.log(isDead(3))


function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health);

            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }

        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            isDead(player1Health);

            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }

}

fight("Rob", "Elliott", 100, 100);

