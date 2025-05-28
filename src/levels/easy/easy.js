import purple from '../../assets/image/Level 1/new/download (7).svg'

import mainCar from '../../assets/image/main-car.svg'
import green from '../../assets/image/Level 1/new/download (11).svg'
import yellowBig from '../../assets/image/Level 4/new/download (7).svg'
import pink from '../../assets/image/Level 4/new/download (2).svg'
import orange from '../../assets/image/Level 1/new/download (9).svg'
import orangeSmall from '../../assets/image/Level 1/new/download.svg'
import pinkSmall from '../../assets/image/Level 1/new/download (8).svg'
import blue from '../../assets/image/Level 1/new/download (5).svg'
import greenBig from '../../assets/image/Level 1/new/download (3).svg'
import gray from '../../assets/image/Level 1/new/download (1).svg'

import brown from '../../assets/image/Level 3/new/download (1).svg'
import pinkBig from '../../assets/image/Level 1/new/download (7).svg'
import lightYelow from '../../assets/image/Level 1/new/download (4).svg'
import purpuleSmall from '../../assets/image/Level 4/new/download (1).svg'
import bordovyi from '../../assets/image/Level 4/new/download (6).svg'
import green1 from '../../assets/image/Level 4/new/download (11).svg'
import yellow from '../../assets/image/Level 1/new/download (6).svg'

import blueSmall from '../../assets/image/Level 1/new/download (2).svg'

export const easy1 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 10,
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
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block2',
      position: { row: 0, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: purple,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 1, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pink,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block4',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pinkSmall,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block5',
      position: { row: 0, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: yellow,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block6',
      position: { row: 2, col: 4 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: orange,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block7',
      position: { row: 3, col: 1 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: blue,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block8',
      position: { row: 4, col: 0 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block9',
      position: { row: 5, col: 1 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: gray,
      animationClass: '',
      direction: 'left'
    }
  ],
  solutionSteps: [
    {
      id: 'block4',
      position: { row: 4, col: 5 }
    },
    {
      id: 'block5',
      position: { row: 2, col: 5 }
    },
    {
      id: 'block2',
      position: { row: 0, col: 3 }
    },
    {
      id: 'block3',
      position: { row: 0, col: 2 }
    },
    {
      id: 'block6',
      position: { row: 3, col: 4 }
    },
    {
      id: 'red',
      position: { row: 2, col: 3 }
    },
    {
      id: 'block3',
      position: { row: 1, col: 2 }
    },
    {
      id: 'block2',
      position: { row: 0, col: 2 }
    },
    {
      id: 'block5',
      position: { row: 0, col: 5 }
    },
    {
      id: 'red',
      position: { row: 2, col: 8 }
    }
  ]
}

export const easy2 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 10,
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
      id: 'yellowTruck',
      position: { row: 0, col: 1 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: yellowBig,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'green',
      position: { row: 1, col: 0 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: orangeSmall,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'brown',
      position: { row: 3, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: brown,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'blue',
      position: { row: 1, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'green1',
      position: { row: 3, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green1,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'orange',
      position: { row: 0, col: 3 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'pink',
      position: { row: 1, col: 5 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: pinkBig,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'greenBig',
      position: { row: 4, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'yellowSmall',
      position: { row: 5, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: gray,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 5, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellow,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block4',
      position: { row: 4, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: purpuleSmall,
      animationClass: '',
      direction: 'bottom'
    }
  ]
  ,
  solutionSteps: [
    {
      id: 'red',
      position: { row: 2, col: 3 },
    },
    {
      id: 'blue',
      position: { row: 1, col: 3 },

    },
    {
      id: 'green1',
      position: { row: 0, col: 2 },

    },
    {
      id: 'brown',
      position: { row: 3, col: 3 },

    },
    {
      id: 'block4',
      position: { row: 3, col: 1 },
    },
    {
      id: 'block3',
      position: { row: 5, col: 0 },

    },
    {
      id: 'greenBig',
      position: { row: 4, col: 2 },

    },
    {
      id: 'yellowSmall',
      position: { row: 5, col: 2 },

    },
    {
      id: 'pink',
      position: { row: 3, col: 5},
    },
    {
      id: 'red',
      position: { row: 2, col: 8 },
    },
  
  ]
}

export const easy3 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 10,
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
      position: { row: 0, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block2',
      position: { row: 0, col: 4 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellow,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 1, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: purple,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block4',
      position: { row: 2, col: 4 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green1,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block5',
      position: { row: 3, col: 5 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block6',
      position: { row: 4, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: brown,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block7',
      position: { row: 4, col: 0 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block8',
      position: { row: 2, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block9',
      position: { row: 3, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: purple,
      animationClass: '',
      direction: 'bottom'
    }
  ]
}

export const easy4 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 10,
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
      position: { row: 0, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block2',
      position: { row: 0, col: 4 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pinkBig,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block3',
      position: { row: 1, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: orangeSmall,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block4',
      position: { row: 2, col: 3 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block5',
      position: { row: 3, col: 1 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: pink,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block6',
      position: { row: 4, col: 4 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block7',
      position: { row: 4, col: 0 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellow,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block8',
      position: { row: 1, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block9',
      position: { row: 5, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: green1,
      animationClass: '',
      direction: 'left'
    }
  ]
}

export const easy5 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 10,
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
      position: { row: 0, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block2',
      position: { row: 1, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellowBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 2, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block4',
      position: { row: 3, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: blueSmall,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block5',
      position: { row: 3, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: brown,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block6',
      position: { row: 4, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: green,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block7',
      position: { row: 5, col: 4 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: orangeSmall,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block8',
      position: { row: 1, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: pinkSmall,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block9',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: yellow,
      animationClass: '',
      direction: 'bottom'
    }
  ]
}

// export default easy;
