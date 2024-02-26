/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItems from './MenuItem'
const Dropdown = ({ submenus, dropdown, depthLevel }: any) => {
  depthLevel = depthLevel + 1
  const dropdownClass =
    depthLevel > 1
      ? 'dropdown-submenu !text-sm !shadow-none border-l !rounded-none !min-w-max !w-max !-translate-x-0 pl-[30px] !py-0 !left-[310px] top-0'
      : ''
  return (
    <ul className={`dropdown min-w-[1290px] left-1/2 -translate-x-1/2 ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu: any, index: any) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown
