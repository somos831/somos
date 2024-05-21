import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 })
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return {
        isDesktopOrLaptop,
        isTabletOrMobile,
        isTablet,
        isMobile
    }
    
}

export default useResponsive