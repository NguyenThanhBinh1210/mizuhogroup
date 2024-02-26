/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItems from './MenuItem'
const Dropdown = ({ submenus, dropdown, depthLevel }: any) => {
  depthLevel = depthLevel + 1
  const dropdownClass =
    depthLevel > 1
      ? 'dropdown-submenu  !text-sm !shadow-none border-l !rounded-none  w-[500px]  !-translate-x-0 pl-[30px] h-full  !py-0 !left-[250px] !top-0 !py-3'
      : ''
  return (
    <ul
      className={`dropdown w-full min-h-[350px] max-w-[1290px] left-1/2 -translate-x-1/2 ${dropdownClass} ${
        dropdown ? 'show ' : ''
      }`}
    >
      {submenus.map((submenu: any, index: any) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown
