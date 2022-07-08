import { FC } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { RecoilRoot } from "recoil"
import Router from './Router'
import theme from './Theme'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
