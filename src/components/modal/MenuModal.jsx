import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import RippleButton from '../buttons/RippleButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { MENU_NAVIGATIONS } from '../../constants'
import SwitchButton from '../buttons/SwitchButton'
import LanguageSelect from '../buttons/LanguageSelect'
import { useTranslation } from 'react-i18next'
import { useColorMode } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import {
  openMenuAtom,
  openRatingAtom,
  openRulesAtom,
  openSettingsAtom
} from '../../atoms/atoms'

const MenuModal = () => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const { pathname } = useLocation()
  const level = pathname.replace('/', '')

  const [, setOpenMenu] = useAtom(openMenuAtom)
  const [, setOpenSettings] = useAtom(openSettingsAtom)
  const [, setOpenRating] = useAtom(openRatingAtom)
  const [, setOpenRules] = useAtom(openRulesAtom)

  const navigate = useNavigate()

  const getAction = (name) => {
    switch (name) {
      case 'options':
        return setOpenSettings(true)
      case 'howToPlay':
        return setOpenRules(true)
      case 'statistics':
        return setOpenRating(true)
    }
  }

  const closeModal = () => {
    setOpenMenu(false)
  }

  // const resetLevel = () => {
  //   setBlocks(initialBlocks)
  //   setMoveCount(0)
  //   setTime(0)
  //   localStorage.removeItem(`${level}-info`)

  //   closeModal()
  // }

  return (
    <AnimatePresence>
      {
        <motion.div
          initial='closed'
          animate='open'
          exit='closed'
          layout
          variants={{
            open: { opacity: 1 },
            closed: {
              opacity: 0
            }
          }}
          className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/50 p-4'
          onClick={closeModal}
        >
          <motion.div
            className={`relative flex max-h-full w-full flex-col justify-between overflow-y-auto overflow-x-hidden rounded border bg-white pb-4 shadow-md dark:border-majky-400  dark:bg-slate-800 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-sm:w-full md:max-w-xs`}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <FontAwesomeIcon
              className='absolute left-4 top-4 h-6 w-6 cursor-pointer hover:text-majky-600 active:text-majky-500'
              onClick={closeModal}
              icon={faClose}
            />
            <motion.h2
              layout
              className='border-b  border-majky-600 pb-1 pt-7 text-center text-2xl font-bold text-majky-800 shadow dark:text-majky-400'
            >
              {t('menu')}
            </motion.h2>
            <div className='absolute right-4 top-4'>
              <SwitchButton
                id='setting-theme'
                onChange={toggleColorMode}
                checked={colorMode === 'light'}
              />
            </div>
            <motion.div className='my-4 grid grid-cols-1 gap-1 text-center'>
              {MENU_NAVIGATIONS.map(({ label, to, newGame }, idx) => (
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  layout
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: { delay: idx * 0.1 }
                    },
                    closed: {
                      y: 10,
                      opacity: 0
                    }
                  }}
                  key={`menu-button-${idx}`}
                >
                  <RippleButton
                    disabled={label === 'newGame' && level.length === 0}
                    onClick={() => {
                      if (to) {
                        navigate(to)
                        closeModal()
                      }
                      if (label) {
                        getAction(label)
                        closeModal()
                      }

                      if (newGame) {
                        navigate('/')
                      }
                    }}
                    className={`rounded border  border-transparent bg-white px-2 py-2 text-base font-bold text-gray-600 shadow-none hover:border-gray-600 hover:bg-gray-100  dark:bg-slate-800  dark:text-majky-400 dark:hover:border-majky-400 max-xs:py-1 disabled:opacity-50`}
                  >
                    {t(label)}
                  </RippleButton>
                </motion.div>
              ))}
            </motion.div>
            <LanguageSelect />
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default MenuModal
