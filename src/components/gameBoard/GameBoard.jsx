import { Box, Flex, Grid, Image } from '@chakra-ui/react'
import Block from '../block/Block'
import gossip from '../../assets/image/gossip.svg'
import bg from '../../assets/image/background.jpg'
import beton from '../../assets/image/beton.svg'
import finalFlag from '../../assets/image/final-flag.svg'
import redArrow from '../../assets/image/final-arrows.svg'
import { BORDER_PADDING, CELL_SIZE, indexArrow } from '../../constants'

const GameBoard = ({
  blocks,
  onMove,
  isClearRoad,
  isWin,
  showSolution,
  setShowSolution,
  stopSolution
}) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      mb={'20px'}
      position={'relative'}
      w={'100%'}
      p={6}
    >
      {showSolution && (
        <Box
          bg={'red.500'}
          px={3}
          borderRadius={'50px'}
          color={'whiteAlpha.800'}
          position={'absolute'}
          fontSize={{ 380: '12px', sm: '14px', 550: '16px' }}
          left={'50%'}
          top={0}
          zIndex={'100'}
          transform={'translateX(-50%)'}
          cursor={'pointer'}
          onClick={() => {
            stopSolution()
            setShowSolution(false)
          }}
        >
          Stop showing solution
        </Box>
      )}
      <Box
        position={'absolute'}
        top={`calc(2.5 * ${CELL_SIZE}px - ${BORDER_PADDING}px)`}
        right={0}
        zIndex={2}
        h={CELL_SIZE}
      >
        <Image
          src={finalFlag}
          w={6}
          h={CELL_SIZE}
          zIndex={2}
          objectFit={'cover'}
        />
      </Box>

      <Image
        src={bg}
        w={'100%'}
        h={'100%'}
        position={'absolute'}
        top={0}
        left={0}
        zIndex={1}
        objectFit={'fill'}
      />

      <Box
        gap={1}
        bg='gray.300'
        position='relative'
        w={`calc(6 * ${CELL_SIZE}px)`}
        h={`calc(6 * ${CELL_SIZE}px)`}
        border={'1px solid white'}
        zIndex={49}
      >
        <Image
          src={beton}
          w={'100%'}
          h={'100%'}
          position={'absolute'}
          zIndex={1}
          opacity={0.5}
        />
        <Image
          src={gossip}
          w={'100%'}
          h={'100%'}
          position={'absolute'}
          top={0}
          left={0}
          zIndex={2}
        />

        <Image
          zIndex={3}
          src={redArrow}
          position={'absolute'}
          right={{ base: '10px', 380: '5px', sm: '0px' }}
          top={`calc(${indexArrow} * ${CELL_SIZE}px - ${BORDER_PADDING}px)`}
          w={{ 0: '45px', 380: '45px', sm: '55px', 550: '75px' }}
          h={{ 0: '45px', 380: '45px', sm: '55px', 550: '52px' }}
        />

        {blocks.map((block) => (
          <Block
            key={block.id}
            block={block}
            handleMouseDown={onMove}
            blocks={blocks}
            isClearRoad={isClearRoad}
            isWin={isWin}
          />
        ))}
      </Box>
    </Flex>
  )
}

export default GameBoard
