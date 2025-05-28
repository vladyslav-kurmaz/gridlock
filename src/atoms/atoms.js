import { atom } from 'jotai'

export const openRulesAtom = atom(false)
export const openResetAtom = atom(false)
export const openSettingsAtom = atom(false)
export const openRatingAtom = atom(false)
export const openMenuAtom = atom(false)
export const openSolutionAtom = atom(false)
export const showSolutionAtom = atom(false)
export const isColoredModeAtom = atom(true)

export const initialBlocklockAtom = atom([])
export const blocksAtom = atom([])
export const moveCountAtom = atom(0)
export const isWinAtom = atom(false)

export const runningAtom = atom(false)
export const timeAtom = atom(0)
export const isPauseAtop = atom(false)

const getFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const totalPlayedAtom = atom(getFromLocalStorage('totalPlayed', 0)); 
export const winRatioAtom = atom(getFromLocalStorage('winRatio', 0));
export const winStreakAtom = atom(getFromLocalStorage('winStreak', 0)); 

export const averageWinTimeAtom = atom(getFromLocalStorage('averageWinTime', "00:00")); 
export const fastestWinTimeAtom = atom(getFromLocalStorage('fastestWinTime', "00:00"));
export const latestWinTimeAtom = atom(getFromLocalStorage('latestWinTime', "00:00")); 
