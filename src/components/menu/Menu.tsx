/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuData } from '~/constants/renaral.const'
import MenuItems from './MenuItem'
import { Link } from 'react-router-dom'

const Menu = ({ showMenu, onClose }: any) => {
  return (
    <nav
      className={`fixed  lg:static bg-white w-full  lg:top-[100px] ${
        showMenu ? 'top-[68px]' : '-top-full'
      } left-0 transition-all duration-500 h-full`}
    >
      <div className='w-full px-8 border-t lg:hidden flex py-3'>
        <input className='flex-1' type='text' placeholder='Bạn đang tìm kiếm gì?' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 text-gray-400 ml-auto '
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
      <div className='w-full px-8 border-y py-3 lg:hidden'>
        <select className='3 w-full text-sm'>
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
      <ul className='menus flex-col lg:flex-row'>
        {MenuData.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems onClose={() => onClose()} items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
      <div className='lg:hidden gap-x-6 py-5 gap-5  px-[32px] flex border-t flex-col mt-3'>
        <Link onClick={onClose} className='lg:text-xs text-base text-[#5f6a6f]' to={'/'}>
          Nghề nghiệp
        </Link>
        <Link onClick={onClose} className='lg:text-xs text-base text-[#5f6a6f]' to={'/'}>
          Địa điểm
        </Link>
      </div>
    </nav>
  )
}

export default Menu
