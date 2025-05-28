import {easy1, easy2, easy3, easy4, easy5} from './easy/easy';
import { medium1, medium2 } from './medium/medium';
import { hard1, hard2 } from './hard/hard';
import { evil1, evil2 } from './evil/evil';

const levelSets = {
  easy: [easy1, easy2, easy3, easy4, easy5],
  medium: [medium1, medium2],
  hard: [hard1, hard2],
  evil: [evil1, evil2],
};

export const getLevelsByCategory = (category) => levelSets[category] || [];