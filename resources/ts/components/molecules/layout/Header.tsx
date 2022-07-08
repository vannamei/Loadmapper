import { FC } from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

import LogoImg from '@img/loadmappers_logo.svg'

type Props = {
  drawerWidth: number
  handleDrawerToggle: () => void
}

const Header: FC<Props> = (props) => {
  const { drawerWidth, handleDrawerToggle } = props

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <img height="26px" src={LogoImg} alt="loadmappers" />
        </Link>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
