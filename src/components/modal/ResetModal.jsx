import { Button, Flex, Text, ScaleFade, useColorMode } from '@chakra-ui/react'

import React, { useEffect, useRef, useState } from 'react'
import {
  blocksAtom,
  initialBlocklockAtom,
  moveCountAtom,
  timeAtom
} from '../../atoms/atoms'
import { useAtom } from 'jotai'
import { useTranslation } from 'react-i18next'
import { colorModeValue } from '../../utils/colorModeUtils'
import { useLocation } from 'react-router-dom'

const ResetModal = ({ setOpenRules }) => {
  const popupRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const { pathname } = useLocation()
  const level = pathname.replace('/', '')

  const [initialBlocks] = useAtom(initialBlocklockAtom)
  const [, setBlocks] = useAtom(blocksAtom)
  const [, setMoveCount] = useAtom(moveCountAtom)
  const [, setTime] = useAtom(timeAtom)
  const { t } = useTranslation()
  const { colorMode } = useColorMode()

  const resetLevel = () => {
    setBlocks(initialBlocks)
    setMoveCount(0)
    setTime(0)
    localStorage.removeItem(`${level}-info`)

    closeWithAnimation()
  }

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
    setShowPopup(false)
    setTimeout(() => {
      setOpenRules(false)
    }, 200)
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
          bg={colorModeValue(colorMode, '#3a3a3a', '#fff')}
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
            {t('resetGame')}
          </Text>

          <Flex gap={'14px'}>
            <Button
              py={5.5}
              px={4}
              bg='orange'
              w={'100px'}
              h={'30px'}
              fontSize={'16px'}
              borderRadius={'20px'}
              onClick={resetLevel}
              color={'#fff'}
            >
              Ok
            </Button>
            <Button
              py={2.5}
              px={4}
              w={'100px'}
              h={'30px'}
              fontSize={'16px'}
              borderRadius={'20px'}
              bg='#889'
              onClick={closeWithAnimation}
              color={'#fff'}
            >
              {t('cancel')}
            </Button>
          </Flex>
        </Flex>
      </ScaleFade>
    </Flex>
  )
}

export default ResetModal
