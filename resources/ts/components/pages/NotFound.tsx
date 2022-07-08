import { FC } from 'react'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

const NotFound: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Paper sx={{ p: 2 }}>
        ページが見つかりませんでした。
      </Paper>
    </Container>
  )
}

export default NotFound
