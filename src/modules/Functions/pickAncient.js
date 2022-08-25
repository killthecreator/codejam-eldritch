import {
    ancient1,
    ancient2,
    ancient3,
    ancient4,
    difficultyContainer,
    difficultyButtons,
    tracker,
    deckTitle,
    stageValues,
    deck,
    current,
} from "../../constants.js";
let stageValuesArr = [],
    stageValuesArrDynamic = [];
const pickAncient = (e) => {
    const target = e.target;

    const ancients = target.parentElement.querySelectorAll('.card');
    ancients.forEach(item => {
        if (item !== target) {
            item.style.border = 'solid #000000 1px';
        } else {
            target.style.border = 'solid #FFFFFF 1px';
        }
    });


    switch (target) {
        case ancient1:
            stageValuesArr = [1, 2, 1, 2, 3, 1, 2, 4, 0];
            break;
        case ancient2:
            stageValuesArr = [0, 2, 2, 1, 3, 0, 3, 4, 0];
            break;
        case ancient3:
            stageValuesArr = [0, 2, 1, 2, 3, 1, 3, 4, 0];
            break;
        case ancient4:
            stageValuesArr = [1, 2, 1, 3, 2, 1, 2, 4, 0];
            /* На последнем челе на 1 желтую меньше и на 1 зеленую больше */
            break;
    }

    stageValuesArrDynamic = [...stageValuesArr];

    stageValues.forEach((item, index) => {
        item.textContent = stageValuesArr[index];
    });

    difficultyButtons.forEach(item => {
        item.style.border = 'solid #000000 3px';
    });

    tracker.style.opacity = '1';
    difficultyContainer.style.opacity = '1';
    deckTitle.style.opacity = '0';
    deck.style.opacity = '0';
    current.style.opacity = '0';


    return [stageValuesArr, stageValuesArrDynamic];
};



export {
    pickAncient,
    stageValuesArr,
    stageValuesArrDynamic
};