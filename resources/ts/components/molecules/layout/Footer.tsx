import { FC } from 'react'
import Typography from '@mui/material/Typography'

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Vannamei {new Date().getFullYear()}
    </Typography>
  )
}

const Footer: FC = () => {
  return (
    <footer>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </footer>
  )
}

export default Footer
