import { memo, FC } from 'react'

import { mainListItems, secondaryListItems } from '../molecules/ListItems'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ScrollToTopOnMount from '../../libs/ScrollToTopOnMount'

type Props = {
  drawerWidth: number
  container: any
  isVisibleDrawer: boolean
  handleDrawerToggle: () => void
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))

const ResponsiveDrawer: FC<Props> = memo((props) => {
  const { drawerWidth, container, isVisibleDrawer, handleDrawerToggle } = props

  const drawer = (
    <div>
      <StyledToolbar />
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </div>
  )

  return (
    <>
      <ScrollToTopOnMount />
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={isVisibleDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
})

export default ResponsiveDrawer
