import { Box, Flex, Image } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { CELL_SIZE } from '../../constants'
import light from '../../assets/image/light.svg'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { isColoredModeAtom, showSolutionAtom } from '../../atoms/atoms'

const MotionImage = motion(Image)
const MotionBox = motion(Box)

const Block = ({ block, handleMouseDown, isClearRoad, isWin }) => {
  const {
    id,
    position,
    size,
    orientation,
    isTarget,
    imageUrl,
    animationClass,
    direction
  } = block
  const prevMouse = useRef(null)
  const [out, setOut] = useState(false)
  const [isColoredCar] = useAtom(isColoredModeAtom)
  const [showSolution] = useAtom(showSolutionAtom)

  useEffect(() => {
    if (showSolution) {
      setOut(true)
    } else {
      setOut(false)
    }
  }, [showSolution])

  const getRotateDeg = (direction) => {
    switch (direction) {
      case 'top':
        return 0
      case 'left':
        return 270
      case 'bottom':
        return 180
      case 'right':
        return 90
    }
  }
  

  const handleMouseDownHandler = (e) => {
    setOut(false)
    handleMouseDown(e, block, prevMouse, orientation, false)
  }

  const handleTouchStartHandler = (e) => {
    setOut(false)
    e.preventDefault()

    handleMouseDown(e, block, prevMouse, orientation, true)
  }

  return (
    <MotionBox
      key={id}
      ref={prevMouse}
      onMouseDown={handleMouseDownHandler}
      onTouchStart={handleTouchStartHandler}
      onMouseUp={() => setOut(true)}
      onTouchEnd={() => setOut(true)}
      width={`${CELL_SIZE * size.width}px`}
      height={`${CELL_SIZE * size.height}px`}
      position={'absolute'}
      top={`calc(${position.row} * ${CELL_SIZE}px)`}
      left={`calc(${position.col} * ${CELL_SIZE}px)`}
      bg={imageUrl ? '' : isTarget ? 'red.400' : 'blue.400'}
      borderRadius='md'
      cursor='grab'
      className={animationClass}
      zIndex={99}
      overflow={isTarget && isClearRoad ? 'visible' : 'hidden'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      style={out ? { transition: 'all 0.5s ease' } : undefined}
      userSelect='none'
      animate={
        isTarget && isWin ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }
      }
      transition={{
        x: { duration: 0.6, ease: 'easeInOut' },
        opacity: { duration: 0.6, delay: 0.8 }
      }}
      filter={isTarget ? '' : isColoredCar ? '' : 'grayscale(100%)'}
    >
      {imageUrl && (
        <>
          <Box
            position={'absolute'}
            top={0}
            left={0}
            w={'100%'}
            h={'100%'}
            zIndex={98}
          ></Box>
          <Box position={'relative'}>
            <Image
              src={imageUrl}
              alt='Block image'
              width={`${
                CELL_SIZE *
                (orientation === 'horizontal' ? size.height : size.width)
              }px`}
              height={`${
                CELL_SIZE *
                (orientation === 'horizontal' ? size.width : size.height)
              }px`}
              objectFit='contain'
              borderRadius='md'
              transform={`rotate(${getRotateDeg(direction)}deg)`}
              zIndex={97}
              transformOrigin={'center'}
            />
          </Box>

          {isTarget && isClearRoad && (
            <Flex
              position={'absolute'}
              right={{ 0: '-57px', 380: '-70px', 451: '-123px', 550: '-160px' }}
              top={{ 550: '-62px' }}
              transformOrigin={'center'}
              transform={'rotate(270deg) '}
              alignItems={'flex-start'}
              justifyContent={'center'}
              maxW={'200px'}
              width={{ 0: '60%', 451: '70%', 550: '100%' }}
            >
              <MotionImage
                position='relative'
                src={light}
                top={0}
                left={{ 0: '3px', 380: '36px', 451: '17px', 550: '18px' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                width={{ 0: '60%', 451: '80%', 550: '100%' }}
                height={'80%'}
              />
              <MotionImage
                position='relative'
                src={light}
                bottom={0}
                right={{ 0: '3px', 380: '36px', 451: '17px', 550: '18px' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                width={{ 0: '60%', 451: '80%', 550: '100%' }}
              />
            </Flex>
          )}
        </>
      )}
    </MotionBox>
  )
}

export default Block
