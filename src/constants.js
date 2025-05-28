import { getArrowIndex } from "./utils/getAttowIndex"
import { getCellSize } from "./utils/getCellSize"
import { getPaddingSize } from "./utils/getPaddingSize"
import de from './assets/image/locale/de.svg'
import en from './assets/image/locale/en.svg'

export const gridSize = { rows: 6, cols: 6 };

export const levels = [
  { id: 'indexEasy', title: 'easy', color: 'green', link: '/easy' },
  { id: 'indexMedium', title: 'medium', color: 'orange', link: '/medium' },
  { id: 'indexHard', title: 'hard', color: 'red', link: '/hard' },
  { id: 'indexEvil', title: 'evil', color: 'blue', link: '/evil' }
]

export const CELL_SIZE = getCellSize()
export const BORDER_PADDING = getPaddingSize()
export const indexArrow = getArrowIndex()

export const settingsLanguages = {
  languages: [
    // { value: "co", label: "Corsu" },
    { value: "de", label: "Deutsch", src: de },
    { value: "en", label: "English", src: en },
    // { value: "es", label: "Español" },
    // { value: "eu", label: "Euskara" },
    // { value: "fr", label: "Français" },
    // { value: "hu", label: "Magyar" },
    // { value: "ja", label: "日本語" },
    // { value: "nl", label: "Nederlands" },
    // { value: "pl", label: "Polski" },
    // { value: "pt", label: "Português" },
  ],
};

export const MENU_NAVIGATIONS = [
  {
    label: "newGame",
    newGame: true,
  },
  {
    label: "options",
  },
  {
    label: "howToPlay",
  },
  {
    label: "statistics",
  },
  {
    label: "back",
    to: '/'
  },
];