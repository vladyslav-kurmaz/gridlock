import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

import { useTranslation } from 'react-i18next'
import { Box } from '@chakra-ui/react'
import logo from '../../assets/image/logo.svg'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HowToPlayModal = ({ setOpenRules }) => {
  const { t } = useTranslation()

  const closeModal = () => {
    setOpenRules(false)
  }

  const closeWithAnimation = () => {
    setOpenRules(false)
  }

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
            closed: { opacity: 0 }
          }}
          className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/50 p-4'
          onClick={closeModal}
        >
          <motion.div
            className={`relative max-h-full max-w-full flex justify-center align-center overflow-y-auto overflow-x-hidden rounded border bg-white pb-4 shadow-md dark:border-majky-400  dark:bg-slate-900/80 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-sm:w-full md:max-w-screen-md`}
            onClick={closeModal}
          >
            <FontAwesomeIcon
              className='absolute left-4 top-4 h-6 w-6 cursor-pointer hover:text-majky-600 active:text-majky-500'
              onClick={closeWithAnimation}
              icon={faClose}
            />
            <Box maxW={{ base: '300px', sm: '500px' }}>
              <h1 className='mb-4 border-b border-majky-600 pb-1 pt-7 text-center text-2xl font-bold text-majky-800 dark:text-majky-400'>
                Drive out
              </h1>
              <p className='mb-4 px-4'>{t('rulesDescription')}</p>
              <img
                className='max-h-80 w-full object-contain'
                src={logo}
                alt={'logo drive out'}
              />
            </Box>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default HowToPlayModal
