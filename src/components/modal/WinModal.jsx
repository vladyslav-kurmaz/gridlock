import React, { Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faMedal,
  faStopwatch
} from '@fortawesome/free-solid-svg-icons'
import RippleButton from '../buttons/RippleButton'
import { useAtom } from 'jotai'
import { moveCountAtom, timeAtom } from '../../atoms/atoms'
import { useNavigate } from 'react-router-dom'
import { formatTime } from '../../utils/formatTime'
import CelebratingClip from '../сelebratingClip/CelebratingClip'

const WindModal = ({ setOpenRules }) => {
  const { t } = useTranslation()

  const [moveCount] = useAtom(moveCountAtom)
  const [time] = useAtom(timeAtom)

  const closeModal = () => {
    setOpenRules(false)
  }

  const navigate = useNavigate()

  return (
    <Fragment>
      {<CelebratingClip />}
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
            className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/50 p-4 '
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
          >
            <div
              className={`max-h-full w-full max-w-[300px] relative grid-cols-1 rounded border bg-white p-2 pb-4 shadow-md dark:border-majky-400 dark:bg-slate-900/80  md:p-4`}
            >
              <FontAwesomeIcon
                className='absolute left-4 top-4 h-6 w-6 cursor-pointer hover:text-majky-600 active:text-majky-500'
                onClick={closeModal}
                icon={faClose}
              />
              <div className='flex w-full flex-1 flex-col items-center justify-center'>
                <h2 className='mb-2 w-full max-w-60 text-center text-xl font-bold text-majky-800 dark:text-majky-400 xs:text-2xl'>
                  {t('youWin')}
                </h2>

                <div className='flex w-full max-w-60 flex-row items-center justify-between border border-majky-600 bg-majky-50 px-4 py-1 text-majky-600 dark:bg-slate-900 dark:text-majky-400'>
                  <span>
                    <FontAwesomeIcon icon={faMedal} className='mr-2' />
                    {t('you')}
                  </span>
                  <span>{moveCount ?? 0}</span>
                </div>

                <div className='mt-2 flex w-full max-w-60 flex-row items-center justify-between rounded-lg bg-majky-50 px-4 py-1 text-majky-600 dark:bg-slate-900 dark:text-majky-400'>
                  <span>
                    <FontAwesomeIcon icon={faStopwatch} className='mr-2' />
                    {t('time')}
                  </span>
                  <span>{formatTime(time)}</span>
                </div>
                <div className='relative mt-2 grid w-full max-w-60'>
                  <RippleButton
                    onClick={(e) => {
                      e.stopPropagation()
                      closeModal()
                      navigate('/')
                    }}
                    className={`rounded border border-transparent bg-majky-600 py-2 text-base font-bold  text-white  dark:bg-majky-400 dark:text-slate-900  max-xs:py-1`}
                  >
                    {t('newGame')}
                  </RippleButton>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </Fragment>
  )
}

export default WindModal
