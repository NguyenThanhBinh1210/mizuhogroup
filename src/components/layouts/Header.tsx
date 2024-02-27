/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo2.png'
import Menu from '../menu/Menu'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className='border-b fixed w-full h-max top-0 left-0 z-10 bg-white'>
      <div className='max-w-[1440px] relative lg:px-[72px] px-[16px] mx-auto'>
        <div className='lg:flex justify-end gap-x-6 py-2 hidden '>
          <Link className='text-xs text-[#5f6a6f]' to={'/'}>
            Nghề nghiệp
          </Link>
          <Link className='text-xs text-[#5f6a6f]' to={'/'}>
            Địa điểm
          </Link>
        </div>
        <div className='flex items-center h-[68px]'>
          <img src={logo} alt='logo' className='w-[100px] mr-2 lg:mr-[36px]' />
          <div className='flex items-center w-max h-full lg:-translate-y-2'>
            <p className=' w-max lg:w-[160px] cursor-pointer text-lg text-primary'>Trên toàn thế giới</p>
            <svg
              className='w-[16px] h-[16px] text-red-600 ml-1 group-hover:-rotate-180 transition-all'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M18.4 10.3A2 2 0 0 0 17 7H7a2 2 0 0 0-1.5 3.3l4.9 5.9a2 2 0 0 0 3 0l5-6Z'
                clip-rule='evenodd'
              />
            </svg>
          </div>{' '}
          <Menu showMenu={showMenu} onClose={() => setShowMenu(false)} />
          {showMenu ? (
            <svg
              className='w-8 h-8 text-gray-400 ml-auto cursor-pointer lg:hidden'
              aria-hidden='true'
              onClick={() => setShowMenu(!showMenu)}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18 18 6m0 12L6 6'
              />
            </svg>
          ) : (
            <svg
              className='w-10 h-10 text-primary ml-auto cursor-pointer lg:hidden'
              aria-hidden='true'
              onClick={() => setShowMenu(!showMenu)}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path stroke='currentColor' strokeLinecap='round' strokeWidth='2' d='M5 7h14M5 12h14M5 17h14' />
            </svg>
          )}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 text-gray-400 ml-auto hidden lg:block'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={() => setShowSearch(!showSearch)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <div
          className={`py-3 border-y ${
            showSearch ? 'top-[100px] opacity-100' : '-top-full opacity-0'
          } transition-all duration-500 z-0  fixed bg-white w-full left-0`}
        >
          <div className='max-w-[1440px] flex lg:px-[72px] px-[32px] mx-auto'>
            <div className='w-[234px]  py-3 border-r pr-5'>
              <select className='3 w-full text-gray-500 text-sm'>
                <option value='mizuhoglobal' selected>
                  Worldwide
                </option>
                <option value='japan'>Japan</option>
                <option value='asia-pacific'>Asia Pacific</option>
                <option value='americas'>Americas</option>
                <option value='emea'>Europe, Middle East, and Africa</option>
                <option value='bank'>Mizuho Bank</option>
                <option value='trust-and-banking'>Mizuho Trust &amp; Banking</option>
                <option value='securities'>Mizuho Securities</option>
                <option value='information-and-research'>Mizuho Research &amp; Technologies</option>
              </select>
            </div>
            <div className='flex-1  flex  ml-5'>
              <input
                className='flex-1 px-2 focus:ring-1 py-3 ring-black h-full rounded-sm'
                type='text'
                placeholder='Bạn đang tìm kiếm gì?'
              />
              <button className=' w-[120px] hover:bg-primary hover:text-white transition-all duration-300 border-[3px] text-primary font-medium border-primary h-full'>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
