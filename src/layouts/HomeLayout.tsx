import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div>
      <Header></Header>
      <div className='mt-[100px]'>{children}</div> <Footer></Footer>{' '}
    </div>
  )
}

export default HomeLayout
