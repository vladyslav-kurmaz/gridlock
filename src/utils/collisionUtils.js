// // Перевірка колізій
// export const checkCollision = (block1, block2) => {
//   const x1 = block1.position.col;
//   const y1 = block1.position.row;
//   const w1 = block1.size.width;
//   const h1 = block1.size.height;

//   const x2 = block2.position.col;
//   const y2 = block2.position.row;
//   const w2 = block2.size.width;
//   const h2 = block2.size.height;

//   return !(x1 + w1 <= x2 || x1 >= x2 + w2 || y1 + h1 <= y2 || y1 >= y2 + h2);
// }

// // Перевірка на одну полосу для кількості блоків з однаковою орієнтацією
// export const checkMaxBlocksInRow = (blocks, newBlock) => {
//   let count = 0;

//   for (let block of blocks) {
//     if (
//       block.orientation === newBlock.orientation &&
//       block.position.row === newBlock.position.row
//     ) {
//       count++;
//     }
//   }

//   return count >= 2;
// }

// // Перевірка, чи не стоять дві великі машини з однаковою орієнтацією на одній лінії
// export const checkForLargeBlocksInSameLine = (blocks, newBlock) => {
//   if (newBlock.orientation === 'horizontal' && newBlock.size.width === 3) {
//     for (let block of blocks) {
//       if (
//         block.orientation === 'horizontal' &&
//         block.size.width === 3 &&
//         block.position.row === newBlock.position.row
//       ) {
//         return true;
//       }
//     }
//   }

//   if (newBlock.orientation === 'vertical' && newBlock.size.height === 3) {
//     for (let block of blocks) {
//       if (
//         block.orientation === 'vertical' &&
//         block.size.height === 3 &&
//         block.position.col === newBlock.position.col
//       ) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// // Перевірка, чи не зіштовхуються блоки або на одній полосі знаходяться велика і маленька машини
// export const checkForOverlappingOrDifferentSize = (blocks, newBlock) => {
//   if (newBlock.orientation === 'horizontal') {
//     for (let block of blocks) {
//       if (
//         block.orientation === 'horizontal' &&
//         block.position.row === newBlock.position.row
//       ) {
//         if (
//           (block.size.width === 2 && newBlock.size.width === 3) ||
//           (block.size.width === 3 && newBlock.size.width === 2)
//         ) {
//           return true;
//         }
//       }
//     }
//   }

//   if (newBlock.orientation === 'vertical') {
//     for (let block of blocks) {
//       if (
//         block.orientation === 'vertical' &&
//         block.position.col === newBlock.position.col
//       ) {
//         if (
//           (block.size.height === 2 && newBlock.size.height === 3) ||
//           (block.size.height === 3 && newBlock.size.height === 2)
//         ) {
//           return true;
//         }
//       }
//     }
//   }

//   return false;
// };


// Перевірка колізії між блоками
export const checkCollision = (block1, block2) => {
  const x1 = block1.position.col;
  const y1 = block1.position.row;
  const w1 = block1.size.width;
  const h1 = block1.size.height;

  const x2 = block2.position.col;
  const y2 = block2.position.row;
  const w2 = block2.size.width;
  const h2 = block2.size.height;

  return !(x1 + w1 <= x2 || x1 >= x2 + w2 || y1 + h1 <= y2 || y1 >= y2 + h2);
};

// Перевірка на одну полосу для кількості блоків з однаковою орієнтацією
export const checkMaxBlocksInRow = (blocks, newBlock) => {
  let count = 0;

  for (let block of blocks) {
    if (
      block.orientation === newBlock.orientation &&
      block.position.row === newBlock.position.row
    ) {
      count++;
    }
  }

  return count >= 2;
};

// Перевірка, чи не стоять дві великі машини з однаковою орієнтацією на одній лінії
export const checkForLargeBlocksInSameLine = (blocks, newBlock) => {
  if (newBlock.orientation === 'horizontal' && newBlock.size.width === 3) {
    for (let block of blocks) {
      if (
        block.orientation === 'horizontal' &&
        block.size.width === 3 &&
        block.position.row === newBlock.position.row
      ) {
        return true;
      }
    }
  }

  if (newBlock.orientation === 'vertical' && newBlock.size.height === 3) {
    for (let block of blocks) {
      if (
        block.orientation === 'vertical' &&
        block.size.height === 3 &&
        block.position.col === newBlock.position.col
      ) {
        return true;
      }
    }
  }

  return false;
};

// Перевірка, чи не зіштовхуються блоки або на одній полосі знаходяться велика і маленька машини
export const checkForOverlappingOrDifferentSize = (blocks, newBlock) => {
  if (newBlock.orientation === 'horizontal') {
    for (let block of blocks) {
      if (
        block.orientation === 'horizontal' &&
        block.position.row === newBlock.position.row
      ) {
        if (
          (block.size.width === 2 && newBlock.size.width === 3) ||
          (block.size.width === 3 && newBlock.size.width === 2)
        ) {
          return true;
        }
      }
    }
  }

  if (newBlock.orientation === 'vertical') {
    for (let block of blocks) {
      if (
        block.orientation === 'vertical' &&
        block.position.col === newBlock.position.col
      ) {
        if (
          (block.size.height === 2 && newBlock.size.height === 3) ||
          (block.size.height === 3 && newBlock.size.height === 2)
        ) {
          return true;
        }
      }
    }
  }

  return false;
};
