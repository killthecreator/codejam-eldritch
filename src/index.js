/* tsc ./src/index.ts */
import {
    ancientsContainer,
    difficultyButtons,
    deck
} from './constants.js';

import {
    pickAncient
} from './modules/Functions/pickAncient.js';

import {
    pickDifficulty
} from './modules/Functions/pickDifficulty.js';

import {
    cardPick
} from './modules/Functions/cardPick.js';

ancientsContainer.addEventListener('click', (e) => pickAncient(e));

difficultyButtons.forEach(item => {
    item.addEventListener('click', (e) => pickDifficulty(e));
});

deck.addEventListener('click', cardPick);