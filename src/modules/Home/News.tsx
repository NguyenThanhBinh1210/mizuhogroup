import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className='bg-white py-8 md:py-[72px] text-primary px-3'>
      <div className='max-w-[1290px] mx-auto'>
        <h2 className='text-4xl border-b pb-3'>News</h2>
        <ul className='mb-4'>
          {[1, 1, 1, 1, 1].map((_, index) => (
            <li key={index} className='pt-9 pb-3 border-b last:border-b-0'>
              <p className='text-2xl'>Announcement of Change in Representative Executive Officer(PDF/90KB)</p>
              <p className='mt-4 text-base font-bold text-gray-600'>Feb 22, 2024</p>
            </li>
          ))}
        </ul>
        <Link to={'/'} className='font-bold text-primary mt-4 hover:underline'>
          Xem thêm
        </Link>
        <h2 className='text-4xl border-b pb-3 mt-10'>Information</h2>
        <ul className='mb-4'>
          {[1, 1, 1, 1, 1].map((_, index) => (
            <li key={index} className='pt-9 pb-3 border-b last:border-b-0'>
              <p className='text-2xl'>Announcement of Change in Representative Executive Officer(PDF/90KB)</p>
              <p className='mt-4 text-base font-bold text-gray-600'>Feb 22, 2024</p>
            </li>
          ))}
        </ul>
        <Link to={'/'} className='font-bold text-primary mt-4 hover:underline'>
          Xem thêm
        </Link>
      </div>
    </div>
  )
}

export default News
