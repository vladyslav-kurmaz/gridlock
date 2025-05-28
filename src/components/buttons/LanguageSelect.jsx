
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import RippleButton from './RippleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { settingsLanguages } from '../../constants'
import { useTranslation } from 'react-i18next'

const LanguageSelect = () => {
  const { i18n } = useTranslation()

  const currentLeng = settingsLanguages.languages.filter(
    (leng) => leng.value === i18n.language
  )[0]

  const [showOptions, setShowOptions] = useState(false)

  const handleLanguage = (value) => {
    i18n.changeLanguage(value)
    setShowOptions(false)
  }

  useEffect(() => {
    const closeModal = () => {
      setShowOptions(false)
    }
    if (showOptions) document.addEventListener('click', closeModal)
    return () => {
      if (showOptions) document.removeEventListener('click', closeModal)
    }
  }, [showOptions])

  return (
    <motion.div
      initial='closed'
      animate='open'
      exit='closed'
      layout
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 }
      }}
      className='relative flex justify-center'
    >
      <RippleButton
        onClick={() => setShowOptions((prev) => !prev)}
        className="flex items-center space-x-2 rounded border border-transparent bg-white px-2 py-2 text-base font-bold text-gray-600 shadow-none hover:border-gray-600 hover:bg-gray-100 dark:bg-slate-800 dark:text-majky-400 dark:hover:border-majky-400 max-xs:py-1"
        style={{ width: 'auto', height: 'auto' }}
      >
        <img src={currentLeng.src} alt='flag' className='ml-4 h-8 w-8' />
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`transition-transform duration-300 ${showOptions ? 'rotate-180' : 'rotate-0'}`}
        />
      </RippleButton>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            className='absolute bottom-full z-50 w-40 rounded border border-majky-400 bg-white shadow-md dark:bg-slate-800'
            initial='closed'
            animate='open'
            exit='closed'
            layout
            variants={{
              open: { opacity: 1, y: 0, scale: 1 },
              closed: {
                opacity: 0,
                y: 30,
                scale: 0.95,
                transition: { delay: 0.2, duration: 0.1 }
              }
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <motion.div className='flex flex-col items-center justify-center rounded text-base font-bold text-majky-800'>
              {settingsLanguages.languages.map((item, idx, arr) => (
                <RippleButton
                  key={`language-${item.value}`}
                  className={`flex w-full cursor-pointer items-center rounded border-majky-200 bg-majky-50 px-4 py-1 text-left hover:bg-majky-600 hover:text-white dark:border-majky-400 dark:bg-slate-800 dark:text-majky-400 dark:hover:bg-majky-400 dark:hover:text-slate-800 max-xs:leading-9 ${idx < arr.length && 'border-b'}`}
                  onClick={() => handleLanguage(item.value)}
                >
                  <img src={item.src} alt='flag' className='mr-4 h-8 w-8' />
                  {item.label}
                </RippleButton>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default LanguageSelect
