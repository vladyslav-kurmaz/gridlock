import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import logo from '../assets/image/logo.svg'
import { useEffect, useState } from 'react'
import { FaRegCirclePause, FaRegCirclePlay } from 'react-icons/fa6'
import { MdDone } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { openRulesAtom } from '../atoms/atoms'
import { useTranslation } from 'react-i18next'
import { levels } from '../constants';



const MainPage = () => {
  const [, setOpenRules] = useAtom(openRulesAtom)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [pause, setPause] = useState({})


  useEffect(() => {
    const pauseData = levels.reduce((acc, level) => {
      const data = localStorage.getItem(`${level.title}-info`)
      acc[level.title] = data ? JSON.parse(data) : null
      return acc
    }, {})

    setPause(pauseData)
    // eslint-disable-next-line
  }, [levels])

  return (
    <Flex flexDirection={'column'} mx={'auto'} h={'100%'} p={2.5} pb={5}>
      <Heading as={'h1'} mt={6} mb={5} fontSize={'56px'} textAlign={'center'}>
        Drive out
      </Heading>
      <Box
        onClick={() => setOpenRules(true)}
        display={'flex'}
        gap={2}
        flexDir={'column'}
        alignItems={'center'}
        color={'blue.500'}
        fontSize={'lg'}
        cursor={'pointer'}
      >
        <Text>{t('rules')}</Text>
        <Image src={logo} alt={'logo gridlock'} w={'150px'} />
      </Box>

      <Text
        as={'h2'}
        mt={6}
        mb={2.5}
        fontSize={'xl'}
        textAlign={'center'}
        fontWeight={'bold'}
      >
        {t('puzzles')}
      </Text>

      <List
        display={'flex'}
        gap={2.5}
        flexWrap={'nowrap'}
        justifyContent={'space-between'}
      >
        {levels.map((level) => (
          <ListItem
            key={level.id}
            cursor={'pointer'}
            onClick={() => {
              navigate(level.link)
            }}
            position={'relative'}
          >
            <Flex flexDirection={'column'} alignItems={'center'}>
              <Text as={'b'}>{t(level.id)}</Text>{' '}
              <Text mt={-2}>{t(level.title)}</Text>
            </Flex>
            <Button
              w={{base: '56px', 380:'76px'}}
              h={{base: '56px', 380:'76px'}}
              p={'10px'}
              bg={'transparent'}
              mt={2.5}
              transition='transform 0.1s ease-out, box-shadow 0.1s ease-out'
              _hover={{
                bg: 'transparent',
                transform: 'scale(1.02)',
                boxShadow: 'lg',
                shadow: '5px 5px 10px rgba(255, 255, 255, 0.2)'
              }}
              border={'1px solid gray'}
            >
              {pause[level.title]?.checkWin ? (
                <MdDone fontSize={70} color={'green'} />
              ) : pause[level.title]?.isPause ? (
                <FaRegCirclePause fontSize={70} color={level.color} />
              ) : (
                <FaRegCirclePlay fontSize={70} color={level.color} />
              )}
            </Button>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default MainPage
