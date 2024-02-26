import { MenuData } from '~/constants/renaral.const'
import MenuItems from './MenuItem'

const Menu = () => {
  return (
    <nav>
      <ul className='menus '>
        {MenuData.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Menu
