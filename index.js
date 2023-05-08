class Card {
    constructor(suit, value, name) {
        this.name = name
        this.suit = suit
        this.value = value
    }
}

class Calod {
    constructor() {
        this.cards = []
    }
    createCalod() {
        if (this.cards.length) return false
        let suits = ['hearts', 'spade', 'clubs', 'diamonds']
        let names = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        for (let i in suits) {
            for (let j in names) {
                this.cards.push(new Card(suits[i], values[j], names[j]))
            }
        }
    }
    shuffle() {
        this.cards = [...this.cards]
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal_card() {
        if (!(this.cards.length - 1)) return 'no card isdealt'
        const tmp = Math.floor(Math.random() * this.cards.length);
        let returnedValue = this.cards[tmp]
        this.cards = this.cards.filter((el) => el !== this.cards[tmp])
        return returnedValue
    }
}


const calodCards = document.querySelector('.calod_gifs')
const startBtn = document.getElementById('startGame')
const takeCardsBtn = document.getElementById('takeCards')
const game = new Calod()
const img = document.createElement('img')
calodCards.appendChild(img)
img.style.display = 'none'
img.setAttribute('class', 'gif')


let takedCard = document.createElement('p')

const startTheGame = () => {
    img.style.display = 'block'
    img.src = './gifs/72P.gif';
    setTimeout(() => {
        let tmp =  game.createCalod()
        game.shuffle()
        console.log(tmp);
        takedCard.innerHTML = tmp !== undefined ? `cards are shuffled` : `cards are shuffled and created`
        console.log(game.cards);
        calodCards.appendChild(takedCard)
        img.style.display = 'none'
    }, 1000)
}

const takeRandomCard = () => {
    img.style.display = 'block'
    img.src = './gifs/take.gif';
    setTimeout(() => {
        let tmp = game.deal_card()
        console.log(game.cards.length);
        takedCard.innerHTML = tmp.name ?`Your card is ${tmp.name} ${tmp.suit} left in the calod ${game.cards.length}` : `${tmp}`

        calodCards.appendChild(takedCard)
        img.style.display = 'none'
    }, 1000)
}


startBtn.addEventListener('click', startTheGame)
takeCardsBtn.addEventListener('click', takeRandomCard)

