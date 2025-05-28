// blockGenerator.js
import { smallCars, bigCars, mainCarImage } from '../constants/carsImage'; // Зображення машинок

const getRandomImage = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Функція для перевірки наявності вільного місця для блоку на сітці
const isSpaceAvailable = (grid, size, position, orientation) => {
  const { row, col } = position;

  if (orientation === 'horizontal') {
    // Перевірка на горизонтальний блок
    if (col + size.width > grid[0].length) return false; // Не вміщується по колонках

    for (let i = col; i < col + size.width; i++) {
      if (grid[row][i] !== null) return false; // Якщо є блок, повертаємо false
    }
  } else {
    // Перевірка на вертикальний блок
    if (row + size.height > grid.length) return false; // Не вміщується по рядках

    for (let i = row; i < row + size.height; i++) {
      if (grid[i][col] !== null) return false; // Якщо є блок, повертаємо false
    }
  }

  return true;
};

// Функція для генерації одного блоку
const generateBlock = (grid, id) => {
  let orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
  let size = { width: 2, height: 1 }; // Початковий розмір для маленької машинки (2x1)

  // Рандомний вибір між маленьким або великим блоком, перевіряючи вільні місця
  if (Math.random() > 0.5) {
    size = { width: 3, height: 1 }; // Встановлюємо розмір для великої машинки (3x1)
  }

  let position;
  let imageUrl;
  let direction;

  // Пошук вільного місця для блоку
  for (let attempts = 0; attempts < 50; attempts++) { // Пробуємо максимум 50 разів
    const row = Math.floor(Math.random() * grid.length);
    const col = Math.floor(Math.random() * grid[0].length);
    position = { row, col };

    if (isSpaceAvailable(grid, size, position, orientation)) {
      // Якщо знайшли місце, визначаємо напрямок і зображення
      direction = orientation === 'horizontal' ? (Math.random() > 0.5 ? 'left' : 'right') : (Math.random() > 0.5 ? 'top' : 'bottom');
      imageUrl = size.width === 2 || size.height === 2 ? getRandomImage(smallCars) : getRandomImage(bigCars);

      // Записуємо блок у сітку
      for (let i = 0; i < size.height; i++) {
        for (let j = 0; j < size.width; j++) {
          grid[position.row + i][position.col + j] = id; // Маркуємо клітинки сітки як зайняті
        }
      }

      return {
        id,
        position,
        size,
        orientation,
        direction,
        imageUrl,
      };
    }
  }

  // Якщо не знайшли вільного місця після 50 спроб, повертаємо null
  return null;
};

export { generateBlock };
