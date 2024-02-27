import { Link } from 'react-router-dom'
import image1 from '~/assets/images/mizuhoglobal_Desktop.jpg'
import image2 from '~/assets/images/mizuhoglobal_Desktop2.jpg'
import image3 from '~/assets/images/mizuhoglobal_Desktop3.jpg'
const FeaturedData = [
  {
    title: 'Các cột mốc quan trọng',
    path: '/',
    img: image1,
    content: (
      <ul className='!list-disc'>
        <li className='block text-primary cursor-pointer leading-7'>Thông điệp nhóm CSuO</li>
        <li className='block text-primary cursor-pointer leading-7'>Cập nhật ESG mới nhất</li>
      </ul>
    )
  },
  {
    title: 'Lịch sử',
    path: '/',
    img: image2,
    content: (
      <div className='font-thin'>
        Trong tiếng Nhật, mizuho có nghĩa là "mùa thu hoạch lúa tươi" và tên của chúng tôi thể hiện cam kết không ngừng
        cung cấp các sản phẩm và dịch vụ tài chính có giá trị cao cho tất cả khách hàng trên toàn thế giới.
      </div>
    )
  },
  {
    title: 'Bản sắc doanh nghiệp',
    path: '/',
    img: image3,
    content: (
      <div className='font-thin'>
        Chúng tôi mang lại lợi ích cho tất cả các bên liên quan và đóng góp vào sự thịnh vượng của các nền kinh tế và xã
        hội trên toàn thế giới bằng cách tập hợp kiến thức chuyên môn của toàn tập đoàn và tiến hành các hoạt động kinh
        doanh bắt nguồn từ khái niệm này.
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
              Khám phá nhiều hơn
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featured
