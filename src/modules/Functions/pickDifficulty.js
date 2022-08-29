import {
    stageValues,
    difficulty1,
    difficulty2,
    difficulty3,
    difficulty4,
    difficulty5,
    difficultyButtons,
    deckTitle,
    deck,
    current,
} from "../../constants.js";

import {
    stageValuesArr,
    stageValuesArrDynamic,
    resetStageArrDynamic
} from './pickAncient.js';

let currentDeckArr = [];

const pickDifficulty = (e) => {

    resetStageArrDynamic(stageValuesArr);

    stageValues.forEach((item, index) => {
        item.textContent = stageValuesArr[index];
    });
    let currentDeck = {
            stage1: [],
            stage2: [],
            stage3: [],
        },
        blueCardsArr = [],
        brownCardsArr = [],
        greenCardsArr = [],
        addCards = [];
    const target = e.target;
    target.style.border = 'solid #FFFFFF 2px';

    difficultyButtons.forEach(item => {
        if (item !== target) {
            item.style.border = 'solid #000000 3px';
        }
    });

    switch (target) {
        case difficulty1:
            blueCardsArr = shuffleArray(new Array(4).fill(0).map((item, index) => item = index + 1));
            blueCardsArr = blueCardsArr.map(item => item = item = `url('./assets/MythicCards/blue/blue${item}.png')`);

            brownCardsArr = shuffleArray(new Array(5).fill(0).map((item, index) => item = index + 1));
            if (stageValuesArr[4] === 2) {
                addCards = shuffleArray(new Array(11).fill(0).map((item, index) => item = index + 6)).slice(length - 3);
            } else {
                addCards = shuffleArray(new Array(11).fill(0).map((item, index) => item = index + 6)).slice(length - 4);
            }

            brownCardsArr.push(...addCards);
            brownCardsArr = brownCardsArr.map(item => item = item = `url('./assets/MythicCards/brown/brown${item}.png')`);


            greenCardsArr = shuffleArray(new Array(5).fill(0).map((item, index) => item = index + 1));
            if (stageValuesArr[3] === 3) {
                addCards = shuffleArray(new Array(8).fill(0).map((item, index) => item = index + 6)).slice(length - 1);
                greenCardsArr.push(...addCards);
            }
            greenCardsArr = greenCardsArr.map(item => item = item = `url('./assets/MythicCards/green/green${item}.png')`);
            console.log(greenCardsArr);
            break;
        case difficulty2:
            blueCardsArr = shuffleArray(new Array(8).fill(0).map((item, index) => item = index + 1));
            blueCardsArr = blueCardsArr.map(item => item = item = `url('./assets/MythicCards/blue/blue${item}.png')`);

            brownCardsArr = shuffleArray(new Array(16).fill(0).map((item, index) => item = index + 1));
            brownCardsArr = brownCardsArr.map(item => item = item = `url('./assets/MythicCards/brown/brown${item}.png')`);

            greenCardsArr = shuffleArray(new Array(13).fill(0).map((item, index) => item = index + 1));
            greenCardsArr = greenCardsArr.map(item => item = item = `url('./assets/MythicCards/green/green${item}.png')`);

            break;
        case difficulty3:
            blueCardsArr = shuffleArray(new Array(12).fill(0).map((item, index) => item = index + 1));
            blueCardsArr = blueCardsArr.map(item => item = item = `url('./assets/MythicCards/blue/blue${item}.png')`);

            brownCardsArr = shuffleArray(new Array(21).fill(0).map((item, index) => item = index + 1));
            brownCardsArr = brownCardsArr.map(item => item = item = `url('./assets/MythicCards/brown/brown${item}.png')`);

            greenCardsArr = shuffleArray(new Array(18).fill(0).map((item, index) => item = index + 1));
            greenCardsArr = greenCardsArr.map(item => item = item = `url('./assets/MythicCards/green/green${item}.png')`);

            break;
        case difficulty4:
            blueCardsArr = shuffleArray(new Array(8).fill(0).map((item, index) => item = index + 5));
            blueCardsArr = blueCardsArr.map(item => item = item = `url('./assets/MythicCards/blue/blue${item}.png')`);

            brownCardsArr = shuffleArray(new Array(16).fill(0).map((item, index) => item = index + 6));
            brownCardsArr = brownCardsArr.map(item => item = item = `url('./assets/MythicCards/brown/brown${item}.png')`);

            greenCardsArr = shuffleArray(new Array(13).fill(0).map((item, index) => item = index + 6));
            greenCardsArr = greenCardsArr.map(item => item = item = `url('./assets/MythicCards/green/green${item}.png')`);
            break;
        case difficulty5:
            blueCardsArr = shuffleArray(new Array(4).fill(0).map((item, index) => item = index + 9));
            blueCardsArr = blueCardsArr.map(item => item = item = `url('./assets/MythicCards/blue/blue${item}.png')`);

            brownCardsArr = shuffleArray(new Array(5).fill(0).map((item, index) => item = index + 17));
            if (stageValuesArr[4] === 2) {
                addCards = shuffleArray(new Array(11).fill(0).map((item, index) => item = index + 6)).slice(length - 3);
            } else {
                addCards = shuffleArray(new Array(11).fill(0).map((item, index) => item = index + 6)).slice(length - 4);
            }
            brownCardsArr.push(...addCards);
            brownCardsArr = brownCardsArr.map(item => item = item = `url('./assets/MythicCards/brown/brown${item}.png')`);

            greenCardsArr = shuffleArray(new Array(5).fill(0).map((item, index) => item = index + 14));
            if (stageValuesArr[3] === 3) {
                addCards = shuffleArray(new Array(8).fill(0).map((item, index) => item = index + 6)).slice(length - 1);
                greenCardsArr.push(...addCards);
            }

            greenCardsArr = greenCardsArr.map(item => item = item = `url('./assets/MythicCards/green/green${item}.png')`);
            break;
    }

    (function stageCardsFill() {
        let curColor = 'green';
        stageValuesArr.forEach((item, index) => {
            if (index <= 2) {
                if (curColor === 'green') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage1.push(greenCardsArr.pop());
                    }
                    curColor = 'brown';
                } else if (curColor === 'brown') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage1.push(brownCardsArr.pop());
                    }
                    curColor = 'blue';
                } else if (curColor === 'blue') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage1.push(blueCardsArr.pop());
                    }
                    curColor = 'green';
                }
                shuffleArray(currentDeck.stage1);

            } else if (index <= 5) {
                if (curColor === 'green') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage2.push(greenCardsArr.pop());
                    }
                    curColor = 'brown';
                } else if (curColor === 'brown') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage2.push(brownCardsArr.pop());
                    }
                    curColor = 'blue';
                } else if (curColor === 'blue') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage2.push(blueCardsArr.pop());
                    }
                    curColor = 'green';
                }
                shuffleArray(currentDeck.stage2);
            } else {
                if (curColor === 'green') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage3.push(greenCardsArr.pop());
                    }
                    curColor = 'brown';
                } else if (curColor === 'brown') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage3.push(brownCardsArr.pop());
                    }
                    curColor = 'blue';
                } else if (curColor === 'blue') {
                    for (let i = 0; i < item; i++) {
                        currentDeck.stage3.push(blueCardsArr.pop());
                    }
                    curColor = 'green';
                }
                shuffleArray(currentDeck.stage3);
            }
        });
        currentDeckArr = [...currentDeck.stage3, ...currentDeck.stage2, ...currentDeck.stage1];
    })()

    deckTitle.style.opacity = '1';
    deck.style.opacity = '1';
    current.style.opacity = '0';

    return currentDeckArr;
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export {
    currentDeckArr,
    pickDifficulty
};

