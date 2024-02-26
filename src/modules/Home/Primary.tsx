import { Link } from 'react-router-dom'
import banner from '~/assets/images/mizuhoglobal_Desktop4.jpg'
const Primary = () => {
  return (
    <div className='bg-[#f5f4f4] py-4 lg:py-[72px]'>
      <div className='w-full max-w-[1290px] bg-white cursor-pointer group mx-auto  flex flex-col md:flex-row justify-between'>
        <div className='w-full p-4 lg:p-[48px] md:max-w-[520px] flex flex-col justify-center bg-[#3d9bc6] text-white'>
          <p className='text-3xl md:text-5xl '>Our responsibility is to you, not our bottom line.</p>
          <p className='my-6'>
            Corporate Social Responsibility (CSR) is integral to our efforts to serve the interests of you and all other
            stakeholders. Gain insights into our approach to CSR through case studies, initiatives to resolve social
            issues, noteworthy social contributions, and our commitment to diversity in human resources management.
          </p>
          <Link to={'/'} className='font-bold group-hover:underline'>
            Read more
          </Link>
        </div>
        <div className='w-full flex-1 m'>
          <img className='block w-full h-full object-cover' src={banner} alt='banner' />
        </div>
      </div>
    </div>
  )
}

export default Primary
