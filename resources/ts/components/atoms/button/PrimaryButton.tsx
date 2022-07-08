import { FC } from 'react'
import Button from '@mui/material/Button'

type Props = {
  type: string
  onClick: () => void
  href: string
  children: React.ReactNode
}

const PrimaryButton: FC<Props> = (props) => {
  const { type = "button", href, onClick = () => { }, children } = props
  return (
    <Button type={type} onClick={onClick} color="primary" variant="contained" href={href}>
      {children}
    </Button>
  )
}

export default PrimaryButton
