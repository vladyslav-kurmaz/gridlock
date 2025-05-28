import {
  useColorMode,
  Button,
  Checkbox,
  Text
} from '@chakra-ui/react'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      w={'100%'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      onClick={toggleColorMode}
      bg={'transparent'}
      _hover={{ bg: 'transparent' }}
      border={'1px solid'}
      borderColor={'#889'}
    >
      <Text fontSize='md'>Dark mode</Text>
      <Checkbox isChecked={colorMode === 'light' ? false : true} />
    </Button>
  )
}

export default ColorModeButton
