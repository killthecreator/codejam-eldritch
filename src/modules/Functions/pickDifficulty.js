import {
    difficulty1,
    difficulty2,
    difficulty3,
    difficulty4,
    difficulty5,
    difficultyButtons,
    deck,
    current,
} from "../../constants.js";
export const pickDifficulty = (e) => {
    const target = e.target;
    target.style.border = 'solid #FFFFFF 2px';

    /* const difficulties = target.parentElement.querySelectorAll('.difficulty-button'); */
    difficultyButtons.forEach(item => {
        if (item !== target) {
            item.style.border = 'solid #000000 3px';
        }
    });

    let cardsArr = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    switch (target) {
        case difficulty1:
            stageValuesArr = [1, 2, 1, 2, 3, 1, 2, 4, 0];
            break;
        case difficulty2:
            stageValuesArr = [0, 2, 2, 1, 3, 0, 3, 4, 0];
            break;
        case difficulty3:
            let blueCardsArr = new Array(12).fill(0).map((item, index) => item = index + 1);
            let brownCardsArr = new Array(21).fill(0).map((item, index) => item = index + 1);
            let greenCardsArr = new Array(18).fill(0).map((item, index) => item = index + 1);
            cardsArr = cardsArr.concat(shuffleArray(blueCardsArr), shuffleArray(brownCardsArr), shuffleArray(greenCardsArr));
            break;
        case difficulty4:
            stageValuesArr = [1, 2, 1, 3, 2, 1, 2, 4, 0];
            break;
        case difficulty5:
            stageValuesArr = [1, 2, 1, 3, 2, 1, 2, 4, 0];
            break;
    }

    deck.style.opacity = '1';
    current.style.opacity = '0';
    return cardsArr;

};