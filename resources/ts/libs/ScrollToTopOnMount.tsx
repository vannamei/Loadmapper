import { useEffect, FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isVisibleDrawerState } from '../store/isVisibleDrawerState'

const ScrollToTopOnMount: FC = () => {
  const { pathname } = useLocation()

  const setIsVisibleDrawer = useSetRecoilState(isVisibleDrawerState)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisibleDrawer(false)
  }, [pathname])

  return null
}

export default ScrollToTopOnMount
