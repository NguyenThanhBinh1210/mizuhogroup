import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false)
  console.log(showButton)
  const { pathname } = useLocation()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className='bg-[#1b3281] rounded-full w-[50px] h-[50px] border flex items-center justify-center fixed bottom-10 right-10'
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m5 15 7-7 7 7'
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
