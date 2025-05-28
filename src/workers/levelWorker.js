import { generateValidLevel } from '../utils/generateLevel';
/* eslint-disable no-restricted-globals */
self.onmessage = (e) => {
  const level = e.data;
  const result = generateValidLevel(level);
  self.postMessage(result);
};