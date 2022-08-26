import {
    current,
    deck,
    stageValues
} from "../../constants.js";

import {
    currentDeckArr
} from "./pickDifficulty.js";

import {
    stageValuesArr,
    stageValuesArrDynamic
} from './pickAncient.js';

const cardPick = () => {
    current.style.background = currentDeckArr.pop();


    if (/green/.test(current.style.background)) {
        if (stageValuesArrDynamic[0] !== 0) stageValuesArrDynamic[0]--;
        else if (stageValuesArrDynamic[3] !== 0) stageValuesArrDynamic[3]--;
        else if (stageValuesArrDynamic[6] !== 0) stageValuesArrDynamic[6]--;
    } else if (/brown/.test(current.style.background)) {
        if (stageValuesArrDynamic[1] !== 0) stageValuesArrDynamic[1]--;
        else if (stageValuesArrDynamic[4] !== 0) stageValuesArrDynamic[4]--;
        else if (stageValuesArrDynamic[7] !== 0) stageValuesArrDynamic[7]--;
    } else if (/blue/.test(current.style.background)) {
        if (stageValuesArrDynamic[2] !== 0) stageValuesArrDynamic[2]--;
        else if (stageValuesArrDynamic[5] !== 0) stageValuesArrDynamic[5]--;
        else if (stageValuesArrDynamic[8] !== 0) stageValuesArrDynamic[8]--;
    }

    stageValues.forEach((item, index) => item.textContent = stageValuesArrDynamic[index]);

    if (currentDeckArr.length === 0) deck.style.opacity = '0';
    current.style.opacity = '1';
    current.style.backgroundSize = `cover`;
};

export {
    cardPick
};