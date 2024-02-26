import { Link } from 'react-router-dom'
import image1 from '~/assets/images/mizuhoglobal_Desktop.jpg'
import image2 from '~/assets/images/mizuhoglobal_Desktop2.jpg'
import image3 from '~/assets/images/mizuhoglobal_Desktop3.jpg'
const FeaturedData = [
  {
    title: 'ESG Milestones',
    path: '/',
    img: image1,
    content: (
      <ul className='!list-disc'>
        <li className='block text-primary cursor-pointer leading-7'>Group CSuO message</li>
        <li className='block text-primary cursor-pointer leading-7'>Latest ESG updates</li>
      </ul>
    )
  },
  {
    title: 'ESG Milestones',
    path: '/',
    img: image2,
    content: (
      <div className='font-thin'>
        In Japanese, mizuho means "a fresh harvest of rice," and our name expresses our continuing commitment to offer
        highly valuable financial products and services to all of our customers, all over the world.{' '}
      </div>
    )
  },
  {
    title: 'ESG Milestones',
    path: '/',
    img: image3,
    content: (
      <div className='font-thin'>
        We bring fruitfulness to all of our stakeholders and contribute to the prosperity of economies and societies
        throughout the world, by bringing together our group–wide expertise and conducting business activities and
        operations rooted in this concept.
      </div>
    )
  }
]
const Featured = () => {
  return (
    <div className='grid lg:grid-cols-3'>
      {FeaturedData.map((item, index) => (
        <div key={index} className='relative h-[223px] md:h-[320px] lg:h-auto'>
          <img src={item.img} alt='' className='w-full h-full object-cover' />
          <div className='p-4 lg:p-[48px] group flex flex-col justify-between absolute top-0 left-0 w-full h-full transition-all duration-500 hover:bg-white hover:bg-opacity-85'>
            <div>
              <p className='text-white text-3xl lg:text-5xl mb-5 group-hover:text-black transition-all duration-500'>
                {item.title}
              </p>
              <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500'>
                {item.content}
              </div>
            </div>
            <Link
              to={item.path}
              className='text-primary hover:underline font-bold mt-auto invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500'
            >
              Discover more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featured
