import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { CELL_SIZE } from '../constants'
import { checkChangePosition } from '../utils/checkChangePosition'
import { useAtom } from 'jotai'
import {
  blocksAtom,
  initialBlocklockAtom,
  isPauseAtop,
  isWinAtom,
  moveCountAtom,
  showSolutionAtom,
  timeAtom
} from '../atoms/atoms'
import { useLocation } from 'react-router-dom'
import useGameStatistics from './useGameStatisticss'
import { isClearRoad } from '../utils/isClearRoad'

const useGridlock = ({
  initialBlocks,
  gridSize,
  solutionSteps,
  delay = 1000
}) => {
  const { pathname } = useLocation()
  const level = pathname.replace('/', '')
  const getLevelFromLocalStorage = localStorage.getItem(`${level}-info`)
    ? JSON.parse(localStorage.getItem(`${level}-info`))
    : undefined
  const [, setInitialBlocksState] = useAtom(initialBlocklockAtom)
  const [blocks, setBlocks] = useAtom(blocksAtom)
  const [moveCount, setMoveCount] = useAtom(moveCountAtom)
  const [checkWin, setCheckWin] = useState(false)
  const [, setIsWin] = useAtom(isWinAtom)
  const prevPositionRef = useRef(null)
  const [time, setTime] = useAtom(timeAtom)
  const [isPause, setIsPause] = useAtom(isPauseAtop)
  const { updateStatistics } = useGameStatistics()

  const [currentStep, setCurrentStep] = useState(0)
  const [isSolving, setIsSolving] = useState(false)
  const [showSolution, setShowSolution] = useAtom(showSolutionAtom)

  const moveListeners = useRef({})

  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setIsPause(false)
      setIsFirstRender(false)
      return
    }

    const infoObj = { isPause, blocks, gridSize, moveCount, checkWin, time }

    localStorage.setItem(`${level}-info`, JSON.stringify(infoObj))

    return () => {
      const infoObj = {
        isPause: true,
        blocks,
        gridSize,
        moveCount,
        checkWin,
        time
      }
      localStorage.setItem(`${level}-info`, JSON.stringify(infoObj))
    }
  }, [
    checkWin,
    level,
    blocks,
    gridSize,
    moveCount,
    isFirstRender,
    time,
    isPause,
    setIsPause
  ])

  const resetLevel = () => {
    setBlocks(initialBlocks)
    setMoveCount(0)
  }

  useEffect(() => {
    setInitialBlocksState(initialBlocks)

    setBlocks(
      getLevelFromLocalStorage ? getLevelFromLocalStorage.blocks : initialBlocks
    )
    setMoveCount(
      getLevelFromLocalStorage ? getLevelFromLocalStorage.moveCount : 0
    )
    setTime(getLevelFromLocalStorage ? getLevelFromLocalStorage.time : 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkCollision = useCallback((movingBlock, newPosition, blocks) => {
    const newWidth = movingBlock.size?.width || 1
    const newHeight = movingBlock.size?.height || 1

    return blocks.some((block) => {
      if (block === movingBlock) return false

      const blockRow = Math.round(block.position.row)
      const blockCol = Math.round(block.position.col)
      const blockWidth = block.size?.width || 1
      const blockHeight = block.size?.height || 1

      const newRow =
        newPosition.row < blockRow
          ? Math.ceil(newPosition.row)
          : Math.floor(newPosition.row)
      const newCol =
        newPosition.col < blockCol
          ? Math.ceil(newPosition.col)
          : Math.floor(newPosition.col)

      const rowsOverlap =
        newRow < blockRow + blockHeight && newRow + newHeight > blockRow

      const colsOverlap =
        newCol < blockCol + blockWidth && newCol + newWidth > blockCol

      return rowsOverlap && colsOverlap
    })
  }, [])

  const handleMouseMove = useCallback(
    (e, block, prevMouse, orientation, isTouchEvent) => {
      if (!prevMouse.current) return
      const clientX = isTouchEvent ? e.touches?.[0]?.clientX : e.clientX
      const clientY = isTouchEvent ? e.touches?.[0]?.clientY : e.clientY
      if (clientX == null || clientY == null) return

      const deltaX = clientX - prevMouse.current.clientX
      const deltaY = clientY - prevMouse.current.clientY

      const stepX = deltaX / CELL_SIZE
      const stepY = deltaY / CELL_SIZE

      setBlocks((prevBlocks) => {
        return prevBlocks.map((prevBlock) => {
          if (prevBlock.id !== block.id) return prevBlock

          const size = prevBlock.size || { width: 1, height: 1 }

          let newPosition =
            orientation === 'vertical'
              ? { ...prevBlock.position, row: prevBlock.position.row + stepY }
              : { ...prevBlock.position, col: prevBlock.position.col + stepX }

          if (prevBlock.isTarget) {
            newPosition.col = Math.max(
              0,
              Math.min(newPosition.col, gridSize.cols + size.width + 3)
            )
          } else {
            newPosition.row = Math.max(
              0,
              Math.min(newPosition.row, gridSize.rows - size.height)
            )
            newPosition.col = Math.max(
              0,
              Math.min(newPosition.col, gridSize.cols - size.width)
            )
          }

          if (checkCollision(prevBlock, newPosition, prevBlocks)) {
            return prevBlock
          }

          return {
            ...prevBlock,
            position: newPosition,
            animationClass: prevBlock.animationClass || ' '
          }
        })
      })

      prevMouse.current = { clientX, clientY }
    },
    [gridSize, checkCollision, setBlocks]
  )

  const handleMouseUp = useCallback(
    (prevMouse, block) => {
      prevMouse.current = null

      document.removeEventListener('mousemove', moveListeners.current.mouse)
      document.removeEventListener('mouseup', moveListeners.current.mouseUp)
      document.removeEventListener('touchmove', moveListeners.current.touch)
      document.removeEventListener('touchend', moveListeners.current.touchEnd)

      setBlocks((prevBlocks) =>
        prevBlocks.map((prevBlock) => {
          if (prevBlock.id !== block.id) return prevBlock

          const oldBlock = prevPositionRef.current
          const move = checkChangePosition(
            Math.round(prevBlock.position.row),
            Math.round(prevBlock.position.col),
            block.position.row,
            block.position.col
          )

          if (
            oldBlock.id === prevBlock?.id &&
            oldBlock.position.row === Math.round(prevBlock.position.row) &&
            oldBlock.position.col === Math.round(prevBlock.position.col)
          ) {
            setMoveCount((count) =>
              move ? (count === 0 ? 0 : count - 1) : count
            )
          } else {
            setMoveCount((count) => (move ? count + 1 : count))
          }

          return {
            ...prevBlock,
            position: {
              row: Math.round(prevBlock.position.row),
              col: Math.round(prevBlock.position.col)
            }
          }
        })
      )

      setCheckWin(true)
    },
    [setBlocks, setMoveCount]
  )

  const handleMouseDown = useCallback(
    (e, block, prevMouse, orientation, isTouchEvent) => {
      const clientX = isTouchEvent ? e.touches?.[0]?.clientX : e.clientX
      const clientY = isTouchEvent ? e.touches?.[0]?.clientY : e.clientY
      if (clientX == null || clientY == null) return

      prevMouse.current = { clientX, clientY }

      if (!prevPositionRef.current || prevPositionRef.current.id !== block.id) {
        prevPositionRef.current = block
      }

      setCheckWin(false)

      if (isTouchEvent) {
        moveListeners.current.touch = (ev) =>
          handleMouseMove(ev, block, prevMouse, orientation, true)
        moveListeners.current.touchEnd = () => handleMouseUp(prevMouse, block)

        document.addEventListener('touchmove', moveListeners.current.touch)
        document.addEventListener('touchend', moveListeners.current.touchEnd)
      } else {
        moveListeners.current.mouse = (ev) =>
          handleMouseMove(ev, block, prevMouse, orientation, false)
        moveListeners.current.mouseUp = () => handleMouseUp(prevMouse, block)

        document.addEventListener('mousemove', moveListeners.current.mouse)
        document.addEventListener('mouseup', moveListeners.current.mouseUp)
      }
    },
    [handleMouseMove, handleMouseUp]
  )

  const isClearRoad = useMemo(() => {
    const target = blocks?.find((b) => b.isTarget)

    if (!target || !checkWin) return false

    const { row, col } = target.position
    const { width } = target.size
    const targetEnd = col + width

    const pathCells = []
    for (let c = targetEnd; c < gridSize.cols; c++) {
      pathCells.push(`${row}:${c}`)
    }

    const occupied = new Set()
    blocks.forEach((block) => {
      if (block === target) return
      const { row: bRow, col: bCol } = block.position
      const { width: bWidth, height: bHeight } = block.size

      for (let r = 0; r < bHeight; r++) {
        for (let c = 0; c < bWidth; c++) {
          occupied.add(`${bRow + r}:${bCol + c}`)
        }
      }
    })

    return pathCells.every((cell) => !occupied.has(cell))
  }, [blocks, checkWin, gridSize])


  const isWin = useMemo(() => {
    const target = blocks.find((b) => b.isTarget)
    return target && target.position.col + target.size.width > gridSize.cols
  }, [blocks, gridSize])

  useEffect(() => {
    if (!showSolution) {
      setIsWin(isWin)

      if (isWin) {
        updateStatistics(isWin, time)
      }

      return () => setIsWin(false)
    }

    // eslint-disable-next-line
  }, [isWin, setIsWin])

  const moveBlock = useCallback((step) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === step.id ? { ...block, position: step.position } : block
      )
    )
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isSolving && currentStep < solutionSteps.length) {
      const step = solutionSteps[currentStep]
      setMoveCount((prevMoveCount) => prevMoveCount + 1)
      moveBlock(step)

      const timeoutId = setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1)
      }, delay)

      return () => clearTimeout(timeoutId)
    } else if (currentStep >= solutionSteps.length) {
      setBlocks(initialBlocks)
      setShowSolution(false)
      setMoveCount(0)
    }
    // eslint-disable-next-line
  }, [currentStep, isSolving, solutionSteps, delay])

  const startSolution = () => {
    setBlocks(initialBlocks)
    setMoveCount(0)
    // setShowSolution(true)
    setTimeout(() => {
      setIsSolving(true)
      setCurrentStep(0)
    }, 1000)
  }

  const stopSolution = () => {
    // if (currentStep > solutionSteps.length) {
    setIsSolving(false)
    setShowSolution(false)
    setTimeout(() => {
      setMoveCount(0)
      setBlocks(initialBlocks)
    }, 100)
    // }
  }

  return {
    blocks,
    handleMouseDown,
    resetLevel,
    startSolution,
    stopSolution,
    isWin,
    isClearRoad,
    moveCount
  }
}

export default useGridlock
