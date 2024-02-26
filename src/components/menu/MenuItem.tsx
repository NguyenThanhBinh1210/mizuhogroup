/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'

import { Link } from 'react-router-dom'

const MenuItems = ({ items, depthLevel }: any) => {
  const [dropdown, setDropdown] = useState(false)

  const ref = useRef<any>()

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  const closeDropdown = () => {
    dropdown && setDropdown(false)
  }

  return (
    <li
      className={`menu-items group  ${depthLevel > 0 ? '!text-[14px] !leading-3' : '!text-lg'}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? items.title : <Link to={items.url}>{items.title}</Link>}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
              <svg
                className='text-red-600 w-[17px] h-[17px]  ml-2'
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
                  d='m9 5 7 7-7 7'
                />
              </svg>
            ) : (
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
            )}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            className=''
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} {depthLevel > 0 ? <span>&raquo;</span> : <span className='arrow' />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
      {depthLevel === 0 && (
        <div className='bg-red-600 w-0 transition-all duration-300 group-hover:w-[90%] left-1/2 -translate-x-1/2 h-0.5 top-full -translate-y-2 absolute'></div>
      )}
    </li>
  )
}

export default MenuItems
