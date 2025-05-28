import { useEffect, useRef } from 'react'
import { useAtom } from 'jotai'
import { runningAtom, timeAtom } from '../atoms/atoms'

export const useStopwatchByLevel = () => {
  const [time, setTime] = useAtom(timeAtom)
  const [running, setRunning] = useAtom(runningAtom)
  const intervalRef = useRef(null)

  const start = () => {
    if (intervalRef.current || running) return
    setRunning(true)
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setRunning(false)
  }

  const reset = () => {
    stop()
    setTime(0)
  }

  useEffect(() => {
    if (time > 0 && !running) {
      start()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return { time, start, stop, reset, running }
}
