import { bigCars, mainCarImage, smallCars } from '../constants/carsImage'
import { findPathForMainCar } from './solution'
import { gridSize } from '../constants'

let bigCarsCount = 0

const createField = () => {
  return Array.from({ length: gridSize.rows }, () =>
    Array(gridSize.cols).fill(0)
  ) 
}


const placeMainCar = (field) => {
  const row = 2
  const col = Math.floor(Math.random() * 2)
  field[row][col] = 'X'
  field[row][col + 1] = 'X'

  return { row, col }
}

const canPlaceBlock = (field, row, col, size, orientation) => {
  if (orientation === 'horizontal') {
    if (col + size.width > gridSize.cols) return false
    for (let i = col; i < col + size.width; i++) {
      if (field[row][i] !== 0) return false
    }
  } else {
    if (row + size.height > gridSize.rows) return false
    for (let i = row; i < row + size.height; i++) {
      if (field[i][col] !== 0) return false
    }
  }
  return true
}

const checkDirectionRestriction = (field, index, size, orientation) => {
  let countSize2 = 0
  let countSize3 = 0

  const isHorizontal = orientation === 'horizontal'

  const length = isHorizontal ? gridSize.cols : gridSize.rows
  const check = isHorizontal
    ? (row, col) => field[row][col]
    : (row, col) => field[col][row]

  for (let i = 0; i < length; i++) {
    const row = isHorizontal ? index : i 
    const col = isHorizontal ? i : index

    if (check(row, col) !== 0 && check(row, col) !== 'X') {
      const block = check(row, col)

      if (block === 2) {
        countSize2++
      }

      if (block === 3) {
        countSize3++
      }
    }
  }

  if (
    (size.width === 2 && countSize2 >= 2) ||
    (size.height === 2 && countSize2 >= 2) ||
    (size.width === 3 && countSize3 >= 1) ||
    (size.height === 3 && countSize3 >= 1)
  ) {
    return true
  }

  return false
}

const placeBlock = (field, id, size, orientation) => {
  let placed = null

  for (let attempt = 0; attempt < 50; attempt++) {
    let row = Math.floor(Math.random() * gridSize.rows)
    const col = Math.floor(Math.random() * gridSize.cols)

    if (orientation === 'horizontal' && row === 2) {
      row = row === 2 ? (row + 1) % gridSize.rows : row
    }

    if (
      checkDirectionRestriction(
        field,
        orientation === 'horizontal' ? row : col,
        size,
        orientation
      )
    ) {
      continue
    }

    if (canPlaceBlock(field, row, col, size, orientation)) {
      for (let i = 0; i < size.height; i++) {
        for (let j = 0; j < size.width; j++) {
          field[row + i][col + j] = id
          if (orientation === 'horizontal') {
            if (size.width === 2) {
              field[row + i][col + 1] = id
            }
            if (size.width === 3) {
              field[row + i][col + 1] = id
              field[row + i][col + 2] = id
            }
          }

          if (orientation === 'vertical') {
            if (size.height === 2) {
              field[row + 1][col + j] = id 
            }
            if (size.height === 3) {
              field[row + 1][col + j] = id
              field[row + 2][col + j] = id 
            }
          }
        }
      }
      placed = { row, col }
      break
    }
  }

  return placed
}

const generateLevel = (difficulty) => {
  const field = createField()
  const blocks = []

  const mainCarPosition = placeMainCar(field)
  blocks.push({
    id: 'red',
    position: mainCarPosition,
    size: { width: 2, height: 1 },
    orientation: 'horizontal',
    imageUrl: mainCarImage,
    direction: 'right',
    isTarget: true
  })

  let maxBlocks =
    difficulty === 'easy'
      ? 11
      : difficulty === 'medium'
      ? 12
      : difficulty === 'hard'
      ? 13
      : 14

  for (let i = 1; i <= maxBlocks; i++) {
    const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical'
    const getCarSize = bigCarsCount <= 3 ? (Math.random() > 0.5 ? 2 : 3) : 2
    const size =
      orientation === 'horizontal'
        ? { width: getCarSize, height: 1 }
        : { width: 1, height: getCarSize }

    const placed = placeBlock(field, `block${i}`, size, orientation)

    if (placed) {
      if (bigCarsCount < 3 && (size.width === 3 || size.height === 3)) {
        bigCarsCount++
      }
      blocks.push({
        id: `block${i}`,
        size,
        orientation,
        imageUrl:
          size.width === 2 || size.height === 2
            ? smallCars[Math.floor(Math.random() * smallCars.length)]
            : bigCars[Math.floor(Math.random() * bigCars.length)],
        position: placed,
        direction:
          orientation === 'horizontal'
            ? Math.random() > 0.5
              ? 'left'
              : 'right'
            : Math.random() > 0.5
            ? 'top'
            : 'bottom'
      })
    }
  }

  return {
    gridSize,
    blocks,
    field,
    solutionSteps: []
  }
}

const generateValidLevel = (difficulty) => {
  let level = generateLevel(difficulty) 
  const { field, blocks } = level

  placeMainCar(field)

  const getMinMaxSteps = (difficult) => {
    switch (difficult) {
      case 'easy':
        return { min: 10, max: 14 }
      case 'medium':
        return { min: 15, max: 20 }
      case 'hard':
        return { min: 20, max: 30 }
      default:
        return { min: 30, max: 40 }
    }
  }

  const result = findPathForMainCar(
    blocks,
    getMinMaxSteps(difficulty).min,
    getMinMaxSteps(difficulty).max
  )
  const { field: updatedField, solutionSteps } = result

  const countSolutionsSteps = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return solutionSteps.length >= 10 && solutionSteps.length <= 14
      case 'medium':
        return solutionSteps.length >= 15 && solutionSteps.length <= 20
      case 'hard':
        return solutionSteps.length >= 20 && solutionSteps.length <= 30
      default:
        return solutionSteps.length >= 30 && solutionSteps.length <= 40
    }
  }

  if (countSolutionsSteps(difficulty)) {
    return {
      field: updatedField,
      blocks,
      solutionSteps,
      gridSize,
      steps: solutionSteps.length
    }
  } else {
    return generateValidLevel(difficulty)
  }
}

export { generateValidLevel }