import { StrictMode, FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isVisibleDrawerState } from '../../store/isVisibleDrawerState'

import Header from '../molecules/layout/Header'
import ResponsiveDrawer from '../../components/organisms/ResponsiveDrawer'
import Footer from '../molecules/layout/Footer'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

const drawerWidth = 220

type Props = {
  window?: () => typeof window
}

const DefaultLayout: FC<Props> = (props) => {
  const { window } = props
  const container = window !== undefined ? () => window().document.body : undefined

  const [isVisibleDrawer, setIsVisibleDrawer] = useRecoilState(isVisibleDrawerState)

  const handleDrawerToggle = () => {
    setIsVisibleDrawer(!isVisibleDrawer)
  }

  return (
    <StrictMode>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
        <ResponsiveDrawer
          drawerWidth={drawerWidth}
          container={container}
          isVisibleDrawer={isVisibleDrawer}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </StrictMode>
  )
}

export default DefaultLayout
