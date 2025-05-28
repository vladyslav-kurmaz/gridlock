import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import RippleButton from '../buttons/RippleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEye, faGear } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import {
  openMenuAtom,
  openSettingsAtom,

} from '../../atoms/atoms'
import { useAtom } from 'jotai'
import TimeCard from '../stopwatch/TimeCard'
import logo from '../../assets/image/logo Drive Out-01.png'
import { Flex, Image } from '@chakra-ui/react'

const Header = () => {
  const { t } = useTranslation()
  const [, setOpenSettings] = useAtom(openSettingsAtom)
  const [, setOpenMenu] = useAtom(openMenuAtom)


  const { pathname } = useLocation()
  const level = pathname.replace('/', '')

  const location = useLocation()

  const getLevel = () => {
    const level = ['easy', 'medium', 'hard', 'evil']

    if (level.includes(location.pathname.slice(1))) {
      return true
    }
    return false
  }

  // const resetLevel = () => {
  //   setBlocks(initialBlocks)
  //   setMoveCount(0)
  //   setTime(0)
  //   localStorage.removeItem(`${level}-info`)

  //   setOpenMenu(false)
  // }

  return (
    <header className='flex h-16 w-full border-b items-center justify-between border-slate-200 px-3 dark:border-slate-400 max-xs:h-12'>
      <div className='ml-0 md:ml-4'>
        <Link to={'/'} >
          <Flex alignItems={'center'} gap={2}>
          <Image src={logo} alt='logo' width={50} height={50} />
          <h1 className='hidden flex-auto select-none items-center space-x-0 text-2xl font-bold md:space-x-4 md:text-3xl text-majky-600 dark:text-majky-400 sm:flex'>
            <span className='text-majky-600 text- dark:text-majky-400'>
              Drive out
            </span>
          </h1>
          </Flex>
        </Link>
      </div>
      {getLevel() && (
        <div>
          <TimeCard />
        </div>
      )}
      <div className='relative flex flex-row gap-2'>
        {/* {getLevel() && (
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
        )} */}
        <RippleButton
          className='rounded border border-majky-600 bg-majky-600 px-3 py-2 text-white shadow shadow-white dark:bg-slate-900/50 dark:text-majky-400 max-xs:px-1 max-xs:py-0.5'
          onClick={() => {
            setOpenSettings(true)
          }}
        >
          <FontAwesomeIcon icon={faGear} />
        </RippleButton>
        <RippleButton
          className='rounded border border-majky-600 bg-majky-600 px-3 py-2 text-white shadow shadow-white dark:bg-slate-900/50 dark:text-majky-400 max-xs:px-1 max-xs:py-0.5'
          onClick={() => {
            setOpenMenu(true)
          }}
        >
          <FontAwesomeIcon icon={faBars} />
          <div className='hidden md:pl-2 lg:inline-block'>{t('menu')}</div>
        </RippleButton>
      </div>
    </header>
  )
}

export default Header
