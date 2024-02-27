import { Link } from 'react-router-dom'
import image1 from '~/assets/images/mizuhoglobal_Desktop5.jpg'
import image2 from '~/assets/images/mizuhoglobal_Desktop6.jpg'
import image3 from '~/assets/images/mizuhoglobal_Desktop7jpg.jpg'
const Featured2Data = [
  {
    path: '/',
    image: image1,
    title: 'Chuyển đổi thông qua số hóa'
  },
  {
    path: '/',
    image: image2,
    title: 'Trả lại ở châu Mỹ'
  },
  {
    path: '/',
    image: image3,
    title: 'Đưa vào EMEA'
  }
]
const Featured2 = () => {
  return (
    <div className='bg-[#f5f4f4] py-[72px]'>
      <div className='max-w-[1290px]  gap-10 grid cursor-pointer mx-auto  md:grid-cols-3'>
        {Featured2Data.map((item, index) => (
          <div key={index + item.path} className='group'>
            <div className='h-[230px] overflow-hidden'>
              <img
                className='group-hover:scale-105 transition-all object-cover w-full h-full'
                src={item.image}
                alt={item.image}
              />
            </div>
            <p className='text-primary text-xl my-3'>{item.title} </p>
            <Link className='font-bold text-primary group-hover:underline' to={'/'}>
              Tìm hiểu thêm
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured2
