/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo2.png'
import { MenuData } from '~/constants/renaral.const'

const Header = () => {
  return (
    <div>
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
          <Menu items={MenuData} />
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
const Menu = ({ items }: any) => {
  return (
    <ul className='flex gap-x-[48px] text-[#191919]'>
      {items.map((menuItem: any, index: any) => (
        <MenuItem key={index} menuItem={menuItem} />
      ))}
    </ul>
  )
}

const MenuItem = ({ menuItem }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='flex items-center gap-x-0.5'>
        <a href={menuItem.path} className='text-[#191919]'>
          {menuItem.title}
        </a>
        {menuItem.children && (
          <svg
            className='w-4 h-4 translate-y-0.5 mr-1 text-red-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M18.4 10.3A2 2 0 0 0 17 7H7a2 2 0 0 0-1.5 3.3l4.9 5.9a2 2 0 0 0 3 0l5-6Z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </div>
      {menuItem.children && isOpen && (
        <ul className='ml-4 border-l border-gray-200 fixed'>
          {menuItem.children.map((childItem: any, index: any) => (
            <MenuItem key={index} menuItem={childItem} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default Header
