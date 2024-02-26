/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo2.png'
import Menu from '../menu/Menu'

const Header = () => {
  return (
    <div className='border-b'>
      <div className='max-w-[1440px] lg:px-[72px] px-[48px] mx-auto'>
        <div className='flex justify-end gap-x-6 py-2'>
          <Link className='text-xs text-[#5f6a6f]' to={'/'}>
            Nghề nghiệp
          </Link>
          <Link className='text-xs text-[#5f6a6f]' to={'/'}>
            Địa điểm
          </Link>
        </div>
        <div className='flex items-center h-[68px]'>
          <img src={logo} alt='logo' className='w-[100px] mr-[36px]' />
          <Menu />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 text-gray-400 ml-auto'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header
