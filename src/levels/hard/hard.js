import mainCar from '../../assets/image/main-car.svg'
import green from '../../assets/image/Level 1/new/download (11).svg'
import pink from '../../assets/image/Level 4/new/download (2).svg'
import orange from '../../assets/image/Level 1/new/download (9).svg'
import orangeSmall from '../../assets/image/Level 1/new/download.svg'
import blue from '../../assets/image/Level 1/new/download (5).svg'
import greenBig from '../../assets/image/Level 1/new/download (3).svg'
import gray from '../../assets/image/Level 1/new/download (1).svg'
import lightYelow from '../../assets/image/Level 1/new/download (4).svg'
import green1 from '../../assets/image/Level 4/new/download (11).svg'
import yellow from '../../assets/image/Level 1/new/download (6).svg'
import mint from '../../assets/image/Level 3/new/download (11).svg'
import blueSmall from '../../assets/image/Level 1/new/download (2).svg'

export const hard1 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 22,
  blocks: [
    {
      id: 'red',
      position: { row: 2, col: 1 },
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
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: blue,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block2',
      position: { row: 0, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pink,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block4',
      position: { row: 1, col: 0 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green1,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block5',
      position: { row: 1, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellow,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block6',
      position: { row: 1, col: 4 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: orange,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block7',
      position: { row: 3, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block8',
      position: { row: 3, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: gray,
      animationClass: '',
      direction: 'top'
    },

    {
      id: 'block9',
      position: { row: 4, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block10',
      position: { row: 5, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: orangeSmall,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block11',
      position: { row: 4, col: 3 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: mint,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block12',
      position: { row: 5, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'top'
    }
  ],
  solutionSteps: [
    {
      id: 'block1',
      position: { row: 0, col: 2 }
    },
    {
      id: 'block4',
      position: { row: 0, col: 0 }
    },
    {
      id: 'red',
      position: { row: 2, col: 0 }
    },
    {
      id: 'block8',
      position: { row: 2, col: 2 }
    },
    {
      id: 'block11',
      position: { row: 4, col: 2 }
    },
    {
      id: 'block6',
      position: { row: 2, col: 4 }
    },
    {
      id: 'block5',
      position: { row: 1, col: 3 }
    },
    {
      id: 'block8',
      position: { row: 1, col: 2 }
    },
    {
      id: 'block7',
      position: { row: 3, col: 2 }
    },
    {
      id: 'block9',
      position: { row: 3, col: 1 }
    },
    {
      id: 'block10',
      position: { row: 5, col: 0 }
    },
    {
      id: 'block12',
      position: { row: 5, col: 2 }
    },
    {
      id: 'block6',
      position: { row: 3, col: 4 }
    },
    {
      id: 'block3',
      position: { row: 3, col: 5 }
    },
    {
      id: 'block2',
      position: { row: 1, col: 5 }
    },
    {
      id: 'block1',
      position: { row: 0, col: 3 }
    },
    {
      id: 'block8',
      position: { row: 0, col: 2 }
    },
    {
      id: 'red',
      position: { row: 2, col: 3 }
    },
    {
      id: 'block8',
      position: { row: 1, col: 2 }
    },
    {
      id: 'block1',
      position: { row: 0, col: 1 }
    },
    {
      id: 'block2',
      position: { row: 0, col: 5 }
    },
    {
      id: 'red',
      position: { row: 2, col: 6 }
    }
  ]
}

export const hard2 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 23,
  blocks: [
    {
      id: 'red',
      position: { row: 2, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      isTarget: true,
      imageUrl: mainCar,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block1',
      position: { row: 1, col: 4 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: blue,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block2',
      position: { row: 0, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pink,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block5',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: yellow,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block6',
      position: { row: 1, col: 0 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: orange,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block7',
      position: { row: 5, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block8',
      position: { row: 1, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: gray,
      animationClass: '',
      direction: 'top'
    },

    {
      id: 'block9',
      position: { row: 4, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block10',
      position: { row: 4, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: orangeSmall,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block11',
      position: { row: 4, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: mint,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block12',
      position: { row: 5, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block3',
      position: { row: 3, col: 1 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'right'
    }
  ],
  solutionSteps: [
    {
      id: 'block8',
      position: { row: 0, col: 1 }
    },
    {
      id: 'block6',
      position: { row: 0, col: 0 }
    },
    {
      id: 'red',
      position: { row: 2, col: 1 }
    },
    {
      id: 'block3',
      position: { row: 3, col: 0 }
    },
    {
      id: 'block10',
      position: { row: 0, col: 3 }
    },
    {
      id: 'block11',
      position: { row: 4, col: 3 }
    },
    {
      id: 'block12',
      position: { row: 5, col: 3 }
    },
    {
      id: 'block5',
      position: { row: 4, col: 5 }
    },
    {
      id: 'block1',
      position: { row: 0, col: 4 }
    },
    {
      id: 'block3',
      position: { row: 3, col: 3 }
    },
    {
      id: 'block9',
      position: { row: 3, col: 2 }
    },
    {
      id: 'block7',
      position: { row: 5, col: 1 }
    },
    {
      id: 'block6',
      position: { row: 3, col: 0 }
    },
    {
      id: 'red',
      position: { row: 2, col: 0 }
    },
    {
      id: 'block9',
      position: { row: 0, col: 2 }
    },
    {
      id: 'block3',
      position: { row: 3, col: 1 }
    },
    {
      id: 'red',
      position: { row: 2, col: 1 }
    },
    {
      id: 'block6',
      position: { row: 0, col: 0 }
    },
    {
      id: 'block7',
      position: { row: 5, col: 0 }
    },
    {
      id: 'block11',
      position: { row: 4, col: 0 }
    },
    {
      id: 'block12',
      position: { row: 5, col: 2 }
    },
    {
      id: 'block1',
      position: { row: 3, col: 4 }
    },
    {
      id: 'red',
      position: { row: 2, col: 8 }
    }
  ]
}
