let hands = ["Rock", "Paper", "Scissors"]

function randomHand() {
    return hands[Math.floor(Math.random() * hands.length)]
}

console.log(randomHand())