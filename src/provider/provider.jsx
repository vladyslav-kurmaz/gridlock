import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import theme from '../assets/theme/theme'

const AppProvider = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider attribute='class' enableSystem>
          {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default AppProvider
