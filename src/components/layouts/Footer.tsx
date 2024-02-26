import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo.png'
const Footer = () => {
  return (
    <div className='bg-[#1b3281] text-white py-12'>
      <div className='max-w-[1440px] lg:px-[72px] px-[48px] mx-auto'>
        <img src={logo} alt='logo' className='w-[169px] mb-4' />
        <div className='grid grid-cols-3'>
          <div className='col-span-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2'>
            <div className='pb-5 border-b md:pb-0 md:border-b-0'>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Công ty tập đoàn
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Tập đoàn tài chính Mizuho
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Ngân hàng Mizuho
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Mizuho Trust & Ngân hàng
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Chứng khoán Mizuho
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Nghiên cứu & Công nghệ Mizuho
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Quản lý tài sản một
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Ngân hàng lưu ký Nhật Bản
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Dịch vụ kỹ thuật số MI
              </Link>
              <Link to={'/'} className='hover:underline text-lg mb-2.5 block'>
                Mizuho cho thuê
              </Link>
            </div>
            <div className='mt-5 pb-5 border-b md:mt-0 md:pb-0 md:border-b-0'>
              <h4 className='text-lg mb-3'>Các công ty khác</h4>

              <Link to={'/'} className='hover:underline mb-2.5 block'>
                Công ty cổ phần Phương Đông
              </Link>
              <Link to={'/'} className='hover:underline mb-2.5 block'>
                J.Score
              </Link>
              <Link to={'/'} className='hover:underline mb-2.5 block'>
                Thủ đô Mizuho
              </Link>
              <Link to={'/'} className='hover:underline mb-2.5 block'>
                Tín dụng hạn mức
              </Link>
              <Link to={'/'} className='hover:underline mb-2.5 block'>
                Chứng khoán PayPay
              </Link>
            </div>
          </div>
          <div className='col-span-3 md:col-span-1 md:pl-10 mt-5 md:mt-0 md:border-l pb-5 border-b md:pb-0 md:border-b-0'>
            <Link to={'/privacy'} className='hover:underline mb-2.5 block'>
              Chính sách bảo mật
            </Link>
            <Link to={'/notice'} className='hover:underline mb-2.5 block'>
              Các điều khoản và điều kiện
            </Link>
            <Link to={'/socialmedia'} className='hover:underline mb-2.5 block'>
              Tiết lộ chính sách
            </Link>
            <Link to={'/socialmedia'} className='hover:underline mb-2.5 block'>
              Chính sách truyền thông xã hội
            </Link>
            <Link to={'/laundering'} className='hover:underline mb-2.5 block'>
              Chính sách chống rửa tiền
            </Link>
          </div>
        </div>
        <div className='flex justify-between mt-5 md:mt-[72px] flex-col md:flex-row pb-5  md:pb-0 '>
          <div className='flex flex-col md:flex-row gap-x-10 flex-wrap max-w-[740px] border-b md:border-b-0 pb-5  md:pb-0'>
            <Link to={'/'} className='hover:underline '>
              Địa điểm
            </Link>
            <Link to={'/'} className='hover:underline '>
              Câu hỏi thường gặp
            </Link>
            <Link to={'/'} className='hover:underline '>
              Sơ đồ trang web
            </Link>
            <Link to={'/'} className='hover:underline '>
              tiếng Nhật
            </Link>
            <Link to={'/'} className='hover:underline '>
              Dịch vụ phân phối e-mail thông cáo báo chí
            </Link>
          </div>
          <div className='mt-5 md:mt-0'>© 2024 Tập đoàn tài chính Mizuho, Inc.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
