import { useState, useEffect } from 'react'

const useGameStatistics = () => {
  const getFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
  }

  const [totalPlayed, setTotalPlayed] = useState(
    getFromLocalStorage('totalPlayed', 0)
  )
  const [winStreak, setWinStreak] = useState(
    getFromLocalStorage('winStreak', 0)
  )
  const [completedGames, setCompletedGames] = useState(
    getFromLocalStorage('completedGames', [])
  )
  const winRatio = totalPlayed > 0 ? (winStreak * 100) / totalPlayed : 0

  const averageWinTime =
    completedGames.reduce((prev, { playedTime }) => prev + playedTime, 0) /
    (completedGames.length || 1)

  const fastestWinTime = Math.max(
    ...(completedGames || []).map(({ playedTime }) => playedTime),
    0
  )

  const latestWinTime = Math.min(
    ...(completedGames || []).map(({ playedTime }) => playedTime),
    0
  )

  const resetStatistics = () => {
    setTotalPlayed(0)
    setWinStreak(0)
    setCompletedGames([])
  }

  useEffect(() => {
    localStorage.setItem('totalPlayed', JSON.stringify(totalPlayed))
    localStorage.setItem('winStreak', JSON.stringify(winStreak))
    localStorage.setItem('completedGames', JSON.stringify(completedGames))
  }, [totalPlayed, winStreak, completedGames])

  const updateStatistics = (isWin, playedTime) => {
    setTotalPlayed((prev) => prev + 1)

    if (isWin) {
      setWinStreak((prev) => prev + 1)
      setCompletedGames((prev) => [...prev, { playedTime }])
    } else {
      setWinStreak(0)
    }
  }

  return {
    totalPlayed,
    winRatio,
    winStreak,
    completedGames,
    averageWinTime,
    fastestWinTime,
    latestWinTime,
    resetStatistics,
    updateStatistics
  }
}

export default useGameStatistics
