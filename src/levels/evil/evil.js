import mainCar from '../../assets/image/main-car.svg'
import green from '../../assets/image/Level 1/new/download (11).svg'
import pink from '../../assets/image/Level 4/new/download (2).svg'
import orange from '../../assets/image/Level 1/new/download (9).svg'
import pinkSmall from '../../assets/image/Level 1/new/download (8).svg'
import greenBig from '../../assets/image/Level 1/new/download (3).svg'
import gray from '../../assets/image/Level 1/new/download (1).svg'

import brown from '../../assets/image/Level 3/new/download (1).svg'
import pinkBig from '../../assets/image/Level 4/new/download (10).svg'
import lightYelow from '../../assets/image/Level 1/new/download (4).svg'
import bordovyi from '../../assets/image/Level 4/new/download (6).svg'
import green1 from '../../assets/image/Level 4/new/download (11).svg'
import yellow from '../../assets/image/Level 1/new/download (6).svg'

import blueSmall from '../../assets/image/Level 1/new/download (2).svg'

export const evil1 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 30,
  blocks: [
    {
      id: 'red',
      position: { row: 2, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      isTarget: true,
      imageUrl: mainCar,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block1',
      position: { row: 0, col: 0 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: yellow,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block2',
      position: { row: 0, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 0, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block4',
      position: { row: 1, col: 1 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block5',
      position: { row: 1, col: 4 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: orange,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block6',
      position: { row: 2, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pink,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block7',
      position: { row: 2, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block8',
      position: { row: 5, col: 0 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: pinkBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block9',
      position: { row: 4, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green1,
      animationClass: '',
      direction: 'top'
    },

    {
      id: 'block10',
      position: { row: 4, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: pinkSmall,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block11',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: brown,
      animationClass: '',
      direction: 'bottom'
    }
  ],
  solutionSteps: [
    { id: 'block7', position: { row: 3, col: 2 } },
    { id: 'red', position: { row: 2, col: 1 } },
    { id: 'block1', position: { row: 3, col: 0 } },
    { id: 'block4', position: { row: 1, col: 0 } },
    { id: 'block2', position: { row: 0, col: 0 } },
    { id: 'block6', position: { row: 0, col: 3 } },
    { id: 'block9', position: { row: 2, col: 3 } },
    { id: 'red', position: { row: 2, col: 0 } },
    { id: 'block7', position: { row: 2, col: 2 } },
    { id: 'block10', position: { row: 4, col: 1 } },
    { id: 'block5', position: { row: 3, col: 4 } },
    { id: 'block11', position: { row: 4, col: 5 } },
    { id: 'block3', position: { row: 2, col: 5 } },
    { id: 'block9', position: { row: 4, col: 3 } },
    { id: 'block6', position: { row: 2, col: 3 } },
    { id: 'block4', position: { row: 1, col: 3 } },
    { id: 'block2', position: { row: 0, col: 4 } },
    { id: 'block7', position: { row: 0, col: 2 } },
    { id: 'red', position: { row: 2, col: 1 } },
    { id: 'block1', position: { row: 0, col: 0 } },
    { id: 'block10', position: { row: 4, col: 0 } },
    { id: 'red', position: { row: 2, col: 0 } },
    { id: 'block7', position: { row: 3, col: 2 } },
    { id: 'red', position: { row: 2, col: 1 } },
    { id: 'block1', position: { row: 2, col: 0 } },
    { id: 'block4', position: { row: 1, col: 0 } },
    { id: 'block2', position: { row: 0, col: 0 } },
    { id: 'block6', position: { row: 0, col: 3 } },
    { id: 'block3', position: { row: 0, col: 5 } },
    { id: 'red', position: { row: 2, col: 6 } }
  ]
}

export const evil2 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 37,
  blocks: [
    {
      id: 'red',
      position: { row: 2, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      isTarget: true,
      imageUrl: mainCar,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block1',
      position: { row: 2, col: 4 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: yellow,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block2',
      position: { row: 0, col: 3 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block3',
      position: { row: 1, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block4',
      position: { row: 3, col: 1 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: gray,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block5',
      position: { row: 0, col: 0 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: orange,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block6',
      position: { row: 3, col: 0 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pink,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block7',
      position: { row: 1, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block8',
      position: { row: 5, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: pinkBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block9',
      position: { row: 4, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green1,
      animationClass: '',
      direction: 'right'
    },

    {
      id: 'block10',
      position: { row: 4, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pinkSmall,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block11',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: brown,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block12',
      position: { row: 5, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'left'
    }
  ],
  solutionSteps: [
    { id: 'block3', position: { row: 1, col: 3 } },
    { id: 'block11', position: { row: 0, col: 5 } },
    { id: 'block10', position: { row: 3, col: 5 } },
    { id: 'block8', position: { row: 5, col: 3 } },
    { id: 'block12', position: { row: 5, col: 1 } },
    { id: 'block6', position: { row: 4, col: 0 } },
    { id: 'block4', position: { row: 3, col: 0 } },
    { id: 'block9', position: { row: 4, col: 1 } },
    { id: 'block1', position: { row: 3, col: 4 } },
    { id: 'block7', position: { row: 2, col: 2 } },
    { id: 'block3', position: { row: 1, col: 0 } },
    { id: 'block7', position: { row: 1, col: 2 } },
    { id: 'block1', position: { row: 1, col: 4 } },
    { id: 'block4', position: { row: 3, col: 3 } },
    { id: 'block9', position: { row: 4, col: 3 } },
    { id: 'block7', position: { row: 3, col: 2 } },
    { id: 'red', position: { row: 2, col: 2 } },
    { id: 'block3', position: { row: 1, col: 2 } },
    { id: 'block11', position: { row: 1, col: 5 } },
    { id: 'block2', position: { row: 0, col: 4 } },
    { id: 'block5', position: { row: 0, col: 1 } },
    { id: 'block6', position: { row: 0, col: 0 } },
    { id: 'red', position: { row: 2, col: 0 } },
    { id: 'block3', position: { row: 1, col: 1 } },
    { id: 'block12', position: { row: 5, col: 0 } },
    { id: 'block7', position: { row: 4, col: 2 } },
    { id: 'block4', position: { row: 3, col: 0 } },
    { id: 'block7', position: { row: 2, col: 2 } },
    { id: 'block9', position: { row: 4, col: 0 } },
    { id: 'block7', position: { row: 4, col: 2 } },
    { id: 'block1', position: { row: 3, col: 4 } },
    { id: 'red', position: { row: 2, col: 3 } },
    { id: 'block6', position: { row: 1, col: 0 } },
    { id: 'block5', position: { row: 0, col: 0 } },
    { id: 'block2', position: { row: 0, col: 3 } },
    { id: 'block11', position: { row: 0, col: 5 } },
    { id: 'red', position: { row: 2, col: 6 } }
  ]
}
