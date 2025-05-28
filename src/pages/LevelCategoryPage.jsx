import { useLocation } from 'react-router-dom'
import { VStack, Text, Flex, Box } from '@chakra-ui/react'
import useGridlock from '../hooks/useGridlock'
// import { getLevelsByCategory } from '../levels'
import GameBoard from '../components/gameBoard/GameBoard'
import { AnimatePresence } from 'framer-motion'
import { useStopwatchByLevel } from '../hooks/useStopwatch'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  isPauseAtop,
  showSolutionAtom,
  openSolutionAtom,
  blocksAtom,
  initialBlocklockAtom,
  moveCountAtom,
  timeAtom
} from '../atoms/atoms'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useAtom } from 'jotai'
import RippleButton from '../components/buttons/RippleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { easy1} from '../levels/easy/easy'
import { medium1 } from '../levels/medium/medium'
import { hard1 } from '../levels/hard/hard'
import { evil1 } from '../levels/evil/evil'

const LevelCategoryPage = () => {
  const { pathname } = useLocation()
  const category = pathname.replace('/', '')
  const [showSolution, setShowSolution] = useAtom(showSolutionAtom)
  const [, openSolution] = useAtom(openSolutionAtom)
  const [initialBlocks] = useAtom(initialBlocklockAtom)
  const [, setBlocks] = useAtom(blocksAtom)
  const [, setMoveCount] = useAtom(moveCountAtom)
  const [, setTime] = useAtom(timeAtom)
  const [level, setLevel] = useState(
    JSON.parse(localStorage.getItem(`${category}_level`))
  )

  const loadStaticLevel = (level) => {
    if (level === 'easy') {
      return easy1
    } else if (level === 'medium') {
      return medium1
    } else if (level === 'hard') {
      return hard1
    } else if (level === 'evil') {
      return evil1
    } else {
      return easy1
    }
  }


  const location = useLocation()

  const { t } = useTranslation()

  const [isPause] = useAtom(isPauseAtop)

  useEffect(() => {
    const storedLevel = localStorage.getItem(`${category}_level`)

    if (storedLevel) {
      const level = JSON.parse(storedLevel)

      setLevel(level)
    }
  }, [category])

  const { start, stop, reset } = useStopwatchByLevel(category)

  useEffect(() => {
    start()
    return () => reset()
    // eslint-disable-next-line
  }, [])

  const resetLevel = () => {
    setBlocks(initialBlocks)
    setMoveCount(0)
    setTime(0)
    localStorage.removeItem(`${level}-info`)

    // setOpenMenu(false)
  }

  const getLevel = () => {
    const level = ['easy', 'medium', 'hard', 'evil']

    if (level.includes(location.pathname.slice(1))) {
      return true
    }
    return false
  }

  const {
    blocks,
    handleMouseDown,
    isWin,
    isClearRoad,
    moveCount,
    startSolution,
    stopSolution
  } = useGridlock({
    initialBlocks: level?.blocks,
    gridSize: level?.gridSize,
    solutionSteps: level?.solutionSteps
  })

  useEffect(() => {
    if (showSolution) {
      startSolution()
    }
    // eslint-disable-next-line
  }, [showSolution])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (moveCount === 0) {
        start()
      }
    }, 200)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [moveCount])

  useEffect(() => {
    if ((isWin && !showSolution) || (isPause && showSolution)) {
      stop()
    }
    // eslint-disable-next-line
  }, [isWin])

  if (!level) return <Text>Level not found</Text>

  return (
    <VStack p={6} spacing={4}>
      <Box maxW={'550px'}>
        <Flex justifyContent={'flex-end'} mb={6} gap={2} px={2}>
          {getLevel() && (
            <RippleButton
              className='rounded border border-majky-600 bg-majky-600 px-3 py-2 text-white shadow shadow-white dark:bg-slate-900/50 dark:text-majky-400 max-xs:px-1 max-xs:py-0.5 '
              onClick={() => {
                // openSolution(true)
                resetLevel()
              }}
            >
              <Text fontWeight={700} fontSize={'xs'}>
                {t('reset1')} <br /> {t('reset2')}
              </Text>
            </RippleButton>
          )}
          {getLevel() && (
            <RippleButton
              className='rounded border border-majky-600 bg-majky-600 px-3 py-2 text-white shadow shadow-white dark:bg-slate-900/50 dark:text-majky-400 max-xs:px-1 max-xs:py-0.5'
              onClick={() => {
                openSolution(true)
              }}
            >
              <FontAwesomeIcon icon={faEye} />
            </RippleButton>
          )}
        </Flex>
        <Flex
          fontSize={'lg'}
          fontWeight={'bold'}
          justifyContent={'space-between'}
          w={'100%'}
          h={'100%'}
          mb={4}
          px={2}
        >
          <Flex alignItems={'center'}>
            Drive out {t(category.toLowerCase())}
          </Flex>

          <Flex alignItems={'center'}>
            {t('moves')}: {moveCount}/{level?.steps}
          </Flex>
        </Flex>

        <AnimatePresence>
          <GameBoard
            blocks={blocks}
            onMove={handleMouseDown}
            gridSize={level.gridSize}
            isClearRoad={isClearRoad}
            isWin={isWin}
            showSolution={showSolution}
            stopSolution={stopSolution}
            setShowSolution={setShowSolution}
          />
        </AnimatePresence>
      </Box>
    </VStack>
  )
}

export default LevelCategoryPage
