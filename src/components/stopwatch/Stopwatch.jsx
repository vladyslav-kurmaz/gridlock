import { Box, Text } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { timeAtom } from '../../atoms/atoms'
import { useEffect } from 'react'

const formatTime = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  return `${hours}:${mins}:${secs}`
}

const StopwatchDisplay = ({level}) => {
  const [time, setTime] = useAtom(timeAtom)

  useEffect(() => {
    const getInfo = localStorage.getItem(`${level}-info`)
    ? JSON.parse(localStorage.getItem(`${level}-info`))
    : undefined
    const storedTime = getInfo ? getInfo.time : undefined

    if (storedTime && storedTime !== 'undefined') {
      setTime(parseInt(storedTime, 10))
    }
  }, [setTime, level])

  return (
    <Box p={2}>
      <Text fontSize='18px' fontWeight='bold'>
        {formatTime(time)}
      </Text>
    </Box>
  )
}

export default StopwatchDisplay
