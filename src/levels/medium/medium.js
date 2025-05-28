import mainCar from '../../assets/image/main-car.svg'
import green from '../../assets/image/Level 1/new/download (11).svg'
import yellowBig from '../../assets/image/Level 4/new/download (7).svg'
import pink from '../../assets/image/Level 2/new/download (1).svg'
import pinkSmall from '../../assets/image/Level 1/new/download (8).svg'
import blue from '../../assets/image/Level 1/new/download (5).svg'
import greenBig from '../../assets/image/Level 1/new/download (3).svg'
import gray from '../../assets/image/Level 1/new/download (1).svg'
import orangeSmall from '../../assets/image/Level 1/new/download.svg'
import brown from '../../assets/image/Level 3/new/download (1).svg'
import pinkBig from '../../assets/image/Level 4/new/download (10).svg'
import lightYelow from '../../assets/image/Level 4/new/download (4).svg'
import purpuleSmall from '../../assets/image/Level 4/new/download (1).svg'
import bordovyi from '../../assets/image/Level 4/new/download (6).svg'
import yellow from '../../assets/image/Level 1/new/download (6).svg'

export const medium1 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 16,
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
      imageUrl: brown,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block2',
      position: { row: 0, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellowBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block3',
      position: { row: 0, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: gray,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block4',
      position: { row: 2, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block5',
      position: { row: 1, col: 4 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: pinkBig,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block6',
      position: { row: 3, col: 2 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: pink,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block7',
      position: { row: 3, col: 0 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: blue,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block8',
      position: { row: 4, col: 3 },
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
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block10',
      position: { row: 1, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: purpuleSmall,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block11',
      position: { row: 1, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'bottom'
    },
  ],
  solutionSteps: [
    {
      id: 'block8',
      position: { row: 4, col: 1 },
    },
    {
      id: 'block4',
      position: { row: 4, col: 5 },
    },
    {
      id: 'block5',
      position: { row: 3, col: 4 },
    },
    {
      id: 'block3',
      position: { row: 2, col: 5 },
    },
    {
      id: 'block2',
      position: { row: 0, col: 3 },
    },
    {
      id: 'block10',
      position: { row: 0, col: 2 },
    },

    {
      id: 'red',
      position: { row: 2, col: 1 },
    },
    {
      id: 'block7',
      position: { row: 0, col: 0 },
    },
    {
      id: 'block8',
      position: { row: 4, col: 0 },
    },
    {
      id: 'block6',
      position: { row: 3, col: 1 },
    },
    {
      id: 'block11',
      position: { row: 4, col: 3 },
    },
    {
      id: 'red',
      position: { row: 2, col: 3 },
    },
    {
      id: 'block10',
      position: { row: 1, col: 2 },
    },
    {
      id: 'block2',
      position: { row: 0, col: 2 },
    },
    {
      id: 'block3',
      position: { row: 0, col: 5 },
    },
    {
      id: 'red',
      position: { row: 2, col: 8 },
    },
  ]
};


export const medium2 = {
  gridSize: { rows: 6, cols: 6 },
  steps: 20,
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
      position: { row: 3, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: brown,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block2',
      position: { row: 0, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellowBig,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block3',
      position: { row: 3, col: 1 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: gray,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block4',
      position: { row: 4, col: 5 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: green,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block5',
      position: { row: 1, col: 2 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: pinkSmall,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block6',
      position: { row: 3, col: 4 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: pink,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block7',
      position: { row: 3, col: 0 },
      size: { width: 1, height: 3 },
      orientation: 'vertical',
      imageUrl: blue,
      animationClass: '',
      direction: 'top'
    },
    {
      id: 'block8',
      position: { row: 5, col: 2 },
      size: { width: 3, height: 1 },
      orientation: 'horizontal',
      imageUrl: greenBig,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block9',
      position: { row: 4, col: 3 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: lightYelow,
      animationClass: '',
      direction: 'left'
    },
    {
      id: 'block10',
      position: { row: 1, col: 0 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: yellow,
      animationClass: '',
      direction: 'right'
    },
    {
      id: 'block11',
      position: { row: 2, col: 3 },
      size: { width: 1, height: 2 },
      orientation: 'vertical',
      imageUrl: bordovyi,
      animationClass: '',
      direction: 'bottom'
    },
    {
      id: 'block12',
      position: { row: 1, col: 3 },
      size: { width: 2, height: 1 },
      orientation: 'horizontal',
      imageUrl: orangeSmall,
      animationClass: '',
      direction: 'left'
    },
  ],
  solutionSteps: [
    {
      id: 'block2',
      position: { row: 0, col: 3 },
    
    },
    {
      id: 'block5',
      position: { row: 0, col: 2 },
  
    },
    {
      id: 'red',
      position: { row: 2, col: 1 },
     
    },
    {
      id: 'block7',
      position: { row: 2, col: 0 },

    },
    {
      id: 'block12',
      position: { row: 1, col: 4 },
      size: { width: 2, height: 1 },
    
    },
    {
      id: 'block11',
      position: { row: 1, col: 3 },

    },
    {
      id: 'block6',
      position: { row: 3, col: 3 },
     
    },
    {
      id: 'block4',
      position: { row: 2, col: 5 },

    },

    {
      id: 'block8',
      position: { row: 5, col: 3 },
   
    },
    {
      id: 'block1',
      position: { row: 4, col: 2 },
   
    },
  
    {
      id: 'block3',
      position: { row: 4, col: 1 },
     
    },
    {
      id: 'block6',
      position: { row: 3, col: 1 },
      
    },
    {
      id: 'block9',
      position: { row: 4, col: 4 },
   },
    {
      id: 'block11',
      position: { row: 3, col: 3 },
    
    },
    {
      id: 'red',
      position: { row: 2, col: 3 },

    },
    {
      id: 'block5',
      position: { row: 1, col: 2 },

    },
    {
      id: 'block2',
      position: { row: 0, col: 2 },
  
    },
    {
      id: 'block12',
      position: { row: 1, col: 3 },
      size: { width: 2, height: 1 },

    },
    {
      id: 'block4',
      position: { row: 0, col: 5 },

    },
    {
      id: 'red',
      position: { row: 2, col: 8 },

    },
   
  ]
};