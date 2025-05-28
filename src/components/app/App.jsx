import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../header/Header'
import MainPage from '../../pages/MainPage'
import LevelCategoryPage from '../../pages/LevelCategoryPage'
import { Flex, useColorMode } from '@chakra-ui/react'
import HowToPlay from '../modal/HowToPlay'
import { useAtom } from 'jotai'
import {
  isWinAtom,
  openMenuAtom,
  openRatingAtom,
  openResetAtom,
  openRulesAtom,
  openSettingsAtom,
  openSolutionAtom,
  showSolutionAtom
} from '../../atoms/atoms'
import ResetModal from '../modal/ResetModal'
import WinModal from '../modal/WinModal'
import SettingsModal from '../modal/SettingsModal'
import RatingModal from '../modal/RatingModal'
import { use, useEffect, useState } from 'react'
import MenuModal from '../modal/MenuModal'
import ShowSolution from '../modal/ShowSolution'

import { levels } from '../../constants'
import { easy1} from '../../levels/easy/easy'
import { medium1 } from '../../levels/medium/medium'
import { hard1 } from '../../levels/hard/hard'
import { evil1 } from '../../levels/evil/evil'

/* eslint-disable no-restricted-globals */
function App() {
  const [openRules, setOpenRules] = useAtom(openRulesAtom)
  const [openReset, setOpenReset] = useAtom(openResetAtom)
  const [openSettings, setOpenSettings] = useAtom(openSettingsAtom)
  const [openRating, setOpenRating] = useAtom(openRatingAtom)
  const [openMenu, setOpenMenu] = useAtom(openMenuAtom)
  const [openSolution, setOpenSolution] = useAtom(openSolutionAtom)
  const [isWin, setIsWin] = useAtom(isWinAtom)
  const [showSolution] = useAtom(showSolutionAtom)

  const [isGenerating, setIsGenerating] = useState(false)

  // useEffect(() => {
  //   const now = new Date();
  //   const todayDate = now.toISOString().split('T')[0];
  //   localStorage.setItem('currentDate', todayDate);
  //   const storedDate = localStorage.getItem('currentDate');

  //   levels.forEach((level) => {
  //     const easyLevel = localStorage.getItem(`${level.title}_level`);
  //     const easyLevelNew = localStorage.getItem(`${level.title}_level_new`);

  //     if (!easyLevel) {
  //       const staticLevel = loadStaticLevel(level.title);  // Завантажуємо статичний рівень
  //       localStorage.setItem(`${level.title}_level`, JSON.stringify(staticLevel));  // Зберігаємо його в easy_level
  //       generateAndSaveNewLevel(level.title);  // Генеруємо новий рівень і зберігаємо його в easy_level_new
  //     } else {
  //       // Якщо easy_level присутній, перевіряємо чи потрібно генерувати новий рівень
  //       if (!easyLevelNew && !isGenerating) {
  //         setIsGenerating(true);
  //         generateAndSaveNewLevel(level.title);  // Генеруємо новий рівень
  //       }
  //     }

  //     if (storedDate !== todayDate) {
  //       localStorage.setItem(`${level.title}_level`, easyLevelNew);  // Перезаписуємо easy_level новим рівнем
  //       localStorage.removeItem(`${level.title}_level_new`);  // Очищаємо easy_level_new
  //       generateAndSaveNewLevel(level.title);

  //     }
  //   });

  // }, [isGenerating]);

  useEffect(() => {
    const now = new Date()
    const nowTime = now.getTime() // Поточний час у мілісекундах
    const todayDate = now.toISOString().split('T')[0]
    // localStorage.setItem('lastLevelUpdateTime', nowTime.toString())
    const lastUpdateTime = parseInt(
      localStorage.getItem('lastLevelUpdateTime'),
      10
    )
    const storedDate = localStorage.getItem('currentDate')

    localStorage.setItem('currentDate', todayDate)
    
    const fiveMinutesPassed = lastUpdateTime ? nowTime - lastUpdateTime >= 5 * 60 * 1000 : true

    levels.forEach((level) => {
      const easyLevel = localStorage.getItem(`${level.title}_level`)
      const easyLevelNew = localStorage.getItem(`${level.title}_level_new`)
      // console.log(easyLevel);

      if (!easyLevel) {
        const staticLevel = loadStaticLevel(level.title)
      // console.log(staticLevel);
      
      //   console.log(JSON.stringify(staticLevel))

        localStorage.setItem(
          `${level.title}_level`,
          JSON.stringify(staticLevel)
        )
        // console.log(
        //   'localStorage',
        //   localStorage.getItem(`${level.title}_level`)
        // )



        generateAndSaveNewLevel(level.title)
      } else {
        if (!easyLevelNew && !isGenerating) {
          setIsGenerating(true)
          generateAndSaveNewLevel(level.title)
        }
      }

      // 🔁 ОНОВЛЕННЯ КОЖНІ 5 ХВИЛИН
      if (fiveMinutesPassed) {
        console.log('test');

        easyLevelNew && localStorage.setItem(`${level.title}_level`, easyLevelNew)
        // localStorage.removeItem(`${level.title}_level_new`)
        localStorage.removeItem(`${level.title}-info`)
        generateAndSaveNewLevel(level.title)
      }

      // 🕛 ЛОГІКА НА 24 ГОДИНИ — ЗАКОМЕНТОВАНО
      /*
      if (storedDate !== todayDate) {
        localStorage.setItem(`${level.title}_level`, easyLevelNew);
        localStorage.removeItem(`${level.title}_level_new`);
        generateAndSaveNewLevel(level.title);
      }
      */
    })

    if (fiveMinutesPassed) {
      localStorage.setItem('lastLevelUpdateTime', nowTime.toString())
    }
  }, [isGenerating])

  const generateAndSaveNewLevel = (level) => {
    // console.log('generateAndSaveNewLevel');

    return new Promise((resolve, reject) => {
      const worker = new Worker(
        new URL('../../workers/levelWorker.js', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (event) => {
        const newLevel = event.data // Отримуємо згенерований рівень
        localStorage.setItem(`${level}_level_new`, JSON.stringify(newLevel)) // Зберігаємо рівень
        resolve(newLevel) // Повертаємо результат
        worker.terminate() // Завершуємо роботу воркера
      }

      worker.onerror = (error) => {
        console.error('Worker error:', error)
        reject(error)
        worker.terminate() // Завершуємо роботу воркера у разі помилки
      }

      worker.postMessage(level) // Відправляємо рівень на обчислення
    })
  }

  const loadStaticLevel = (level) => {
    if (level === 'easy') {
      return easy1
    } else if (level === 'medium') {
      return medium1
    } else if (level === 'hard') {
      return hard1
    } else if (level === 'evil') {
      return evil1
    } else {
      return easy1
    }
  }

  const { colorMode } = useColorMode()

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault()

    document.body.addEventListener('touchmove', preventDefault, {
      passive: false
    })

    return () => {
      document.body.removeEventListener('touchmove', preventDefault)
    }
  }, [])

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [colorMode])

  useEffect(() => {
    setTimeout(() => document.documentElement.classList.remove('dark'), 0)
  }, [])

  return (
    <Flex flexDirection={'column'} overflow={'hidden'}>
      <Router>
        <Header />
        {openRules && <HowToPlay setOpenRules={setOpenRules} />}
        {openReset && <ResetModal setOpenRules={setOpenReset} />}
        {openSettings && <SettingsModal setShowPopup={setOpenSettings} />}
        {openRating && <RatingModal setOpenRules={setOpenRating} />}
        {openMenu && <MenuModal setShowPopup={setOpenMenu} />}
        {openSolution && (
          <ShowSolution setShowPopupSolution={setOpenSolution} />
        )}
        {isWin && !showSolution && <WinModal setOpenRules={setIsWin} />}

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='easy' element={<LevelCategoryPage />} />
          <Route path='medium' element={<LevelCategoryPage />} />
          <Route path='hard' element={<LevelCategoryPage />} />
          <Route path='evil' element={<LevelCategoryPage />} />
        </Routes>
      </Router>
    </Flex>
  )
}

export default App
