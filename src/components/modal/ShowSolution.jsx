import { Flex, Text, ScaleFade } from '@chakra-ui/react'

import React, { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

import RippleButton from '../buttons/RippleButton'
import { useAtom } from 'jotai'
import { showSolutionAtom } from '../../atoms/atoms'

const ShowSolution = ({ setShowPopupSolution }) => {
  const popupRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [, setShowSolution] = useAtom(showSolutionAtom)

  const { t } = useTranslation()

  useEffect(() => {
    setShowPopup(true)

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsShaking(true)

        setTimeout(() => {
          setIsShaking(false)
        }, 600)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const closeWithAnimation = () => {
    setShowPopupSolution(false)
  }

  return (
    <Flex
      w='100%'
      h='100%'
      position='absolute'
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg='rgba(0, 0, 0, 0.5)'
      zIndex={200}
      justify='center'
      align='center'
    >
      <ScaleFade in={showPopup} initialScale={0.8}>
        <Flex
          ref={popupRef}
          align='center'
          flexDir='column'
          position='relative'
          className='relative max-h-full w-full overflow-y-auto overflow-x-hidden rounded border bg-white pb-4 shadow-md dark:border-majky-400  dark:bg-slate-900/80 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-sm:w-full md:max-w-xs'
          p={5}
          borderRadius={8}
          boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
          w='300px'
          overflow='auto'
          sx={{
            animation: isShaking ? 'shake 0.6s' : 'none',
            '@keyframes shake': {
              '0%': { transform: 'translateY(0)' },
              '25%': { transform: 'translateY(-10px)' },
              '50%': { transform: 'translateY(10px)' },
              '75%': { transform: 'translateY(-10px)' },
              '100%': { transform: 'translateY(0)' }
            }
          }}
        >
          <Text fontSize='md' my={2} mb={2} fontWeight={'600'}>
            {t('showSolution')}
          </Text>

          <Flex gap={'14px'}>
            <RippleButton
              className='rounded w-[70px] border-majky-200 bg-majky-50 py-1 text-center text-majky-800 dark:bg-slate-800 dark:text-majky-400'
              onClick={() => {
                setShowSolution(true)
                closeWithAnimation()
              }}
            >
              Ok
            </RippleButton>
            <RippleButton
              className='rounded w-[70px] border-majky-200 bg-majky-400 py-1 text-center text-white dark:bg-majky-600 dark:text-slate-800'
              onClick={closeWithAnimation}
            >
              {t('cancel')}
            </RippleButton>
          </Flex>
        </Flex>
      </ScaleFade>
    </Flex>
  )
}

export default ShowSolution
