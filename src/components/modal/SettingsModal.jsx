
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import SwitchButton from '../buttons/SwitchButton'
import { useTranslation } from 'react-i18next'
import LanguageSelect from '../buttons/LanguageSelect'
import { useColorMode } from '@chakra-ui/react'

const SettingsModal = ({ setShowPopup }) => {
 
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()


  const handleToggleTheme = () => {
    toggleColorMode();
    
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const closeWithAnimation = () => {
    setShowPopup(false)
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
            closed: {
              opacity: 0
            }
          }}
          className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/50 p-4'
          onClick={closeWithAnimation}
        >
          <div
            className={`relative max-h-full w-full overflow-y-auto overflow-x-hidden rounded border bg-white pb-4 shadow-md dark:border-majky-400  dark:bg-slate-900/80 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-sm:w-full md:max-w-xs`}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <FontAwesomeIcon
              className='absolute left-4 top-4 h-6 w-6 cursor-pointer hover:text-majky-600 active:text-majky-500'
              onClick={closeWithAnimation}
              icon={faClose}
            />
            <h2 className='border-b border-majky-600 pb-1 pt-7 text-center text-2xl font-bold text-majky-800 shadow dark:text-majky-400'>
              {t('Options')}
            </h2>
            <div className='my-4 p-4 text-center shadow'>
              <div className='flex flex-col items-center'>
                <div className='flex w-full cursor-pointer items-center text-base font-bold text-gray-600 dark:text-majky-400'>
                  <div className='mr-2 w-40'>
                    <SwitchButton
                      id='setting-theme-2'
                      onChange={handleToggleTheme}
                      checked={colorMode === 'light'}
                    />
                  </div>
                  <label className='text-balance' htmlFor={'setting-theme-2'}>
                    {t('theme')}
                  </label>
                </div>
               
                <div className='mt-4 flex w-full cursor-pointer items-center text-base font-bold text-gray-600 dark:text-majky-400'>
                  <div className='mr-2 w-40'>
                    <LanguageSelect />
                  </div>
                  <label className='text-balance' htmlFor={'options-language'}>
                    {t('language')}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default SettingsModal
