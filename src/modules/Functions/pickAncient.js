import {
    ancient1,
    ancient2,
    ancient3,
    ancient4,
    difficultyButtons,
    deck,
    current,
} from "../../constants.js";
export const pickAncient = (e) => {
    const target = e.target;
    target.style.border = 'solid #FFFFFF 1px';

    const ancients = target.parentElement.querySelectorAll('.card');
    ancients.forEach(item => {
        if (item !== target) {
            item.style.border = 'solid #000000 1px';
        }
    });

    const stageValues = document.querySelectorAll('.stage-value');
    let stageValuesArr = [];
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
            break;
    }
    stageValues.forEach((item, index) => {
        item.textContent = stageValuesArr[index];
    });

    difficultyButtons.forEach(item => {
        item.style.border = 'solid #000000 3px';
    });
    deck.style.opacity = '0';
    current.style.opacity = '0';

};