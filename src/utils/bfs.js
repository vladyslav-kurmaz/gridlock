// bfs.js

// Функція для пошуку можливих рухів для блоків
const getPossibleMoves = (block, gridSize) => {
  const moves = [];
  const directions = [
    { row: 0, col: 1, direction: 'right' },
    { row: 0, col: -1, direction: 'left' },
    { row: 1, col: 0, direction: 'down' },
    { row: -1, col: 0, direction: 'up' },
  ];

  directions.forEach(({ row, col, direction }) => {
    const newPosition = { row: block.position.row + row, col: block.position.col + col };
    if (
      newPosition.row >= 0 &&
      newPosition.row < gridSize.rows &&
      newPosition.col >= 0 &&
      newPosition.col < gridSize.cols
    ) {
      moves.push({ newPosition, direction });
    }
  });

  return moves;
};

// Алгоритм BFS для пошуку рішення
const bfs = (blocks, gridSize, targetPosition) => {
  const startPosition = blocks.find(block => block.id === 'red').position;
  const visited = new Set();
  const queue = [{ position: startPosition, path: [] }];
  visited.add(`${startPosition.row},${startPosition.col}`);

  // Пошук шляхів для головної машини
  while (queue.length > 0) {
    const { position, path } = queue.shift();

    // Якщо головна машина досягла цільової позиції
    if (position.row === targetPosition.row && position.col === targetPosition.col) {
      return path;
    }

    // Перевірка всіх можливих рухів для кожного блоку
    const possibleMoves = getPossibleMoves({ position }, gridSize);
    possibleMoves.forEach(({ newPosition, direction }) => {
      const key = `${newPosition.row},${newPosition.col}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({
          position: newPosition,
          path: [...path, { id: 'red', position: newPosition, direction }],
        });
      }
    });
  }

  return [];
};

export { bfs };
