import { useState } from 'react'
import banner1 from '~/assets/images/mizuhoglobal_Banner.jpg'
import banner2 from '~/assets/images/japan.jpg'
import banner3 from '~/assets/images/thaibinhduong.jpg'
import banner4 from '~/assets/images/chaumy.jpg'
import banner5 from '~/assets/images/châuu.jpg'
const Banner = () => {
  const BannerData = [
    {
      title: 'Toàn thế giới',
      slug: 'worldwide',
      image: banner1,
      content: (
        <div className='w-full lg:w-[560px] p-4 lg:p-[48px] bg-[rgba(255,255,255,0.75)] md:ml-auto'>
          <h2 className='text-[32px] text-primary lg:text-[55px] leading-none'>
            Kiến thức chuyên môn sâu rộng và giải pháp tài chính
          </h2>
          <p className='text-[#3f464a] mt-3 hidden lg:block'>
            Tập đoàn tài chính Mizuho là một trong những tổ chức tài chính lớn nhất thế giới, cung cấp các dịch vụ tài
            chính và chiến lược thông qua các công ty trong tập đoàn, bao gồm Ngân hàng Mizuho và Chứng khoán Mizuho.
          </p>
          <button className='bg-[#286a88] border-2 border-[#286a88] hover:bg-opacity-80 transition-all text-white font-bold min-w-[200px] py-5 text-xl mt-4'>
            Bạn là ai?{' '}
          </button>
        </div>
      )
    },
    {
      title: 'Nhật Bản',
      slug: 'japan',
      image: banner2,
      content: (
        <div className='w-full h-max lg:w-[560px] p-4 lg:p-[48px] bg-[rgba(91,91,91,0.55)] md:ml-auto'>
          <h2 className='text-[32px] text-white lg:text-[55px] leading-none'>Mizuho Nhật Bản</h2>
          <p className='text-white mt-3 hidden lg:block'>
            Chúng tôi là một trong những tổ chức tài chính hàng đầu tại Nhật Bản, phục vụ cả nhu cầu kinh doanh bán lẻ
            và tổ chức thông qua mạng lưới chi nhánh trên toàn quốc.
          </p>
          <button className='bg-[#80638f] border-2 border-[#80638f] hover:bg-[#a57fb8] transition-all text-white font-bold min-w-[200px] py-5 text-xl mt-4'>
            Tìm một chi nhánh
          </button>
        </div>
      )
    },
    {
      title: 'Châu Á Thái Bình Dương',
      slug: 'asiapacific',
      image: banner3,
      content: (
        <div className='w-full h-max lg:w-[560px] p-4 lg:p-[48px] bg-[rgba(91,91,91,0.55)] md:ml-auto'>
          <h2 className='text-[32px] text-white lg:text-[55px] leading-none'>Mizuho Châu Á Thái Bình Dương</h2>
          <p className='text-white mt-3 hidden lg:block'>
            Chúng tôi đang mở rộng mạng lưới và nâng cao nền tảng sản phẩm và dịch vụ của mình trên khắp Châu Á Thái
            Bình Dương để đáp ứng nhu cầu của các thị trường đang phát triển nhanh chóng trong khu vực.
          </p>
          <button className='bg-[#699544] border-2 border-[#699544] hover:bg-[#7da65b] transition-all text-white font-bold min-w-[200px] py-5 text-xl mt-4'>
            Tìm hiểu thêm
          </button>
        </div>
      )
    },
    {
      title: 'Châu Mỹ',
      slug: 'americas',
      image: banner4,
      content: (
        <div className='w-full h-max lg:w-[560px] p-4 lg:p-[48px] bg-[rgba(91,91,91,0.55)] md:ml-auto'>
          <h2 className='text-[32px] text-white lg:text-[55px] leading-none'>Mizuho Châu Mỹ</h2>
          <p className='text-white mt-3 hidden lg:block'>
            Tại Mizuho Americas, chúng tôi khai thác những gì tốt nhất của cả hai bán cầu và biến nó thành sức mạnh toàn
            cầu.
          </p>
          <button className='bg-[#286a88] border-2 border-[#286a88] hover:bg-[#4797bc] transition-all text-white font-bold min-w-[200px] py-5 text-xl mt-4'>
            Tìm hiểu thêm
          </button>
        </div>
      )
    },
    {
      title: 'Châu Âu, Trung Đông và Châu Phi',
      slug: 'Africa',
      image: banner5,
      content: (
        <div className='w-full h-max lg:w-[560px] p-4 lg:p-[48px] bg-[rgba(91,91,91,0.55)] md:ml-auto'>
          <h2 className='text-[32px] text-white lg:text-[55px] leading-none'>Mizuho EMEA</h2>
          <p className='text-white mt-3 hidden lg:block'>
            Chúng tôi cung cấp cho các doanh nghiệp và tổ chức ở EMEA khả năng tiếp cận và chuyên môn tuyệt vời ở Nhật
            Bản và Châu Á, cũng như hỗ trợ khách hàng Nhật Bản về nhu cầu tài chính của họ trong khu vực của chúng tôi.
            Chúng tôi được coi là đối tác được các công ty châu Âu lựa chọn tại thị trường quê nhà, cung cấp cho họ
            nhiều giải pháp tài chính.
          </p>
          <button className='bg-[#ad9758] border-2 border-[#ad9758] hover:bg-[#e6ca7e] transition-all text-white font-bold min-w-[200px] py-5 text-xl mt-4'>
            Tìm hiểu thêm
          </button>
        </div>
      )
    }
  ]
  const [active, setActive] = useState(BannerData[0])
  return (
    <div className='relative h-[620px] lg:h-[110vh]'>
      <img className='object-cover w-full h-full' src={active.image} alt='banner' />
      <div className='absolute p-4 lg:p-20  w-full h-full top-0 left-0'>
        <div className=' w-full h-full flex flex-col-reverse lg:flex-row max-w-[1296px] mx-auto'>
          <div className='mt-16 md:mt-0 flex flex-col justify-end'>
            {BannerData.map((item) => (
              <div
                onClick={() => setActive(item)}
                key={item.slug}
                className='flex items-center gap-2 cursor-pointer group py-3'
              >
                <div className='w-1.5 h-3.5 group-hover:bg-opacity-100 transition-all  bg-white bg-opacity-60'></div>
                <p
                  className={`${
                    active.title === item.title ? 'text-[28px] lg:text-[44px]' : 'text-[22px] lg:text-[36px]'
                  }  text-white`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          {active.content}
        </div>
      </div>
    </div>
  )
}

export default Banner
